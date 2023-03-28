# Your turn now: Security!


## 1) Perform a Security Assessment

The following general steps will guide you through a security assessment. Consider using them as steps in a report. The report will become a section in your final project report.

###A. Risk Identification

1. Identify assets (e.g. web application)
1. Identify threat sources (e.g. SQL injection)
1. Construct risk scenarios (e.g. Attacker performs SQL injection on web application to download sensitive user data)


###B. Risk Analysis

1. Determine likelihood
1. Determine impact
1. Use a Risk Matrix to prioritize risk of scenarios
1. Discuss what are you going to do about each of the scenarios


### C. Pen-Test Your System

- Try to test for vulnerabilities in your project by using `wmap`, [`zaproxy`](https://www.zaproxy.org/getting-started/), or any of the tools in the [list of OWASP vulnerability scanning tools](https://owasp.org/www-community/Vulnerability_Scanning_Tools))
- Fix at least one vulnerability that you find; ideally one that is high in your prioritization cf. to your risk analysis


*To think about*: can you find the traces of the pen test in the logs? Or of your colleagues pen-test?



## 2) White Hat Attack The Next Team

Try to help your fellow colleagues by pen-testing their system. Remember that the goal is to help not to hinder.  Send them a report of what you find.

### Who checks whom?

#### BSc

  * Group e _Souffle_  -[checks]-> Group f _Container Maintainers_
  * Group f _Container Maintainers_  -[checks]-> Group g _DevJanitors_
  * Group g _DevJanitors_  -[checks]-> Group h _FiveGuys_
  * Group h _FiveGuys_  -[checks]-> Group j _Niceness_
  * Group j _Niceness_  -[checks]-> Group k _Radiator_
  * Group k _Radiator_  -[checks]-> Group m _Jason Derulo_
  * Group m _Jason Derulo_  -[checks]-> Group e _Souffle_

#### MSc

  * Group a _Academic Weapons_ -[checks]-> Group b _DevUps: Delivering Buggy Software Late since 2023_
  * Group b _DevUps: Delivering Buggy Software Late since 2023_ -[checks]-> Group d _CI/CDont_
  * Group d _CI/CDont_ -[checks]-> Group i _OpsDev_
  * Group i _OpsDev_ -[checks]-> Group l _Bango_
  * Group l _Bango_ -[checks]-> Group n _dudes_
  * Group n _dudes_ -[checks]-> Group o _group o_
  * Group o _group o_ -[checks]-> Group s _Group S_
  * Group s _Group S_ -[checks]-> Group t _our group name_
  * Group t _our group name_ -[checks]-> Group a _Academic Weapons_
