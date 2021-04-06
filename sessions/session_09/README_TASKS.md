-----------

# Your turn now: Scale!!

<img src="https://media.giphy.com/media/13GIgrGdslD9oQ/giphy.gif" width=50%/>

  - [1) Add Scaling to your projects](#1-add-scaling-to-your-projects)
  - [2) Software Licensing](#2-software-licensing)
  - [3) Software Maintenance](#3-software-maintenance)




## 1) Add Scaling to your projects

Do _either_ of the following:

  1. Create a high-availability setup with a _hot_ and _standby_ server for your _ITU-MiniTwit_ application. In such a setup you would have two replica of your application server where only one is ever active at a time, i.e., no load balancer in front of either of them.
  The setup should resemble [the one discussed in the lecture](https://www.digitalocean.com/community/tutorials/how-to-set-up-highly-available-web-servers-with-keepalived-and-floating-ips-on-ubuntu-14-04).

Or: 

  2. Create a Docker Swarm cluster for your _ITU-MiniTwit_ applications in which various components run as services and can be scaled as needed. Note, very likely you do not want to scale you DB servers horizontally (to keep your data consistent) but only all the services 'in front' of it.
  
  
In both cases implement a rolling update strategy in your build chain.




## 2) Software Licensing


If you have not done so yet, decide on a license for your project. Take into consideration what Alexander told you in his guest lecture.

For all your dependencies, determine and list their respective licenses. Figure out if you can actually use the license of your liking for your project or if that would not be possible due to being incompatible to a license of one of your dependencies.

Base your decision on the following figure, which Alexander used in his presentation:

![](https://en.wikipedia.org/wiki/License_compatibility#/media/File:Floss-license-slide-image.svg)

Consider adding [ScanCode toolkit](https://github.com/nexB/scancode-toolkit), the tool that Alexander mentioned in the end of his presentation to your CI chains to automate identification of -potentially changing- licenses of your dependencies.

In case you wonder if thinking about licenses and if it is really an issue, you might want to read about a prominent example from last week: https://www.theregister.com/2021/03/25/ruby_rails_code/



## 3) Software Maintenance


We are in software maintenance. That is, fix issues of your version of _ITU-MiniTwit_ **as soon as possible**. Let's say that as soon as possible means within 24 hours if possible, i.e., if it is not a super big issue that requires a big rewrite. 

Now, with your monitoring and logging systems in place, you will likely observe issues when they arise or even before the arise. Just fix them as soon as you realize them.

Additionally, our dashboards illustrate status and potential errors as the simulator 'sees' them [here](http://138.68.93.2/status.html). For example, fix wrong status codes, e.g., `tweet` shall return `204` instead of `200`, or too slow response times.

Continue to release (now likely automatically) at least once per week versions of your system with corresponding fixes.