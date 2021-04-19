-----------

# Your turn now: Security!

<img src="https://media.giphy.com/media/13GIgrGdslD9oQ/giphy.gif" width=50%/>

  - [1) Add Scaling to your projects](#1-add-scaling-to-your-projects)
  - [2) Software Licensing](#2-software-licensing)
  - [3) Software Maintenance](#3-software-maintenance)




## 1) Do a security assessment 

The following general steps will guide you through a security assessment. Consider using them as steps in a report. The report will become a section in your final project report.

- A. Risk Identification
    1. Identifiy assets (e.g. web application)
    1. Identify threat sources (e.g. SQL injection)
    1. Construct risk scenarios (e.g. Attacker performs SQL injection on web application to download sensitive user data)
- B. Risk Analysis
    1. Determine likelihood
    1. Determine impact
    1. Use a Risk Matrix to prioritize risk of scenarios   
    1. Discuss what are you going to do about each of the scenarios




## 2) Pen Test Your System

- Try to find a vulnerability in your project by using wmap, [zaproxy](https://www.zaproxy.org/getting-started/), or any of the tools in the [list of OWASP vulnerability scanning tools](https://owasp.org/www-community/Vulnerability_Scanning_Tools))
- Fix the vulnerabilities that you find
- Can you find the traces of the pen test in the logs?



## 3) White Hat Attack The Next Team

Try to help your fellow colleagues by pen-testing their system (group a-> group b, b->c, etc.). Remember that the goal is to help not to hinder.  Send them a report of what you find.