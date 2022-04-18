# Example: Scanning for Vulnerabilities

Note: If you can get your hands onto a VM with Ubuntu 12.04 and MySQL 5.5 or less, you can [try out the exercise from 2021](./EXPLOIT_AGAINST_OLD_MYSQL.md). Also ping me if you have/find a docker image with the above 



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

**Note:** This website was vulnerable in 2021. In 2022, wmap however, detects no more vulnerabilities. 

What you can do is  ~~https://www.random-website.com/ and try to find a few other candidates or~~ 

- run straight on your own system, or 
- run on [Metasploitable](https://sourceforge.net/projects/metasploitable/) -- a VM that's designed to be exploitable with metasploit.



### Searching for Vulnerabilities with Skipfish

    # mapping a local folder where the html output is going to be saved
    docker run -v /tmp:/home/mirceasmacbook -t -i kalilinux/kali-last-release /bin/bash

    # inside the container now
    apt-get update
    apt-get install skipfish -y
    
    skipfish -o /home/mirceasmacbook elysiumpro.in
    
