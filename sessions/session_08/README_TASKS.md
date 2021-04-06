-----------


# Your turn now!



## 1) Add Logging to Your Systems

Your task until next week is to add logging to your _ITU-MiniTwit_ systems. 

You can deploy an EFK stack as we have shown in the exercises; but you can use also another logging stack. You might be able to 

In any case, please make the logging infrastructure available also for us. Add the url of your logging dashboard to the "Logging URL" section of the `misc_urls.py` file. Make it accessible with the same credentials as the monitoring dashboard: 
  
  - username: devops21
  - password: -lEtMEIn-



## 2) Test that Your Logging Works

### Catch a Bug By Looking at the Logs
- Create two subteams within your team: Team A - the Ops team / Team B - the Dev team
  - Team B - introduces a bug in the deployed system and notifies Team A
  - Team A - is only allowed to look at the logs in order to isolate the component in which the bug is
- Could Team A isolate the problematic component? If yes how? If not, how could it have been caught with a better logging infrastructure?

Write a half page "postmortem" to report the incident. 
Add it to your repo under /docs 



## 3) Write an SLA for Your Own API

Imagine that another team might want to build their Web frontend on top of your own API. They would need some guarantees. What guarantees can you offer? Write an SLA for your API. Add it as `SLA.md` to your repo and add it to also to the `misc_urls.py` in the corresponding section "SLA URL". 
Next week every team will get the chance to read three SLAs and rank the one they think is the most well thought out. Make sure that it's the best you can offer, and that it's clear. At the same time, try to aim for something that's realistic; don't overpromise.



