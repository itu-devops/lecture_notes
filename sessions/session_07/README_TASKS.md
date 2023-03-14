-----------

# Your turn now!

<img src="https://media.giphy.com/media/13GIgrGdslD9oQ/giphy.gif" width=50%/>

  - [0) Add tests to your CI chain](#0-add-tests-to-your-ci-chain)
  - [1) Enhance your CI Pipelines with at least three static analysis tools](#2-enhance-your-ci-pipelines-with-at-least-three-static-analysis-tools)
  - [2) Add Maintainability and Technical Debt estimation tools to your projects](#1-add-maintainability-and-technical-debt-estimation-tools-to-your-projects)
  - [4) Software Maintenance](#3-software-maintenance)


## 0) Add tests to your CI chain

Add integration tests, UI, and end-to-end tests to your CI chains.
For example, adapt the test case `test_itu_minitwit_ui.py`, from the lecture and exercise material, so that it can be executed from within a Docker container.
Add a respective setup, e.g., via `docker-compose` to you CI chains.

Use the test suite as a _quality gate_. That is, in case tests do not pass, stop delivery and deployment of your systems.
You might want to start with integrating the API test that you received in session 3 and the end-to-end test and UI test that you received in the lecture material.

## 1) Enhance your CI Pipelines with at least three static analysis tools

Choose and include at least three static analysis tools as software quality gates into your CI/CD pipelines. You might want to start searching for relevant tools for your respective languages and frameworks here: https://github.com/mre/awesome-static-analysis.

Include them in a way that you either abort build in case quality of your code is too low (you will have to define some threshold here) or that you decide to trust them and let the tools try to automatically fix problems (in case you find a tool that supports that). In the latter case, you want to let the corresponding tool contribute the applied changes back to the corresponding source repository.

One of the tools may be `Snyk`. In case you build and deploy Docker containers, configure your CI chain in a way that a _quality gate_ prevents that containers with critical vulnerabilities are deployed to production.


## 2) Add Maintainability and Technical Debt estimation tools to your projects

Add the following two tools to your projects:

  * [Sonarqube](https://sonarcloud.io)
    - After doing the exercises you should already have done this.
  * [Code Climate](https://codeclimate.com/)

The task should be easy and quick to perform. To any of the three tools, you can login via GitHub and just select the corresponding repository/-ies.

React on the issues that these tools are 'complaining' about. You do not have to fix everything. But prominent issues that you agree on, should be fixed from now on. Be aware of that the tools automatically analyze new versions of your projects, i.e., check that your future work does not introduce new issues and decreases the quality metrics.


## 4) Software Maintenance

If not done yet, **finish** implementing your systems. There are some groups that do not display public or private tweet timelines yet!


We are in software maintenance. That is, fix issues of your version of _ITU-MiniTwit_ **as soon as possible**. Let's say that as soon as possible means within 24 hours if possible, i.e., if it is not a super big issue that requires a big rewrite.

Now, with your monitoring systems in place, you will likely observe issues when they arise or even before the arise. Just fix them as soon as you realize them.

Additionally, our dashboards illustrate status and potential errors as the simulator 'sees' them [here](http://164.92.246.227/status.html). For example, fix wrong status codes, e.g., `tweet` shall return `204` instead of `200`, or too slow response times.

Continue to release (now likely automatically) at least once per week versions of your system with corresponding fixes.


