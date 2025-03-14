class: center, middle

<img src="https://www.saa-authors.eu/picture/739/ftw_768/saa-mtcwmza4nzq5mq.jpg" width=40%/>

# DevOps, Software Evolution and Software Maintenance

Helge Pfeiffer, Associate Professor,<br>
[Research Center for Government IT](https://www.itu.dk/forskning/institutter/institut-for-datalogi/forskningscenter-for-offentlig-it),<br>
[IT University of Copenhagen, Denmark](https://www.itu.dk)<br>
`ropf@itu.dk`

---

class: center, middle

# Feedback: The state of your projects?

---

## Monitoring?


Only **3/16** groups sent a pull-request to https://github.com/itu-devops/lecture_notes/blob/master/misc_urls.py with a monitoring URL?

<img src="https://media1.tenor.com/m/ACBGhLB0v0gAAAAC/looney-tunes-telescope.gif" width="40%">


**Make sure that you do that task**!

---

### Group J
<!-- http://157.245.26.8:5341/#/dashboards?range=1d&dashboardId=dashboard-14 -->
<img src="images/group_j_monitoring1.png" width="100%">

<img src="images/group_j_monitoring2.png" width="100%">

---

### Group K
<!-- http://209.38.114.92:3000/d/minitwit_dashboard -->
<img src="images/group_k_monitoring.png" width="100%">

---

### Group O
<!-- http://209.38.43.0:3000/  -->
<img src="images/group_o_monitoring1.png" width="100%">
<img src="images/group_o_monitoring2.png" width="100%">

---

## Monitoring?

Remember from last session:

  > Without monitoring you are not doing your job.
  >
  > James Turnbull _"The Art of Monitoring"_

So all the other groups, please add monitoring to your applications and share the link to the dashboard with us.

---

### Please remember that the monitoring dashboard has to be accessible for us...

Either it is public or you have to use the [credentials were distributed via Teams](https://teams.microsoft.com/l/message/19:Fu7JwCZrkViMXmxr7K5vAiJV5bYYIoFPHPuV9RDiABo1@thread.tacv2/1741860113584?tenantId=bea229b6-7a08-4086-b44c-71f57f716bdb&groupId=915e499e-87d0-4f62-851d-b966bcfbc491&parentMessageId=1741860113584&teamName=2025%20DevOps%2C%20Software%20Evolution%20and%20Software%20Maintenance&channelName=General&createdTime=1741860113584).

---

## Maintenance?

Did you observe something after setting up your monitoring that you fixed?

---

### Release Activity

<object width="100%" data="http://138.68.66.124/release_activity_weekly.svg"></object>

---

### Weekly Commit Activity

<object width="100%" data="http://138.68.66.124/commit_activity_weekly.svg"></object>

---

### Latest processed events?

<object width="100%" data="http://206.81.20.113/chart.svg"></object>

---

### Error plot

<object width="100%" data="http://206.81.20.113/error_chart.svg"></object>

---

## How do you feel it is going with your projects?

---

## What I can see

#### No tweets in the public timeline?

<!--
  * [Group a](http://138.197.178.108:5000/public) → No public timeline?
  * [Group f](http://67.207.72.167:3000) → Empty timeline?
  * [Group o](http://209.38.115.34:5000) → Empty timeline?
  * [Group i](http://67.207.72.20:8080) → Empty timeline?
-->

<table>
  <tr>
    <th>Group a</th>
    <th>Group f</th>
    <th>Group o</th>
    <th>Group i</th>
  </tr>
  <tr>
    <td>
      <center><a href="images/group_l_public_timeline.png"><img src="images/group_a_public_timeline.png" width="90%"></a></center>
    </td>
    <td>
      <center><a href="images/group_s_public_timeline.png"><img src="images/group_f_public_timeline.png" width="90%"></a></center>
    </td>
    <td>
      <center><a href="images/group_s_public_timeline.png"><img src="images/group_o_public_timeline.png" width="90%"></a></center>
    </td>
    <td>
      <center><a href="images/group_s_public_timeline.png"><img src="images/group_i_public_timeline.png" width="90%"></a></center>
    </td>
  </tr>
</table>

---

#### Assorted issues
<!--
  * [Group a](http://138.197.178.108:5000/public) → No public timeline?
  * [Group f](http://67.207.72.167:3000) → Empty timeline?
  * [Group o](http://209.38.115.34:5000) → Empty timeline?
  * [Group i](http://67.207.72.20:8080) → Empty timeline?


  * [Group c](http://134.209.137.191) → Always the same tweets and timestamp?
  * [Group d](http://209.38.176.56:8080) → Always the same tweets, not those sent by the simulator, and timestamps?
  * [Group g]() → No MiniTwit running at all?
  * [Group j](http://157.245.26.8:5001) → Long initial load times?
  * [Group k](http://209.38.114.92:4567/) → System is down?
  * [Group n](http://161.35.71.145:5000/public) → Always the same tweets and timestamp?

-->

<table>
  <tr>
    <th>Group c</th>
    <th>Group d</th>
    <th>Group g</th>
    <th>Group j</th>
    <th>Group k</th>
    <th>Group n</th>
  </tr>
  <tr>
    <td>
      <center><a href="images/group_c_public_timeline.png"><img src="images/group_c_public_timeline.png" width="90%"></a></center>
    </td>
    <td>
      <center><a href="images/group_d_public_timeline.png"><img src="images/group_d_public_timeline.png" width="90%"></a></center>
    </td>
    <td>
      <center><a href="images/group_g_public_timeline.png"><img src="images/group_g_public_timeline.png" width="90%"></a></center>
    </td>
    <td>
      <center><a href="images/group_j_public_timeline.png"><img src="images/group_j_public_timeline.png" width="90%"></a></center>
    </td>
    <td>
      <center><a href="images/group_k_public_timeline.png"><img src="images/group_k_public_timeline.png" width="90%"></a></center>
    </td>
    <td>
      <center><a href="images/group_n_public_timeline.png"><img src="images/group_n_public_timeline.png" width="90%"></a></center>
    </td>
  </tr>
  <tr>
    <td>→ Always the same tweets and timestamp?</td>
    <td>→ Always the same tweets, not those sent by the simulator, and timestamps?</td>
    <td>→ No MiniTwit running at all?</td>
    <td>→ Long initial load times?</td>
    <td>→ System is down?</td>
    <td>→ Always the same tweets and timestamp?</td>
  </tr>
</table>

---

class: center, middle

# Software Quality?

---

Now, that we are in the second half of the course and that you spent a lot of time evolving and maintaining your *ITU-MiniTwit* systems, some questions might arise:

  * Are your *ITU-MiniTwit* systems any good?
  * How good/bad are your *ITU-MiniTwit* systems?
  * Is there anything one can do to improve quality of your *ITU-MiniTwit* systems?

---

# Task

[This week's task](./README_TASK.md)

---

# Technical Debt?

Let me take a small detour: [https://itu.dk/~ropf/presentations/2024_05_30_IT_r%C3%A5det.pdf](https://itu.dk/~ropf/presentations/2024_05_30_IT_r%C3%A5det.pdf)


---

# The issue with automatic quality assessments?

<img src="images/swqat_quality.png" width="80%">

---

# The issue with automatic quality assessments?

<img src="images/swqat_maintainability.png" width="80%">

---

# The issue with automatic quality assessments?

<img src="images/swqat_size_log.png" width="70%">

See e.g. [Pfeiffer and Aaen _"Tools for monitoring software quality in information systems development and maintenance: five key challenges and a design proposal"_](https://pure.itu.dk/files/103580697/ijispm-120102.pdf)

---

## What is Software Quality?

Generally, _quality_ is defined as:


  > "[...] the totality of characteristics of an entity that bear on its ability to satisfy stated and implied needs."
  >
  > [ISO 8402:1994, Quality management and quality assurance – Vocabulary](https://www.iso.org/standard/20115.html)

--


For the term _software quality_ industrial standards are quite consistent.

  > **(1)** capability of a software product to satisfy stated and implied needs when used under specified conditions
  >
  > [_Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Guide to
SQuaRE_, International Organization for Standardization, Geneva, CH, Standard, May 2015](https://www.iso.org/obp/ui/#iso:std:64764:en)
  >
  > **(2)** degree to which a software product satisfies stated and implied needs when used under specified conditions
  >
  > [_Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models_, International Organization for Standardization, Geneva, CH, Standard, May 2015](https://www.iso.org/obp/ui/#iso:std:iso-iec:25010:ed-1:v1:en)
  >
  > **(3)** degree to which a software product meets established requirements
  >
  > [_IEEE 730-2014 IEEE Standard for Software Quality Assurance Processes_](https://standards.ieee.org/standard/730-2014.html)

---

## What is Software Quality?

Various stakeholders have particular and varying quality requirements:

  > Good software should deliver the required functionality and performance to the user and should be maintainable, dependable, and usable.
  >
  > [I. Sommerville, _Software Engineering_, 9th ed. USA: Addison-Wesley Publishing Company, 2010.](https://www.pearson.com/us/higher-education/product/Sommerville-Software-Engineering-9th-Edition/9780137035151.html)

---

## What is Software Quality?

Various stakeholders have particular and varying quality requirements:

  > ... David Gamin studied how quality is perceived in various domains, including philosophy, economics, marketing, and operations management. He concluded that "quality is a complex and multifaceted concept" that can be described from five different perspectives.
  >
  >   * The **transcendental view** sees quality as something that can be recognized but not defined.
  >
  >   * The **user view** sees quality as fitness for purpose.
  >
  >   * The **manufacturing view** sees quality as conformance to specification.
  >
  >   * The **product view** sees quality as tied to inherent characteristics of the product.
  >
  >   * The **value-based view** sees quality as dependent on the amount a customer is willing to pay for it.
  >
  > [Kitchenham et al. 1996 _Software Quality: The Elusive Target_](https://ieeexplore.ieee.org/iel1/52/10198/00476281.pdf)

One perspective that is missing in the above but that Sommerville describes in chapter 24.4 is the perspective of *software process quality*, which assumes that the better the process leading to a software product the better the product itself.

---

## Software Quality Models

Since there are many software quality models. Let's have a look at the earliest Boehm's model from 1976 and more recent ones from the ISO 250x0 series of standards.

---

### Boehm 1976 - Quality Model

<img src="images/boehm.png" width="60%">

[Boehm et al. _"Quantitative evaluation of software quality"_](https://dl.acm.org/ft_gateway.cfm?id=807736&type=pdf)

---

### Boehm 1976 - Quality Model

<img src="images/boehm_metrics.png" width="70%">

[Boehm et al. _"Quantitative evaluation of software quality"_](https://dl.acm.org/ft_gateway.cfm?id=807736&type=pdf)

---

### ISO 250x0 - Quality Models

<img src="images/ISO_25000.png" width="60%">

---

### ISO 25010 - Quality in Use Model

<img src="images/ISO_25010_in_use.png" width="80%">

---

### ISO 25010 - Product Model

<img src="images/ISO_25010_product.png" width="90%">

---

### ISO 25023 - Metrics (QMEs)

<img src="images/ISO_25023.png" width="80%">

---

### How to measure software quality and quality attributes?

As Sommerville states, it is neither easy nor straight forward:

  > Unfortunately, it is difficult to make direct measurements of many of the software quality attributes [...]. Quality attributes such as maintainability, understandability, and usability are external attributes that relate to how developers and users experience the software. They are affected by subjective factors, such as user experience and education, and they cannot therefore be measured objectively. To make a judgment about these attributes, you have to measure some internal attributes of the software (such as its size, complexity, etc.) and assume that these are related to the quality characteristics that you are concerned with.

----------------------------

--


Usually:

  > The project or organization must start by making a list of nonfunctional requirements that define the "right code." We call this the quality model.
  >
  > Letouzey et al. 2012 _"Managing Technical Debt with the SQALE Method"_

Then one has to define and specify metrics, associate them to the quality attributes of interest, translate these  metrics into precise programs/measures on given artifacts, and define how measured values are aggregated in the end for assessment.

---

### Problematic about Software Quality: "What is Software?"


Remember that _software_ is way more than code!


  > [...] software is not just the programs themselves but also all associated documentation and configuration data that is required to make these programs operate correctly.
  >
  > Sommerville _"Software Engineering"_ (9th Ed.)

--


Interestingly, it is not properly defined what software actually is.

  > "Software is the collection of all artifacts, which allow (a) suitably educated person(s) with access to specified and suitable hardware to instantiate a running system.
  >
  > Additionally, the collection of such artifacts allow such (a) person(s) to understand and reason about a systems' working and properties and let them understand why the system is as it is and why it behaves the way it does."
  >
  > _Helge's definition of software_

That is, when you want to measure software quality, you have to necessarily look at more than just source code.

---

## Maintainability

As you could already see in the first quality model [Boehm et al. _"Quantitative evaluation of software quality"_](https://dl.acm.org/ft_gateway.cfm?id=807736&type=pdf) _maintainability_ seems to be an important software quality.


<img src="images/boehm.png" width="50%">

---

This is likely due to:

  > M2. Maintenance typically consumes about 40 to 80 percent (60 percent average) of software costs. Therefore, it is probably the most important life cycle phase.
  >
  > ...
  >
  > M3. Enhancement is responsible for roughly 60 percent of software maintenance costs. Error correction is roughly 17 percent. So, software maintenance is largely about adding new capability to old software, not about fixing it.
  >
  > ...
  >
  > M5. Most software development tasks and software maintenance tasks are the same—except for the additional maintenance task of "understanding the existing product." This task is the dominant maintenance activity, consuming roughly 30 percent of maintenance time. So, you could claim that maintenance is more difficult than development.
  >
  > [Glass _"Frequently Forgotten Fundamental Facts about Software Engineering"_](http://www.eng.auburn.edu/~kchang/comp6710/readings/Forgotten_Fundamentals_IEEE_Software_May_2001.pdf)

---

### What comprises Maintenance?

  * fixing bugs
  * keeping its systems operational
  * investigating failures
  * adapting it to new platforms
  * modifying it for new use cases
  * repaying technical debt
  * adding new features
  * etc.

From: Kleppmann _"Designing Data-Intensive Applications"_

---

### Design for Maintainability according to the ISO 25010 Product Model


  * Modularity
  * Reusability
  * Analysability
  * Modifyability
  * Testability

---

### Design for Maintainability (Kleppmann "Designing Data-Intensive Applications")

... minimize pain during maintenance, and thus avoid creating legacy software ourselves.

  * a) **Operability**
    Make it easy for operations teams to keep the system running smoothly.
  * b) **Simplicity**
    Make it easy for new engineers to understand the system, by removing as much complexity as possible from the system. (Note this is not the same as simplicity of the user interface.)
  * c) **Evolvability**
    Make it easy for engineers to make changes to the system in the future, adapting it for unanticipated use cases as requirements change. Also known as extensibility, modifiability, or plasticity.

---

class: center, middle

# Technical Debt

---

## Technical Debt?

  > "Shipping first time code is like going into debt. A little debt speeds development so long as it is paid back promptly with a rewrite. ... The danger occurs when the debt is not repaid. Every minute spent on not-quite-right code counts as interest on that debt."
  >
  > Cunningham 1992 _"The WyCash Portfolio Management System"_

--


  - As in the saying *one man's meat is another man's poison*, we do not have generally true measures for software quality, i.e., *quite-right*, see e.g., Kitchenham 1996, Boehm 1976.

  - Often quality is domain specific as for example stated in the ISO 25000 standard:
  > "for interactive consumer software, such as word processor, usability and co-existence with other software, such as mailing software, is considered important. For Internet and open systems, security and interoperability are most important."
  >
  > ISO 25000

Technical Debt (TD) is used as metaphor to describe

  > “technical compromises that are expedient in the short term, but that create a technical context that increases complexity and cost in the long term”
  >
  > Avgeriou et al. [_“Managing technical debt in software engineering (dagstuhl seminar 16162)”_](https://drops.dagstuhl.de/opus/volltexte/2016/6693/pdf/dagrep_v006_i004_p110_s16162.pdf)

<!--
  - TD is:

  > "the cost of the effort required to fix problems that remain in the code when an application is released to operation."
  >
  > [Sappidi et al. 2010 _"CAST Worldwide 1141 Application Software Quality Study"_](https://www.agilealliance.org/wp-content/uploads/2016/01/CAST_2010AnnualReport_KeyFindings_WebFinal.pdf)


  - TD is:
  > "a metaphor for the accumulation of unresolved issues in a software project'"
  >
  > Birchall _"Re-Engineering Legacy Software"_

  > "the difference between what was promised and what was actually delivered."
  >
  > [Radigan](https://www.atlassian.com/agile/software-development/technical-debt)
 -->

<!-- ---

### How is technical debt introduced?

![](https://martinfowler.com/bliki/images/techDebtQuadrant.png)

Source: https://martinfowler.com/bliki/TechnicalDebtQuadrant.html
 -->

---

## What can we do about SW Quality, Maintainability, and TD?

In essence we can do two things:

  * introduce certain practices in our development process
  * introduce _quality gates_ via tests and tools into our build processes

---

class: center, middle

# Practices for Software Quality

---

## Practices for Software Quality: Testing

### Why shall we test at all?


  > Testing is intended to show that a program does what it is intended to do and to ­discover program defects before it is put into use.
  >
  > Sommerville _Software Engineering_

--

Software Quality:

  > degree to which a software product satisfies stated and implied needs when used under specified conditions
  >
  > [_Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models_, International Organization for Standardization, Geneva, CH, Standard, May 2015](https://www.iso.org/obp/ui/#iso:std:iso-iec:25010:ed-1:v1:en)
  >
  >
  > degree to which a software product meets established requirements
  >
  > [_IEEE 730-2014 IEEE Standard for Software Quality Assurance Processes_](https://standards.ieee.org/standard/730-2014.html)

---

### Why shall we test at all?

  > GWS is the web server responsible for serving Google Search queries and is as important to Google Search as air traffic control is to an airport. **Back in 2005, as the project swelled in size and complexity, productivity had slowed dramatically**. **Releases** were becoming **buggier**, and it was taking **longer and longer** to push them out. Team members had **little confidence** when making changes to the service, and often found out something was wrong only when features **stopped working in production**. (At one point, **more than 80% of production pushes contained user-affecting bugs that had to be rolled back.**)

--

  > To address these problems, the tech lead (TL) of GWS decided to institute a policy of engineer-driven, automated testing. As part of this policy, **all new code changes were required to include tests**, and those **tests would be run continuously**. Within a year of instituting this policy, the **number of emergency pushes dropped by half**. This drop occurred despite the fact that the project was seeing a record number of new changes every quarter.
  >
  > T. Winters et al. _Software Engineering at Google_

---

### What are tests?

  > The simplest test is defined by:
  > * A single behavior you are testing, usually a method or API that you are calling
  > * A specific input, some value that you pass to the API
  > * An observable output or behavior
  > * A controlled environment such as a single isolated process
  >
  > T. Winters et al. _Software Engineering at Google_

--

You know already

  * Unit Testing: What is the _unit_ in unit testing?

---

  * Integration Testing
  <img src="https://twilio-cms-prod.s3.amazonaws.com/images/MyR86UeunZJcErQJmlEoEwWpAt56uIH2k2mHFqfsA95S2R.width-500_NbXJ1BV.png" width="20%">

  > In contrast to unit tests, integration tests:
  >
  > * Use the actual components that the app uses in production.
  > * Require more code and data processing.
  > * Take longer to run.
  >
  > https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-6.0

--

  > Integration tests check whether different chunks of code are interacting successfully in a local environment. A “chunk of code” can manifest in many ways, but generally integration tests involve verifying service/API interactions. Since integration tests are generally local, you may need to mock different services.
  >
  > https://www.twilio.com/blog/unit-integration-end-to-end-testing-difference

---

### UI Tests with Selenium

  > The story starts in 2004 at ThoughtWorks in Chicago, with Jason Huggins building the Core mode as "JavaScriptTestRunner" for the testing of an internal Time and Expenses application (Python, Plone). Automatic testing of any applications is core to ThoughtWork's style, given the Agile leanings of this consultancy. He has help from Paul Gross and Jie Tina Wang. For them, this was a day job.
  >
  > Jason started demoing the test tool to various colleagues. Many were excited about its immediate and intuitive visual feedback, as well as its potential to grow as a reusable testing framework for other web applications.
  >
  > https://www.selenium.dev/history/

--

<!-- These work against the example ITU-MiniTwit from here https://github.com/itu-devops/flask-minitwit-mongodb/tree/Containerize -->

``` python
import pymongo
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options


GUI_URL = "http://localhost:5000/register"
DB_URL = "mongodb://localhost:27017/test"


def _register_user_via_gui(driver, data):
    driver.get(GUI_URL)

    wait = WebDriverWait(driver, 5)
    buttons = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, "actions")))
    input_fields = driver.find_elements(By.TAG_NAME, "input")

    for idx, str_content in enumerate(data):
        input_fields[idx].send_keys(str_content)
    input_fields[4].send_keys(Keys.RETURN)

    wait = WebDriverWait(driver, 5)
    flashes = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, "flashes")))

    return flashes


def test_register_user_via_gui():
    """
    This is a UI test. It only interacts with the UI that is rendered in the browser and checks that visual
    responses that users observe are displayed.
    """
    firefox_options = Options()
    # firefox_options.add_argument("--headless")
    firefox_options = None
    with webdriver.Firefox(service=Service("./geckodriver"), options=firefox_options) as driver:
        generated_msg = _register_user_via_gui(driver, ["Me", "me@some.where", "secure123", "secure123"])[0].text
        expected_msg = "You were successfully registered and can login now"
        assert generated_msg == expected_msg

    # cleanup, make test case idempotent
    db_client = pymongo.MongoClient(DB_URL, serverSelectionTimeoutMS=5000)
    db_client.test.user.delete_one({"username": "Me"})
```

---

### End-to-end testing (also called _system test_) with Selenium


```python
import pymongo
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options


GUI_URL = "http://localhost:5000/register"
DB_URL = "mongodb://localhost:27017/test"


def _register_user_via_gui(driver, data):
    driver.get(GUI_URL)

    wait = WebDriverWait(driver, 5)
    buttons = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, "actions")))
    input_fields = driver.find_elements(By.TAG_NAME, "input")

    for idx, str_content in enumerate(data):
        input_fields[idx].send_keys(str_content)
    input_fields[4].send_keys(Keys.RETURN)

    wait = WebDriverWait(driver, 5)
    flashes = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, "flashes")))

    return flashes


def _get_user_by_name(db_client, name):
    return db_client.test.user.find_one({"username": name})


def test_register_user_via_gui_and_check_db_entry():
    """
    This is an end-to-end test. Before registering a user via the UI, it checks that no such user exists in the
    database yet. After registering a user, it checks that the respective user appears in the database.
    """
    firefox_options = Options()
    firefox_options.add_argument("--headless")
    # firefox_options = None
    with webdriver.Firefox(service=Service("./geckodriver"), options=firefox_options) as driver:
        db_client = pymongo.MongoClient(DB_URL, serverSelectionTimeoutMS=5000)

        assert _get_user_by_name(db_client, "Me") == None

        generated_msg = _register_user_via_gui(driver, ["Me", "me@some.where", "secure123", "secure123"])[0].text
        expected_msg = "You were successfully registered and can login now"
        assert generated_msg == expected_msg

        assert _get_user_by_name(db_client, "Me")["username"] == "Me"

        # cleanup, make test case idempotent
        db_client.test.user.delete_one({"username": "Me"})
```

--

Another tool for UI tests that you might want to consider is [`cypress`](https://www.cypress.io/) or [`Playwright`](https://playwright.dev)

---

## Practices for Software Quality: Pair programming

  > By  working  in tandem,  the  pairs  completed their  assignments 40% to 50% faster.
  >
  > [L. Williams et al. _"Strengthening the Case for Pair Programming"_](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=854064)



  > The top benefit was fewer bugs in the source code. One person
said "it greatly reduces bug numbers." Simple bugs were found
and fixed, as one respondent reported, "there are fewer 'petty'
bugs." In addition, respondents speculated that the longer bugs
live in the code, the more difficult they are to fix. Using pair pro-
gramming, "bugs are spotted earlier" in the development process,
and "may prevent bugs before [they are] deeply embedded."
  >
  > A. Begel et al. [_"Pair programming: what's in it for me?"_](https://www.researchgate.net/profile/Andrew-Begel/publication/221494979_Pair_Programming_What%27s_in_it_for_Me/links/0c960522018d66773d000000/Pair-Programming-Whats-in-it-for-Me.pdf)

  > for a development-time cost of about 15%, pair programming improves design quality, reduces defects, reduces staffing risk, enhances technical skills, improves team communications and is considered more enjoyable at statistically significant levels.
  >
  > A. Cockburn et al. [_"The Costs and Benefits of Pair Programming"_](https://collaboration.csc.ncsu.edu/laurie/Papers/XPSardinia.PDF)

---

## Practices for Software Quality: Code reviews

  > At a cost of 1-2% of the project, a 40% decrease in the number of issues  was  found.
  >
  > R.A. Baker Jr [_"Code reviews enhance software quality"_](https://dl.acm.org/doi/pdf/10.1145/253228.253461)

  > Findings  show  that  unreviewed  commits  (i.e., commits  that did  not  undergo  a  review  process)  have  over  two  times  more chances of introducing bugs than reviewed commits (i.e., commits that  underwent  a  review  process).  In  addition,  code  committed after  review  has  a  substantially  higher  readability  with  respect to  unreviewed  code.
  >
  > G. Bavota et al. [_"Four eyes are better than two: On the impact of code reviews on software quality"_](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.709.2980&rep=rep1&type=pdf)

--


  > we ﬁnd that both code review coverage and participation share a significant link with software quality. Low code review coverage and participation are estimated to produce components with up to two and five additional post-release defects respectively. Our results empirically confirm the intuition that poorly reviewed code has a negative impact on software quality [...]
  >
  > S. McIntosh [_"The impact of code review coverage and code review participation on software quality: a case study of the Qt, VTK, and ITK projects"_](https://dl.acm.org/doi/abs/10.1145/2597073.2597076)

---

## Practices for Software Quality: Static Analysis


In the following we want to asses some qualities of an earlier version of *ITU-MiniTwit*, the one published in the master branch of https://github.com/itu-devops/itu-minitwit-monitoring.

Since that program is a Python program, I will show you in the following some tools from the Python realm but similar ones exist for any of your languages.
The following tool presentation is inspired by https://luminousmen.com/post/python-static-analysis-tools

---

### [Pylint](pylint.org)

  * checks coding standards
  * detects errors
  * detects duplicates
  * detects unused code


```
$ pylint minitwit_mysql.py
************* Module minitwit_mysql
minitwit_mysql.py:33:2: W0511: TODO change... (fixme)
minitwit_mysql.py:74:0: C0303: Trailing whitespace (trailing-whitespace)
minitwit_mysql.py:178:0: C0301: Line too long (114/100) (line-too-long)
minitwit_mysql.py:178:0: C0301: Line too long (114/100) (line-too-long)
minitwit_mysql.py:206:0: C0301: Line too long (101/100) (line-too-long)
minitwit_mysql.py:239:0: C0301: Line too long (107/100) (line-too-long)
minitwit_mysql.py:239:0: C0301: Line too long (107/100) (line-too-long)
minitwit_mysql.py:28:0: E0611: No name 'check_password_hash' in module 'werkzeug' (no-name-in-module)
minitwit_mysql.py:28:0: E0611: No name 'generate_password_hash' in module 'werkzeug' (no-name-in-module)
minitwit_mysql.py:48:0: C0103: Constant name "app" doesn't conform to UPPER_CASE naming style (invalid-name)
minitwit_mysql.py:79:4: C0103: Variable name "rv" doesn't conform to snake_case naming style (invalid-name)
minitwit_mysql.py:67:20: W0613: Unused argument 'args' (unused-argument)
minitwit_mysql.py:91:4: C0103: Variable name "rv" doesn't conform to snake_case naming style (invalid-name)
minitwit_mysql.py:309:0: E1101: Method 'jinja_env' has no 'filters' member (no-member)
minitwit_mysql.py:310:0: E1101: Method 'jinja_env' has no 'filters' member (no-member)
minitwit_mysql.py:13:0: W0611: Unused import sqlite3 (unused-import)
minitwit_mysql.py:16:0: W0611: Unused closing imported from contextlib (unused-import)

-----------------------------------
Your code has been rated at 7.54/10
```

  * R ... Refactor to adhere to "good practice"
  * C ... Convention violation of coding standard
  * W ... Warning indicating style issues or minor programming issues
  * E ... Error, most likely bugs
  * F ... Fatal, errors which prevent further analysis

---

### [Pyflakes](https://github.com/PyCQA/pyflakes)

  * detects errors

```
$ pyflakes minitwit_mysql.py
minitwit_mysql.py:13: 'sqlite3' imported but unused
minitwit_mysql.py:16: 'contextlib.closing' imported but unused
```

---

### [Prospector](https://github.com/PyCQA/prospector)

Prospector is a "meta-tool" since it incorporates results from other static analysis tools, such as, [Pylint](http://docs.pylint.org/), [pep8](http://pep8.readthedocs.org/en/latest/), and [McCabe complexity](https://pypi.python.org/pypi/mccabe), etc.


```
$ prospector minitwit_mysql.py
Messages
========

minitwit_mysql.py
  Line: 13
    pylint: unused-import / Unused import sqlite3
  Line: 16
    pylint: unused-import / Unused closing imported from contextlib
  Line: 39
    dodgy: password / Possible hardcoded password
  Line: 45
    dodgy: secret / Possible hardcoded secret key
  Line: 67
    pylint: unused-argument / Unused argument 'args' (col 20)



Check Information
=================
         Started: 2020-03-11 17:41:13.781662
        Finished: 2020-03-11 17:41:16.566612
      Time Taken: 2.78 seconds
       Formatter: grouped
        Profiles: default, no_doc_warnings, no_test_warnings, strictness_medium, strictness_high, strictness_veryhigh, no_member_warnings
      Strictness: None
  Libraries Used: flask
       Tools Run: dodgy, mccabe, pep8, profile-validator, pyflakes, pylint
  Messages Found: 5
```

---

### [Black](https://github.com/psf/black)

  > Black is the uncompromising Python code formatter. By using it, you agree to cede control over minutiae of hand-formatting. In return, Black gives you speed, determinism, and freedom from `pycodestyle` nagging about formatting. You will save time and mental energy for more important matters.
  >
  > https://github.com/psf/black


```
$ black minitwit_mysql.py
reformatted minitwit_mysql.py
All done! ✨ 🍰 ✨
1 file reformatted.
```

---

### [ShellCheck](https://github.com/koalaman/shellcheck)

```bash
$ shellcheck control.sh

In control.sh line 1:
if [ $1 = "init" ]; then
^-- SC2148: Tips depend on target shell and yours is unknown. Add a shebang.
     ^-- SC2086: Double quote to prevent globbing and word splitting.


In control.sh line 9:
elif [ $1 = "start" ]; then
       ^-- SC2086: Double quote to prevent globbing and word splitting.


In control.sh line 11:
    nohup `which python` minitwit.py > /tmp/out.log 2>&1 &
          ^------------^ SC2046: Quote this to prevent word splitting.
          ^------------^ SC2006: Use $(...) notation instead of legacy backticked `...`.
           ^---^ SC2230: which is non-standard. Use builtin 'command -v' instead.


In control.sh line 12:
elif [ $1 = "stop" ]; then
       ^-- SC2086: Double quote to prevent globbing and word splitting.


In control.sh line 15:
elif [ $1 = "inspectdb" ]; then
       ^-- SC2086: Double quote to prevent globbing and word splitting.


In control.sh line 17:
elif [ $1 = "flag" ]; then
       ^-- SC2086: Double quote to prevent globbing and word splitting.

For more information:
  https://www.shellcheck.net/wiki/SC2148 -- Tips depend on target shell and y...
  https://www.shellcheck.net/wiki/SC2046 -- Quote this to prevent word splitt...
  https://www.shellcheck.net/wiki/SC2086 -- Double quote to prevent globbing ...

$ echo $?
1
```

---

### Vagrant validator

```bash
$ vagrant validate
Vagrantfile validated successfully.
```

---

### [Haskell Dockerfile Linter (hadolint)](https://hadolint.github.io/hadolint/)

```bash
$ hadolint docker/minitwit/Dockerfile
docker/minitwit/Dockerfile:13 DL3008 warning: Pin versions in apt get install. Instead of `apt-get install <package>` use `apt-get install <package>=<version>`
docker/minitwit/Dockerfile:13 DL3009 info: Delete the apt-get lists after installing something
docker/minitwit/Dockerfile:13 DL3015 info: Avoid additional packages by specifying `--no-install-recommends`
docker/minitwit/Dockerfile:17 DL3059 info: Multiple consecutive `RUN` instructions. Consider consolidation.
```

---

### [ScanCode](https://github.com/nexB/scancode-toolkit)

A tool for scanning for used software licenses automatically

<!--pip install scancode-toolkit-->

```bash
$ scancode --license --html /tmp/scancode_report.html .
Setup plugins...
Collect file inventory...
Scan files for: licenses with 1 process(es)...
[####################] 56
Scanning done.
Summary:        licenses with 1 process(es)
Errors count:   0
Scan Speed:     0.80 files/sec.
Initial counts: 35 resource(s): 28 file(s) and 7 directorie(s)
Final counts:   35 resource(s): 28 file(s) and 7 directorie(s)
Timings:
  scan_start: 2022-03-15T084341.165525
  scan_end:   2022-03-15T084418.128133
  setup_scan:licenses: 2.05s
  setup: 2.05s
  scan: 34.86s
  output:html: 0.11s
  output: 0.11s
  total: 37.07s
Removing temporary files...done.
```

---

### How to measure maintainability and TD?

The answer is likely similar to as to how to measure software quality: It is neither easy nor straight forward.

Even though difficult and not straight forward, there exists a number tools that promise to automatically assess various quality attributes of software (currently mainly source code):

For example, the following tools allow to asses software code quality:


<img src="http://itu.dk/people/ropf/presentations/images/sw_qual_tools.png" width=60%>

---

### How to measure maintainability and TD?

  * [Sonarqube](https://sonarcloud.io)
    - Provides a maintainability and TD measure/index
    - Example:  https://sonarcloud.io/dashboard?id=itu-devops_itu-minitwit-terraform
  * [Code Climate](https://codeclimate.com/)
    - Provides a maintainability index
  * ~~[Better Code Hub](https://bettercodehub.com/)~~
    - Focuses on maintainability, mainly based on the book:
      - J. Visser et al. [_"Building Maintainable Software, Java Edition"_](
https://books.google.dk/books?id=2MV4CwAAQBAJ&printsec=frontcover&dq=building+maintainable+software+java&hl=da&sa=X&ved=2ahUKEwith7qMx7DvAhUF7KQKHbOZBvYQ6AEwAHoECAIQAg#v=onepage&q=building%20maintainable%20software%20java&f=false)
      - J. Visser et al. [_"Building Maintainable Software, C# Edition"_](https://books.google.dk/books?hl=da&lr=&id=-QVQDAAAQBAJ&oi=fnd&pg=PR2&dq=building+maintainable+software&ots=77PM9UQrHO&sig=wDj8VeCd8dap2Rzc103jykR_K9k&redir_esc=y#v=onepage&q=building%20maintainable%20software&f=false)

--

But be aware of what tools actually measure and be aware of:

  > The project or organization must start by making a list of nonfunctional requirements that define the "right code." We call this the quality model.
  >
  > Letouzey et al. 2012 _"Managing Technical Debt with the SQALE Method"_

---

### Technical Debt for SonarQube - The SQALE method

  > **Technical Debt** (`sqale_index`)
  >
  > Effort to fix all Code Smells. The measure is stored in minutes in the database. An 8-hour day is assumed when values are shown in days.
  >
  > https://docs.sonarqube.org/latest/user-guide/metric-definitions/#header-4

  > **Technical Debt Ratio** (`sqale_debt_ratio`)
  >
  > Ratio between the cost to develop the software and the cost to fix it. The Technical Debt Ratio formula is:
  >
  > `Remediation cost / Development cost`
  >
  > Which can be restated as:
  >
  > `Remediation cost / (Cost to develop 1 line of code * Number of lines of code)`
  >
  > The value of the cost to develop a line of code is 0.06 days.
  >
  > https://docs.sonarqube.org/latest/user-guide/metric-definitions/#header-4


---

### Want to write your thesis about SW-Quality, Metrics, Technical Debt, or related topics?

In case you think any of these questions are intriguing and if you think that some of the presented tools appear like black magic and you don't believe/trust them, then all this stuff is my area of research and I love to supervise thesis in this area!

Just feel free to contact me.

---

### Time to say good-bye

![](http://cdn.lowgif.com/medium/84746cb797486e97-.gif)

... for now. 😢

I won't be gone, I will be in the chat, when required I will join the exercise sessions, and you will see me for sure again in the two last sessions, when we shut down the simulator and tell you what to do before the exams.

From next week, Mircea will take over and tell you more about interesting topics.

---

## What to do now?

  * To prepare for your project work, practice with the [exercises](./README_EXERCISE.md)
  * Do the [project work](./README_TASKS.md) until the end of the week
  * And [prepare for the next session](../session_08/README_PREP.md)
