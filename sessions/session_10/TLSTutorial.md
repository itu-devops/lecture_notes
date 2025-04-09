# TLS Tutorial
Go to either of the domain sites that offers a free domain on:
https://education.github.com/pack 

## setup Nginx
https://www.digitalocean.com/community/tutorials/how-to-configure-nginx-as-a-reverse-proxy-on-ubuntu-22-04 
### download
```bash
sudo apt update
sudo apt install nginx
```

```bash
systemctl status nginx
```
### Enable firewall and setup rules
```bash 
sudo ufw enable
sudo ufw allow 'Nginx HTTP'
sudo ufw allow ssh
sudo ufw status
```

### Create custom configuration file for your domain
```bash
sudo vim /etc/nginx/sites-available/your_domain.dk
```

### Example configration file
```bash
server {
    listen 80;
    listen [::]:80;

    server_name your_domain.dk;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        #proxy_http_version 1.1;
        proxy_set_header X-URIScheme https;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

### Enable this configuration file by creating a link from it to the sites-enabled directory that Nginx reads at startup:
```bash
sudo ln -s /etc/nginx/sites-available/your_domain.dk /etc/nginx/sites-enabled/
```

### Check syntax of config and restart nginx to recognize the changes
```bash
sudo nginx -t
sudo systemctl restart nginx
```


## Setup TLS certificate (http -> https)
https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-22-04

### download snap and certbot

Snap is recommended by certbot
```bash
sudo snap install core; sudo snap refresh core
```

```bash
sudo snap install --classic certbot
```

Finally, you can link the `certbot` command from the snap install directory to your path, so you’ll be able to run it by just typing `certbot`. 
This isn’t necessary with all packages, but snaps tend to be less intrusive by default, so they don’t conflict with any other system packages by accident:
```bash
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

Check firewall status and update it to accept https:
```bash
sudo ufw status
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'
sudo ufw allow ssh
sudo ufw status
```

Obtaining the TLS certificate:
```bash
sudo certbot --nginx -d your_domain.dk
```

Enter your email, accept terms and it should allow you with something like this:
```bash
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Enter email address or hit Enter to skip.
 (Enter 'c' to cancel): 

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please read the Terms of Service at:
https://letsencrypt.org/documents/LE-SA-v1.5-February-24-2025.pdf
You must agree in order to register with the ACME server. Do you agree?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: y

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing, once your first certificate is successfully issued, to
share your email address with the Electronic Frontier Foundation, a founding
partner of the Let's Encrypt project and the non-profit organization that
develops Certbot? We'd like to send you email about our work encrypting the web,
EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: y
Account registered.
Requesting a certificate for your_domain.dk

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/your_domain.dk/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/your_domain.dk/privkey.pem
This certificate expires on 2025-07-01.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

Deploying certificate
Successfully deployed certificate for wimblefun.foodeez.dk to /etc/nginx/sites-enabled/your_domain.dk
Congratulations! You have successfully enabled HTTPS on https://your_domain.dk

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```
