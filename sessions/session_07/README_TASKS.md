-----------

# Your turn now!

<img src="https://media.giphy.com/media/13GIgrGdslD9oQ/giphy.gif" width=50%/>

  - [1) Enhance your CI Pipelines with at least three static analysis tools](#2-enhance-your-ci-pipelines-with-at-least-three-static-analysis-tools)
  - [2) Add Maintainability and Technical Debt estimation tools to your projects](#1-add-maintainability-and-technical-debt-estimation-tools-to-your-projects)
  - [3) Software Licensing](#2-software-licensing)
  - [4) Software Maintenance](#3-software-maintenance)


## 1) Enhance your CI Pipelines with at least three static analysis tools

Choose and include at least three static analysis tools as software quality gates into your CI/CD pipelines. You might want to start searching for relevant tools for your respective languages and frameworks here: https://github.com/mre/awesome-static-analysis.

Include them in a way that you either abort build in case quality of your code is too low (you will have to define some threshold here) or that you decide to trust them and let the tools try to automatically fix problems (in case you find a tool that supports that). In the latter case, you want to let the corresponding tool contribute the applied changes back to the corresponding source repository.

Let one of the tools be Snyk or a similar tool. In case you build and deploy Docker containers, configure your CI chain in a way that a _quality gate_ prevents that containers with critical vulnerabilities are deployed to production.


## 2) Add Maintainability and Technical Debt estimation tools to your projects


Add all of the following three tools to your projects:

  * [Sonarqube](https://sonarcloud.io)
    - After doing the exercises you should already have done this.
  * [Code Climate](https://codeclimate.com/)
  * [Better Code Hub](https://bettercodehub.com/)

The task should be easy and quick to perform. To any of the three tools, you can login via Github and just select the corresponding repository/-ies.

In case Better Code Hub complains that your system is too big to be analyzed, you can upgrade your plan with the Github education pack.


React on the issues that these tools are 'complaining' about. You do not have to fix everything. But prominent issues that you agree on, should be fixed from now on. Be aware of that the tools automatically analyze new versions of your projects, i.e., check that your future work does not introduce new issues and decreases the quality metrics.


## 3) Software Licensing


If you have not done so yet, decide on a license for your project. Take into consideration what Alexander told you in his guest lecture.

For all your dependencies, determine and list their respective licenses. Figure out if you can actually use the license of your liking for your project or if that would not be possible due to being incompatible to a license of one of your dependencies.

Base your decision on the following figure, which Alexander used in his presentation:

![](https://en.wikipedia.org/wiki/License_compatibility#/media/File:Floss-license-slide-image.svg)

Consider adding [ScanCode toolkit](https://github.com/nexB/scancode-toolkit) to your CI chains to automate identification of -potentially changing- licenses of your dependencies. Alexander mentioned the tool in the end of his presentation.

In case you wonder if it is worth thinking about software licenses, you might want to read about a [recent prominent example from the Ruby ecosystem](https://www.theregister.com/2021/03/25/ruby_rails_code/)



## 4) Software Maintenance 

If not done yet, **finish** implementing your systems. There are some groups that do not display public or private tweet timelines yet!


We are in software maintenance. That is, fix issues of your version of _ITU-MiniTwit_ **as soon as possible**. Let's say that as soon as possible means within 24 hours if possible, i.e., if it is not a super big issue that requires a big rewrite. 

Now, with your monitoring systems in place, you will likely observe issues when they arise or even before the arise. Just fix them as soon as you realize them.

Additionally, our dashboards illustrate status and potential errors as the simulator 'sees' them [here](http://164.92.246.227/status.html). For example, fix wrong status codes, e.g., `tweet` shall return `204` instead of `200`, or too slow response times.

Continue to release (now likely automatically) at least once per week versions of your system with corresponding fixes.


