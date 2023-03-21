-----------


# Your turn now!



## 1) Add Logging to Your Systems

Your task until next week is to add logging to your _ITU-MiniTwit_ systems. 

You can deploy an EFK stack as we have shown in the exercises; but you can use also another logging stack. 

It is ideal if you find a way to make the logging infrastructure available also to us. If you succeed, add the url of your logging dashboard to the `"Logging URL"` section of the `misc_urls.py` file. Make it accessible with the same credentials as the monitoring dashboard. 


## 2) Test that Your Logging Works

### Catch a Bug By Looking at the Logs
- Create two subteams within your team: Team O - the Ops team / Team D - the Dev team
  - Team D - introduces a bug in the deployed system and notifies Team O
  - Team O - is only allowed to look at the logs in order to isolate the component in which the bug is
- Could Team O isolate the problematic component? If yes how? If not, how could it have been caught with a better logging infrastructure?

Write a brief (one to several paragraphs) postmortem report of the incident. Add it to your repo under `/docs/Postmortems.md`.






