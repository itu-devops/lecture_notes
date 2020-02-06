
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

![](images/banner.png)

# DevOps, Software Evolution and Software Maintenance 

## Content

This page contains information concerning the schedule, material, exam, and learning outcomes for the elective "DevOps, Software Evolution and Software Maintenance Content" at IT University of Copenhagen, spring 2020 ([see LearnIT](https://learnit.itu.dk/course/view.php?id=3019324)).

## Schedule

Sessions (lectures combined with exercises) are on Thursdays from 12:15 to 16:00 in rooms 2A12-14. 
**OBS**: we expect you to be present during the entire time, not only the first two hours. 

During the first session, we will figure out how to handle your lunch break.

**Note**: While times are locked, the topics are subject to change.

| Date      | Time          | Lecturer | Topic                                                                                                | Project Work                                                                                  |
|---------- | ------------- | -------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 30/1/2020 | 12:15 - 16:00 | Helge    | Project start, forming groups, SSH, SCP, and Bash                                                    | Refactor _ITU-MiniTwit_ to work on modern system                                              | 
| 6/2/2020  | 12:15 - 16:00 | Helge    | Version control systems (Git), various branching strategies, and collaborative development workflows | Refactor _ITU-MiniTwit_ in another programming language and tech. stack                       |
| 13/2/2020 | 12:15 - 16:00 | Helge    | Virtualization via containers and virtual machines                                                   | Introduction of DB abstraction layer and deployment of your _ITU-MiniTwit_ to a remote server |
| 20/2/2020 | 12:15 - 16:00 | Helge    | DevOps, Continuous integration (CI), continuous delivery (CD), and continuous Deployment             | **Simulator starts**, Setup CI & CD for reproducible builds, tests, delivery, and deployment  |
| 27/2/2020 | 12:15 - 16:00 | Helge    | Workshop                                                                                             | Cleaning and polishing of your _ITU-MiniTwit_                                                 | 
| 5/3/2020  | 12:15 - 16:00 | Helge    | Techniques for division of subsystems across multiple platforms                                      | Refactoring for clean subsystem interfaces                                                    | 
| 12/3/2020 | 12:15 - 16:00 | Helge    | Monitoring                                                                                           | Add monitoring to your _ITU-MiniTwit_                                                         | 
| 19/3/2020 | 12:15 - 16:00 | Mircea   | Service-level agreements, logging and log analysis                                                   | Add logging to your _ITU-MiniTwit_ and create a set of SLAs for it                            | 
| 26/3/2020 | 12:15 - 16:00 | Mircea   | Security of web-facing applications                                                                  | Perform security review of another group's system & Post-mortem on you own system             | 
| 2/4/2020  | 12:15 - 16:00 | Paolo    | Workshop                                                                                             | Fix reported problems                                                                         |
| 9/4/2020  | 12:15 - 16:00 | --       | Easter Holidays                                                                                      | Operations and maintenance Still reacting on issue reports and fixing of errors :)            |
| 16/4/2020 | 12:15 - 16:00 | Mircea   | Deployment strategies, scalability, load balancing                                                   | Isolate components into services/containers/VMs                                               |
| 23/4/2020 | 12:15 - 16:00 | Helge    | Technical Debt & Maintainability                                                                     | Enhancing CI/CD setup with static code analysis                                               |
| 30/4/2020 | 12:15 - 16:00 | Paolo    | Documentation of Systems and projects & Wrap-up                                                      | **Simulator stops**. Write report.                                                            |

<!--
Using Linux/Unix based operating systems via the command line (Bash)
  * Virtualization via containers and virtual machines
  * Continuous integration (CI), continuous delivery, and continuous deployment 
  * Version control systems (Git), various branching strategies, and collaborative development workflows 
  * Coding standards, static analysis, linters, etc. 
  * Collaborative development process with code reviews, pair programming
  * Time-planning and scheduling in software engineering projects
  * Techniques for division of subsystems across multiple platforms
  * Logging and log analysis 
  * Monitoring 
  * Scalability, load balancing
  * Service-level agreements 
  * Security of web-facing applications
  * Deployment strategies
  * Technical Debt & Maintainability 
  * Refactoring and evolution of legacy systems
-->

  * Exam submission: 12/5/2020
  * Exam dates: 8/6/2020 to 11/6/2020

## Requirements

All examples in class target [Ubuntu 18.04.3 LTS (Bionic Beaver)](http://releases.ubuntu.com/18.04/). Since all sessions contain hands-on exercises, we recommend that you have this version of Ubuntu installed on your laptop computer. (In case you decide to run another operating system, we cannot provide too much support for these during class.) The recommended setup is to have Ubuntu installed natively on your machine. 


Remember to backup your data before starting the installation process and in particular resizing your partitions! Also double check values before repartitioning!


The following links are exemplary guides, you might find others that are even more suitable to your personal setup.

##### Installing Ubuntu on Harddisk (Windows Dual Boot)
  - https://www.tecmint.com/install-ubuntu-alongside-with-windows/
  - https://vitux.com/how-to-install-ubuntu-18-04-along-with-windows-10/

##### Installing Ubuntu on Harddisk (MacOS Dual Boot)

  - For older Macs (without Touchbar): https://www.maketecheasier.com/install-dual-boot-ubuntu-mac/
  - For newer Macs (with Touchbar): 
    - First check if the Wifi card of your model is supported: https://github.com/Dunedan/mbp-2016-linux#wi-fi
    - If yes: https://apple.stackexchange.com/a/375863
    - If not, either: 
      - Install in a [Virtual Machine](#installing-ubuntu-as-virtual-machine), or
      - Install on another old computer that you can use for this course.


##### Installing Ubuntu on USB Key instead of Harddisk

  - http://ubuntuhandbook.org/index.php/2014/11/install-real-ubuntu-os-usb-drive/
  
<!--
  - (For just https://linuxhint.com/run-ubuntu-18-04-from-usb-stick/)
-->

##### Installing Ubuntu as Virtual Machine 

In case non of the above options of installing Ubuntu are an option for you, you might want to install Ubuntu in a Virtual Machine (VM). Be aware however, that not all contents of the lecture (virtualization part in session 3) can be 

###### VMware Fusion (for macOS)
VMware Fusion is a great hypervisor for the macOS operating system, and is offered as a free service for all ITU students.

  - Download the VMware Fusion 11.x client and get your license from [InstallIT](https://itudk.onthehub.com/WebStore/OfferingDetails.aspx?o=c58f2cd0-42ce-e811-810b-000d3af41938). You will have to use your ITU credentials to log in.
  - Follow the installation instructions as mentioned in [this article](https://www.askdavetaylor.com/install-ubuntu-linux-vmware-fusion-mac/). Restart your machine after completion.
    - NOTE: It is important that you grant the VMware Fusion application the access that it needs when prompted during the installation.
  - Enabling virtualization in the Settings menu as described in [this article](http://techgenix.com/vmware-fusion-5-enable-vt-xept-inside-a-virtual-machine-288/).

Troubleshooting:
  - If you get this following this error message (`cannot open /dev/vmmon`) when booting on your newly created Ubuntu image, then follow these steps:
    - Close the VMware Fusion application.
    - Go To *System Preferences* -> *Security & Privacy* -> Check if you're allowed to run apps from identified developers and there is no mentioning of a block application.


###### VirtualBox (for both macOS and Windows)
  - Windows: https://techsprobe.com/install-ubuntu/
  - MacOS: https://medium.com/@mannycodes/installing-ubuntu-18-04-on-mac-os-with-virtualbox-ac3b39678602



## Team

  - **Teachers**: Helge, Mircea, Paolo
  - **TAs**: Christoffer, Zander

## Groups

To be formed during the first session.

---------------------------

#### Attributions

Organization icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com)
