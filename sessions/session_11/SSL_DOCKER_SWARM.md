
---

# How to SSL in front of Docker Swarm!

We want to add HTTPS to our website. As always there's more than one way to do it, but here we will set up a load balancer to do the SSL termination, and "proxy" the requests to the application servers in cleartext inside our network.

## Prerequisites

* 3 hosts with a application deployed to docker swarm
* A domain (consider https://itustudent.itu.dk/Campus-Life/IT-Services/Free-Services/one, https://www.simply.com/dk/domains/?q=cooltwit has domains down to ~70 DKK)

For testing, this guide will use the following `docker-compose.yml` file:

```yml
version: "3.9"

services:
  echo:
    image: ealen/echo-server
    environment:
      ENABLE__HOST: "true"
      ENABLE__HTTP: "false" 
      ENABLE__REQUEST: "false"
      ENABLE__COOKIES: "false"
      ENABLE__HEADER: "false"
      ENABLE__ENVIRONMENT: "true"
      ENABLE__FILE: "false"
    ports:
      - "80:80"
```

The echo service will expose a HTTP server that listen on port 80, which will "echo" some information about the environment back to the client.

## Using LetsEncrypt and Nginx as a reverse proxy

On a server that you want to use for SSL termination/load balancing, install Nginx using this guide: https://nginx.org/en/linux_packages.html. Confirm it's running with `service nginx status`. We will refer to this server as the load balancer for now. 

Create a `A` record that points to your load balancer (and a `AAAA` record if you want to support IPv6).

Open your domain in a web browser and verify it works. It may take time before changes to a DNS record reaches your computer, on Linux you can use `dig itu.dk` to see what records your machine knows, look for the part that say something like

```
;; ANSWER SECTION:
itu.dk.                 20440   IN      A       130.226.142.7
```

Since we want use Nginx as a reverse proxy (that sends the user to a minitwit server) and not a static file host, change its config file located at `/etc/nginx/conf.d/default.conf` to look like this:

```
# A list of servers that should be used as backends
upstream echoapp {
    # You can use external IPs here, but it's better to use the "LAN"/VPC IP.
    server 46.101.203.143:8080;
    server 164.92.235.181:8080;
    server 64.226.105.17:8080;
}
server {
    # Your domain should be here
    server_name  localhost unmanaged.devops.leonora.app;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        # Pass requests to http servers in the echoapp upstream block
        proxy_pass http://echoapp;

        # Pass along information like what host the request was for, client IP address
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Make Nginx use your new config with the command `service nginx reload`.

Install Certbot using this guide https://certbot.eff.org/, under "Software" select Nginx and your operating system (likely the latest Ubuntu version).

At step 7, run `sudo certbot --nginx`. This will both get you a domain, and let Certbot modify your Nginx configuration to work with the Certificate. After it's done, open your Nginx config again, and notice the changes. If Certbot didn't already do it, run `service nginx reload` again, and open your domain in a browser with `https://` instead of `http://`.

### What did Certbot actually do?

Try look into your `/var/log/nginx/access.log` file. Notice some odd requests to `.well-known`?

Before Lets Encrypt signs a certificate for your domain, you need to prove that you actually control the domain. This is done by asking LetsEncrypt for a random blob of data and serve it from the `.well-known` directory on your HTTP server. LetsEncrypt then verifies that the data exists and is the same that they asked your server to serve. They now trust that you control both the domain and the server, and lets you have a certificale signed by their certificate, which makes most browsers and HTTP clients trust you too. (The protocol for this is called ACME and is a bit more complicated than this, you can read more at https://letsencrypt.org/how-it-works/.)

## Using Digital Ocean managed load balancers as SSL terminator

This requires that you let Digital Ocean manage your domain. Using your domain registrars control panel set the name servers to point at Digital Oceans name servers:

* ns1.digitalocean.com

* ns2.digitalocean.com

* ns3.digitalocean.com

(See https://docs.digitalocean.com/tutorials/dns-registrars/)

For each of your application droplets, add a tag to distinguish them from other droplets, eg. `minitwit-application`.

Create a load balancer through the Networking tab with

* 1 node

* In "Connect Droplets" select the tag you made for your application droplets

Create a domain with the domain you are going to use in Digital Oceans Networking tab, make a `A` (eg. a IPv4) record that points to your Load Balancer.

Test what happens when you open your load balancer IP and domain, it should show direct to a random droplet (keep in mind some domains such as .dev and .app always requires HTTPS, which will cause the browser to show a warning at this point).

Back in the Network tab, open your load balancer, create a "Forwarding rule" for the HTTPS protocol, add a certificate for the domain you created earlier. Wait for Digital Ocean to tell you when it's done. Remember to save the change.

Open your IP or domain again, but make sure the URL starts with `https://`.


