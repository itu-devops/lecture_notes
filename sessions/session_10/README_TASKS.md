
# Your turn now: Scale and Increase Availability of Your Infra!


## 1) Add Scaling to your projects

Do _either_ of the following:

  1. Create a high-availability setup with a _hot_ and _standby_ server for your _ITU-MiniTwit_ application. In such a setup you would have two replica of your application server where only one is ever active at a time, i.e., no load balancer in front of either of them.
  The setup should resemble [the one discussed in the lecture](https://www.digitalocean.com/community/tutorials/how-to-set-up-highly-available-web-servers-with-keepalived-and-floating-ips-on-ubuntu-14-04).

Or: 

  2. Create a Docker Swarm cluster for your _ITU-MiniTwit_ applications in which various components run as services and can be scaled as needed. Note, very likely you do not want to scale you DB servers horizontally (to keep your data consistent) but only all the services 'in front' of it.
  
## 2) Update Strategy

Implement an automatic update strategy in your build chain. Choose either rolling updates or blue-green. 


## 3) Software Maintenance


We are in software maintenance. That is, fix issues of your version of _ITU-MiniTwit_ **as soon as possible**. Let's say that as soon as possible means within 24 hours if possible, i.e., if it is not a super big issue that requires a big rewrite. 

Now, with your monitoring and logging systems in place, you will likely observe issues when they arise or even before the arise. Just fix them as soon as you realize them.

Continue to release (now likely automatically) at least once per week versions of your system with corresponding fixes.
