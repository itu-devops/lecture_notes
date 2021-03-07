-----------


# Your turn now!

<img src="https://media.giphy.com/media/13GIgrGdslD9oQ/giphy.gif" width=50%/>

  - [1) Add Monitoring to Your Systems](#\1)-Add-Monitoring-to-Your-Systems)
  - [2) Software Maintenance](#2\)-Software-Maintenance)


## 1) Add Monitoring to Your Systems

Your task until next week is to add monitoring to your _ITU-MiniTwit_ systems. Add for sure some application monitoring and infrastructure monitoring. Add all other categories of monitoring after your liking and after what you deem important for your application.

In case you adapt the monitoring example from class (https://github.com/itu-devops/itu-minitwit-monitoring) make sure to turn your Grafana configuration/dashboard into code so that you do not have to click together your dashboard every time you restart the Grafana container. To do so, you may start reading:

  * https://grafana.com/docs/grafana/latest/installation/configure-docker/
  * https://runkiss.blogspot.com/2020/01/using-prometheus-grafana-to-monitor.html
  
Add a link to your monitoring dashboard via a pull request to the file [`misc_urls.py`](https://github.com/itu-devops/lecture_notes/blob/master/misc_urls.py) in https://github.com/itu-devops/lecture_notes. (Replace the URL `"http(s)://<TBA>/"` below the comment `# Monitoring URL:` with your respective URL.
Link either a read-only dashboard or add a user with name and credentials that Helge provides you via the Teams chat channel, so that we can see what you are monitoring and can provide feedback on it in the start of the next session.


## 2) Software Maintenance 

From now on, we are in software maintenance. That is, fix issues of your version of _ITU-MiniTwit_ **as soon as possible**. Let's say that as soon as possible means within 24 hours if possible, i.e., if it is not a super big issue that requires a big rewrite. 

Likely, after the simulator is started you will experience some issues in your systems. Just fix them as soon as you realize them.

For example, you will be able to see status and potential errors as the simulator 'sees' them [here](http://138.68.93.2/status.html).

Continue to release (now likely automatically) at least once per week versions of your system with corresponding fixes.





<!-- 
## 3) MSc Students

Prepare a ten minute presentation about your systems. Include presentation of:

  * the architecture (including important subsystems)
  * the used technologies and programming languages
  * a view to your systems through the monitoring dashboard
  * anything that you want to highlight about your solution -->
