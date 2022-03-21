-----------


# Your turn now!



## 1) Add Logging to Your Systems

Your task until next week is to add logging to your _ITU-MiniTwit_ systems. 

You can deploy an EFK stack as we have shown in the exercises; but you can use also another logging stack. 

It is ideal if you find a way to make the logging infrastructure available also to us. If you succeed, add the url of your logging dashboard to the `"Logging URL"` section of the `misc_urls.py` file. Make it accessible with the same credentials as the monitoring dashboard. 


## 2) Test that Your Logging Works

### Catch a Bug By Looking at the Logs
- Create two subteams within your team: Team A - the Ops team / Team B - the Dev team
  - Team B - introduces a bug in the deployed system and notifies Team A
  - Team A - is only allowed to look at the logs in order to isolate the component in which the bug is
- Could Team A isolate the problematic component? If yes how? If not, how could it have been caught with a better logging infrastructure?

Write a brief (one to several paragraphs) postmortem report of the incident. Add it to your repo under `/docs/Postmortems.md`.



## 3) Write an SLA for Your Own API

Imagine that Beff Jezos, your boss, came to tell you that from next week, your MiniTwit API will become one of the products that your company will sell to third-party developers who want to implement their own frontend. 

Obviously, these clients, would need some guarantees before they start paying for your API. What guarantees can you offer? Write an SLA for your API. Add it as `SLA.md` to your repo and add it to also to the `misc_urls.py` under the corresponding "SLA" section. 

Next week another team will get to read and review your team's SLA. Make sure that it's clear and it's a good offer :) At the same time aim for something that's realistic: don't overpromise.


