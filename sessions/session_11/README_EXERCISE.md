# Example: Scanning for Vulnerabilities

Note: If you can get your hands onto a VM with Ubuntu 12.04 and MySQL 5.5 or less, you can [try out the exercise from 2021](EXPLOIT_AGAINST_OLD_MYSQL.md). Also ping me if you have/find a docker image with the above 



### Installing Kali Linux

```

    # Installing Kali Linux in Docker
    docker pull kalilinux/kali-last-release
    docker run -t -i kalilinux/kali-last-release /bin/bash
```

### Setting up Metasploit

```
    # In the Kali image:
    apt-get update 
    apt-get install metasploit-framework -y  #takes a few minutes
    
    # Note: two modules have to be removed because they freeze
    (cd /usr/share/metasploit-framework/modules/auxiliary/scanner/http/ && rm brute_dirs.rb dir_webdav_unicode_bypass.rb)

    # Starting metasploit
    service postgresql start
    msfdb reinit # if this is the first time you are running metasploit
    msfconsole
    
    
```

Now inside metasploit:

```
    load wmap
    wmap_sites -a elysiumpro.in,https://35.227.145.165
    wmap_sites -l
    wmap_targets -t elysiumpro.in,https://35.227.145.165
    wmap_run -t
    wmap_run -e
    vulns
```

**Note:** This website was vulnerable in 2021. In 2023, wmap however, detects no more vulnerabilities. 

What you can do is

- run straight on your own system, or 
- run on [Metasploitable](https://sourceforge.net/projects/metasploitable/) -- a VM that's designed to be exploitable with metasploit.

### Port scanning with nmap
Alternatively, if wmap does not report any vulnerabilities you can try using [**nmap**: the Network Mapper](https://nmap.org/). It is a free tool which is included in Kali Linux.

Using the Kali Linux Docker container from above, you can perform port scans on hosts of your choosing. Only do this on your own systems or fx the Metasploitable VM. In the below examples I have a running instance of the Metasploitable VM with the IP 192.168.64.3.

To perform a simple port scan you can run `nmap <ip>`

```
┌──(root㉿867160d50018)-[/]
└─# nmap 192.168.64.3
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-19 11:08 UTC
Nmap scan report for 192.168.64.3
Host is up (1.0s latency).
Not shown: 976 closed tcp ports (reset)
PORT     STATE SERVICE
21/tcp   open  ftp
22/tcp   open  ssh
23/tcp   open  telnet
25/tcp   open  smtp
53/tcp   open  domain
80/tcp   open  http
111/tcp  open  rpcbind
139/tcp  open  netbios-ssn
443/tcp  open  https
445/tcp  open  microsoft-ds
512/tcp  open  exec
513/tcp  open  login
514/tcp  open  shell
1099/tcp open  rmiregistry
1524/tcp open  ingreslock
2049/tcp open  nfs
2121/tcp open  ccproxy-ftp
3306/tcp open  mysql
5432/tcp open  postgresql
5900/tcp open  vnc
6000/tcp open  X11
6667/tcp open  irc
8009/tcp open  ajp13
8180/tcp open  unknown

Nmap done: 1 IP address (1 host up) scanned in 3.23 seconds

```

To probe open ports for service and version info, you can add the `-sV` flags. You can then check the services reported by nmap for vulnerabilities online, fx using [CVEdetails](https://www.cvedetails.com/).

```
┌──(root㉿867160d50018)-[/]
└─# nmap -sV 192.168.64.3
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-19 10:57 UTC
Nmap scan report for 192.168.64.3
Host is up (1.0s latency).
Not shown: 976 closed tcp ports (reset)
PORT     STATE SERVICE     VERSION
21/tcp   open  ftp         vsftpd 2.3.4
22/tcp   open  ssh         OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)
23/tcp   open  telnet      Linux telnetd
25/tcp   open  smtp        Postfix smtpd
53/tcp   open  domain      ISC BIND 9.4.2
80/tcp   open  http        Apache/2.2.8 (Ubuntu) DAV/2
111/tcp  open  rpcbind     2 (RPC #100000)
139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
443/tcp  open  https?
445/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
512/tcp  open  exec        netkit-rsh rexecd
513/tcp  open  login
514/tcp  open  tcpwrapped
1099/tcp open  java-rmi    GNU Classpath grmiregistry
1524/tcp open  bindshell   Metasploitable root shell
2049/tcp open  nfs         2-4 (RPC #100003)
2121/tcp open  ftp         ProFTPD 1.3.1
3306/tcp open  mysql       MySQL 5.0.51a-3ubuntu5
5432/tcp open  postgresql  PostgreSQL DB 8.3.0 - 8.3.7
5900/tcp open  vnc         VNC (protocol 3.3)
6000/tcp open  X11         (access denied)
6667/tcp open  irc         UnrealIRCd
8009/tcp open  ajp13       Apache Jserv (Protocol v1.3)
8180/tcp open  http        Apache Tomcat/Coyote JSP engine 1.1
... etc.
```


### Searching for Vulnerabilities with Skipfish
[Skipfish](https://www.kali.org/tools/skipfish/) is another web application security tool, which can be quite helpful.

```
    # mapping a local folder where the html output is going to be saved
    docker run -v /tmp:/home/$(whoami) -t -i kalilinux/kali-last-release /bin/bash

    # inside the container now
    apt-get update
    apt-get install skipfish -y
    
    # Change <YOUR-PATH> with something like /home/<USERNAME>/Desktop where the html output is going to be saved
    skipfish -o <YOUR-PATH>/elysiumpro.html https://elysiumpro.in
 ```
