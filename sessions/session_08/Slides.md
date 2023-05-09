class: center, middle

<img src="https://www.saa-authors.eu/picture/739/ftw_768/saa-mtcwmza4nzq5mq.jpg" width=40%/>

# DevOps, Software Evolution and Software Maintenance

Mircea Lungu, Associate Professor,<br>
[IT University of Copenhagen, Denmark](https://www.itu.dk)<br>
`mlun@itu.dk`


---

## The state of your projects?

---



### Release Activity

<object width="100%" data="http://138.197.185.85/release_activity_weekly.svg"></object>

---

### Weekly Commit Activity

<object width="100%" data="http://138.197.185.85/commit_activity_weekly.svg"></object>

---

### Daily Commit Activity

<object width="100%" data="http://138.197.185.85/commit_activity_daily.svg"></object>

---

### Latest processed events

<object width="100%" data="http://104.248.134.203/chart.svg"></object>


---

class: center, middle

# Feedback
---

## Monitoring 

- We see 8/16 have monitoring dashboards: Congrats!

	 - ... and the rest?


- Of the 8 we still have several have a Prometheus installation without data

- Of the ones with data...
	- Some we liked: 
	
		- [Group G - DevJanitors](http://104.248.101.163:3333/)
		- [Group K- Radiator](http://164.92.167.188:9091/d/a94Zmaa4k/minitwit?orgId=1&refresh=10s)
	
	- Others made us curious: 
		- [Group i](http://134.122.87.182:3000/d/DVJQxp-4k/minitwit-responses?orgId=1) - why the CPU load?
		- [Group m](http://143.244.205.161:3000/d/0hVMV2-Vz/dash?orgId=1) - why the dashboard mix? 



---

## Automatic Testing in Progress: Web Timeline vs. the `/msgs`

- both should return the latest messages
- automatic script that does `/msgs?10` should find them on the timeline
- parameter count should be taken into account

```

2023-03-21 10:37:37,group a,100,10,200,DifferentAmountOfMessages,200,OK
2023-03-21 10:37:38,group b,0,0,404,NotFound,200,OK
2023-03-21 10:37:38,group d,0,0,,ConnectionError,200,OK
2023-03-21 10:37:39,group e,100,0,200,DifferentAmountOfMessages,200,OK
2023-03-21 10:42:57,group f,100,0,200,DifferentAmountOfMessages,200,FrontPageNotAvailable
2023-03-21 10:42:57,group g,310693,0,200,DifferentAmountOfMessages,,
2023-03-21 10:43:00,group h,0,0,500,InternalServerError,200,OK
2023-03-21 10:43:03,group i,30,4,200,DifferentAmountOfMessages,200,OK
2023-03-21 10:43:03,group j,100,0,200,DifferentAmountOfMessages,200,OK
2023-03-21 10:43:04,group k,100,0,200,DifferentAmountOfMessages,200,OK
2023-03-21 10:43:05,group l,0,0,500,InternalServerError,200,OK
2023-03-21 10:43:07,group m,100,0,200,DifferentAmountOfMessages,200,OK
2023-03-21 10:43:09,group n,100,0,200,DifferentAmountOfMessages,200,OK
2023-03-21 10:43:09,group o,0,0,404,NotFound,,
2023-03-21 10:43:09,group t,0,0,404,NotFound,200,OK
2023-03-21 10:43:15,group s,0,0,,MissingSchema,200,OK
```





---

# Prep Questions

#### Question #1 for You: Which of your endpoints is the slowest? How slow is it?

#### Question #2 for You: Where is the time being spent in this endpoint? How did you find out?


---

## Group: M
- **Slowest**: GET /msgs?no=100  
- **How Slow**? 798 ms  
- **How**? Used Postman on all endpoints
- **Where is the time spent**? We can monitor query times with prometheus? Or we can log it
-

---

## Group: n

- **Slowest**: We found the register endpoint to be the slowest when running our tests.
- **How Slow**? The response time is about 50ms.
- **Where is time spent?** Most of the time is spent hashing the password. This is somewhat on purpose as we are using bcrypt for hashing. We found the information by *measuring in code*.
-

---

## Group: Souffle

- **Slowest?** **How Slow**?: msgs and fllws can take up to 600ms
- **Where is time spent?** mostly the database round trips

---

## Group: CI-CDont
- **Slowest?** /allUsers. 
- **How Slow?** Postman said 381ms, with 218ms being download. SQL is also a bottleneck.
- **Where is time spent?** Postman can give some info. Go framework Gin can provide some related logging


---


# Limitations of Monitoring


Tracks high-level metrics the system (error rate of endpoint: 2%)

Does not explain *WHY* there was a problem. 

--

For the WHY: 

- **Logging** (*main topic of today*)

- **Profiling** = dynamic program analysis for errors & performance problems (*example on next slide*)

- **Tracing** = observing requests as they propagate through distributed systems (*not today*)
 


Read More: [Why Grafana is Good at Metrics and Not Logs](https://grafana.com/blog/2016/01/05/logs-and-metrics-and-graphs-oh-my/)


---

## Profiling ... (in one slinde)

### Understanding the code from a timing point of view.

A profilter = a tool for profiling. 

Essentially, answers the question: "Where is my code spending the time?"

Mini case study: [A Performance Problem](https://mircealungu.com/notes/A-Performance-Problem.html) (5 min)

<br/><br/>
<img src="./images/always-profile.png" width="300px" />

---


# Case Study: FMD

Flask Monitoring Dashboard 

* Internal Monitor Research Project ([paper](https://github.com/flask-dashboard/Vissoft-17-Paper/blob/master/FlaskDashboard-Preprint.pdf), [code](https://github.com/flask-dashboard/))

* Can be easily installed **because its laser-focused**
	* Python + Flask
	* Small web services / apps

* Leverages version-control information
* Selectively can deploy a ***statistical profiler*** with fine-granularity
	* Profiling introduces significant overhead
	- Measuring the overhead is tricky




---


## FMD: Meta-Observations





Started as a bachelor thesis continued as master's thesis => Lessons
  - Stick to your project 
  - It can take years till something becomes successful


Multiple possible theses in the context of FMD
1. Automatically detecting performance regressions
2. Advanced statistical analysis of performance distributions



---

class: center, middle

# Logging

---

# Logging


#### ... the practice of collecting and analyzing log data generated by applications, infrastructure, and other components of a system


Logs are 
- the stream of 
- aggregated
- time-ordered events
- collected from all running processes and backing services


---

## Purpose

* Understanding (how is your system being used?)


* Diagnosis (of an actual problem)

  - What happened yesterday? 
  - Why is/was the service slow/down?
  - Were we under attack?



* Audit trails
  - Sometimes logs are legally required
  - Ultimate example: bitcoin - a big log of all transactions



---


## Logfiles


In server-based environments they are commonly written to a file on disk (a “logfile”)

    e.g. cat /var/log/auth.log

<img src="images/auth_log.png" alt="Drawing" style="width: 800px;"/>


* A reminder of the importance of security...

---


### Obs: Different programs have different log formats...




```
$ head -n 1 /var/log/auth.log

Mar 16 07:15:55 zeeguu-amsterdam sshd[29424]: Invalid user vultr from 144.217.243.216 
port 56450


$  head -n 1 /var/log/apache2/error.log

[Wed Mar 18 20:39:02.962354 2020] [wsgi:error] [pid 18:tid 140056344164096] 
[remote 212.187.36.136:57046] Session is retrived from cookies


$ head -n 1 /var/log/nginx/access.log

66.249.65.62 - - [06/Nov/2014:19:12:14 +0600] "GET /?q=%E0%A6%A6%E0%A7%8B%E0%A7%9F%E0%A6%BE 
HTTP/1.1" 200 4356 "-" "Mozilla/5.0 (compatible; Googlebot/2.1;)"


$ head -n 1 /var/log/system.log

Mar 18 21:25:16 Harlequin logd[85]: #DECODE failed to resolve UUID: [pc:0x7fff75485ac7 
ns:0x06 type:0x82 flags:0x8208 main:A52374C3-0F9D-3062-A636 pid:435]
```

### ... although we could have avoided that:

---


# Syslog 

Protocol
* Developed in 80s
* Aims at standardizing the way logs are **formatted** and **transmitted** in a network ([RFC 3164 (2001)](https://tools.ietf.org/html/rfc3164) [RFC 5424 (2009)](https://tools.ietf.org/html/rfc5424))
* Not only for Linux, but for any system exchanging logs


Enables separation between
  - Sender
  - Collector
  - Transport


---


# Example Syslog Entry Format

<br/>

<br/>



<img src="images/syslog_line.png" alt="Drawing" style="width: 600px;"/>

---


# Syslog Log Levels

<img src="images/syslog_levels.png" alt="Drawing" style="width: 700px;"/>


---



# Syslog Architectures

<img src="images/syslog_architectures.png" width="100%">

(Source: [RFC 5424 (2009)](https://tools.ietf.org/html/rfc5424))


---


# Logging Principles


1. A process should not worry about storage

2. A process should log only what is necessary

3. Log at the proper level

4. Logs  should be centralized


---


## 1. A process should not worry about storage

Don't decide which logfile to write to.

Instead, each process should **write to its unbuffered stdout stream**.

Advantages

* During development: dev looks at the terminal

* During deployment output from process is routed where needed 

* Different contexts result in different logfiles (e.g. cronjob)


---



## 2. A process should log only what is necessary


Q: What is necessary? 

A: What is your application's business. 
- e.g. Apache vs. Credit Suisse vs. MiniTwit


<br/>


Why? 
* You avoid redundancy (don't log the web server accesses)

* You avoid overloading the reader with a deluge of irellevance

* You avoid wasting disk space (N.B. logfiles can become large fast)


---


### Note: logfiles can become huge fast

(*Personal story*) The [Zeeguu](https://zeeguu.org) research project
- Logfile grows to multi-GB size in a few months
- Fills the disk
- To the point of not being able to ssh into bash
	- Solution: `ssh user@server rm -rf /tmp`

Scenario
- 10 servers 
- 1000 req / sec * 1KB per Event 
- => you'd need quite a network bandwidth...

Solutions
  - **Log rotation**
    - set a threshold of time / size 
    - after which the data in the file is truncated / stored elsewhere
  - Do not store logs on the same machine as your application


---


## 3. Log at the proper level

* Allows the user to control the amount of logging

* Better than println
  - intention revealing
  - can be turned off gradually

Possible Strategy:
- DEBUG = anything that happens in the program; deploy to production carefully; ideally turn on only as needed
- INFO = actions that are user-driven and meaningful for your system
- NOTICE = thought out for production - notable events that are not an error
- WARN = events that might turn into an error 
- ERROR = every error situation


See following example...


---



```python
import sys
from importlib import reload
import logging
reload(logging) #hack because of jupyter

logging.basicConfig(
        format="%(asctime)-15sZ %(levelname)s [%(module)s] %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S.%f",
        level=logging.DEBUG,
        stream=sys.stdout
)

logging.debug("Got here!")
logging.info("Demo started.")
logging.warning("Ooops. Something went wrong!")
logging.error("Logging is broken in Jupyter")
logging.critical("System will shot down")

```

    2022-03-22 11:05:23.fZ DEBUG [392630104] Got here!
    2022-03-22 11:05:23.fZ INFO [392630104] Demo started.
    2022-03-22 11:05:23.fZ WARNING [392630104] Ooops. Something went wrong!
    2022-03-22 11:05:23.fZ ERROR [392630104] Logging is broken in Jupyter
    2022-03-22 11:05:23.fZ CRITICAL [392630104] System will shot down


---


## 4. Logs  should be centralized

Valuable to have all the information in one place

- Enables correlation analysis

- More scalable than conecting to various machines to search through files

Also, when you are running stuff in containers if you don't collect and ship the logs, they'll disapear when you destroy the container



---




# Logging Challenges / Solutions

1. Searching through a deluge of log messages can be complicated / *a powerful query engine*

3. Complex systems can generate logs in different formats / *tools for converting to a unified format*
4. Logging can result in very large data / *a scalable, distributed maybe, performant way to index them*




---



# The ELK Stack

One of the most popular solutions at the moment

<img src="images/ELK.png" alt="Drawing" style="width: 600px;"/>


Stands for:
* ElasticSearch
* Logstash
* Kibana


---

## E: ElasticSearch


Scalable Full Text Search...
* Based on Apache Lucene
* Distributed & Replicated
* Almost real time full text search
* Stores logs in dedicated log indexes
* Based on JSON over HTTP


Personal Story: 
-  [MySQL 8.0 Full Text Search](https://dev.mysql.com/doc/refman/8.0/en/fulltext-search.html) vs. ElasticSearch (research project)
- Guess who wins?


---

## L: Logstash

Java-Based Log Parser
- Converts from various log line formats to JSON
- Tails log files and emits events when a new log message is added
- Comes with a powerful pattern parsing plugin (Grok)

<img src="images/logstash_example_.png" alt="Drawing" style="width: 100%;"/>


Challenges
- Not easy to configure + difficult to troubleshoot
- Resource hungry

---


### e.g. Parsing syslog format with Logstash


    input {
    	file {
    		path => "/Users/mircea/local/projects/zeeguu/CodeBase/
    		Zeeguu-Mono-Web/zeeguu_mono_web.log"
    	}
    }

    filter {
    	grok {
    		match => { "message" => "%{TIMESTAMP_ISO8601:timestamp} %{DATA:level} %{DATA:process} %{GREEDYDATA:log}" }
    	}
        date {
            match => [ "timestamp" , "dd/MMM/yyyy:HH:mm:ss Z" ]
        }

    }

    output {
    	elasticsearch {
    		hosts => "elasticsearch:9200"
    		user => "elastic"
    		password => "changeme"
    	    index => "zeeguu_web"
    	}
    }


---




## K: Kibana


<img src="./images/kibana-screenshot.png" width="50%" style="float:right; margin-left:40px;"/>


Powerful visualization tool tailored for ElasticSearch

- Its own query language (KQL)
- Demo deploy: http://164.90.219.220:5601/
---


# Variations and Alternatives to ELK

1. EFLK
2. EFK
3. FRELK
4.  .NET logging package + EK
5. Loki + Promtail + Grafana
---

## 1. EFLK

EFLK = ELK + Filebeat

Filebeat = Log Shipper
- Addresses resource consumption of logstash
- Lightweight agents on different machines send logs to logstash
- Has special plugin for *docker* -- see your exercises for an example


<img src="images/FELK.png" alt="Drawing" style="width: 65%;" />

---

## 2. EFK: Dropping the Logstash

- Filebeat sends data straight to ElasticSearch 

- If you don't need to parse further the `@message` field

- In your exercises example !!!


---


## 3. FRELK: With Redis message broker

- Purpose: prevention of data loss

<img src="images/FRELK.png" alt="Drawing" style="width: 600px;" />


---


## 4. .NET logging package + EK


"My group ditched LogStash last year in part because it is slow, but also because .NET had a logging package that seamlessly integrated with ElasticSearch. So we basically just logged straight into ElasticSearch"
> (DevOps student from 2021)


---

## 5.  Loki + Promtail + Grafana

Loki = **log aggregation tool developed by Grafana labs** 
- Lightweight = Only indexes meta-data
- No distributed architecture for Loki (vs. ES)

Promtail = **agent that ships the contents of local logs**

<img src="./images/loki-and-promtail.png" width="80%"/>


- LogQL might be more complicated 


---


# Ethical & Security Aspects

* Do not log plain secrets (user or server)

- Do not log user private data 
	- You might have to "GDPR-remove" them 

* Be aware of who has access to the data and the data that is logged



---


## Logging for Analytics?


You can use your own logging infra for analytics instead of relying on Google Analytics

Note: More logs => and more privacy concerns

---


## Logging vs. Crash Reporting (e.g. Sentry)
  
  - Similarity: often written to the same logfile (in the case of web apps)

  - Difference: some log entires are not crashes but simply informational


---

## High-Resolution Logging 

- With sufficiently *high-resolution* logging you can have a practical backup of the state of the database...

- *Binary logging* in the MySql context
	- Stream of events that modify the DB
	- Can be shipped across machines 

---

## Good to Know

- Docker - all logs can be found in `/var/lib/docker/containers/<container_id>`

- When using Docker containers - log files are lost when recreating continaers

- ELK - you can reduce the memory allocated to it to about 700MB at the minimum

- at least one group succeeded in integrating Loki & Grafana instead of ELK in their setup

- LNAV = Log File Navigator ([lnav.org](https://lnav.org/))
	- Basic search from the command line 
	- Practically no resources 
	- Can aggregate live multiple files

 
---
### Debugging

Hi, we are using Serilog, Elasticsearch and kibana in our application for logging but kibana isn't showing any data. I'm not sure where in the process it is failing and the logs aren't being passed on. I've looked at countless guides and tutorial and our  configuration matches those but still haven't been able to get to work. Has anyone had any issues? or can offer help. thanks!

Try to debug it step by step. Is the data in ES?

If you know the name of your index, then you can `curl localhost:9200/nameofindex/_count` and you should see the number of "documents" (logs) in your case.

if you don't know the name of your index, then try to get all of them with something like `curl localhost:9200/_cat/indices`

![](../session_12/images/Pasted%20image%2020230508144501.png)


ah, now I see that you have two documents in each one of your indexes. every log message should be a document. you should definitely have more than 2 if your logs are being sent to ES. in fact, if you look at the name of those two indices, they're both named `.kibana*` - they are internal kibana indices; you have not succeeded in creating an index or sending any data to elastic search it seems. Probably better do the `docker logs` on the elasticsearch container to see whether you can learn something from that!

alternative to `docker logs `  is  [`docker attach`](https://docs.docker.com/engine/reference/commandline/attach/) 



---


class: center, middle
# Service Level Agreements

---

# Service-Level Agreement (SLA)

Commitment between a service provider and a client.

Particular aspects of the service are agreed upon

* quality
* availability
* responsibilities


---


# SLA Metrics

Common metrics for web services

- Uptime/availability (usually percentage of all time)

- Mean response time (average time before answer)

- Mean time to recover (time to recover after outage)

- Failure frequency (number of failures/timeouts over time)

---





# Comparing Two SLAs

Cloud Services for Multilingual Translation
- Google Translate ([link](https://cloud.google.com/translate/sla))
- Azure Translate ([link](https://azure.microsoft.com/en-us/support/legal/sla/machine-learning-service/v1_0/))


To think about: 

1. How is Uptime defined? 

2. How do back-off requirements influence the definition of Uptime?

3. How is Downtime defined? 

4. Which is more generous in case of reward for downtime?


---


class: center, middle

# Now it's your Turn: 

## [Exercise: Try out EFK with Our MiniTwit](https://github.com/itu-devops/lecture_notes/blob/master/sessions/session_08/README_EXERCISE.md)
## [Project: Add Logging to Your Project](https://github.com/itu-devops/lecture_notes/blob/master/sessions/session_08/README_TASKS.md)
