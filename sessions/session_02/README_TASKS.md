-----------


# Your turn now!

<img src="https://media.giphy.com/media/13GIgrGdslD9oQ/giphy.gif" width=50%/>

  - [1) Refactor _ITU-MiniTwit_ to another language and technology of your choice.](#1-refactor-itu-minitwit-to-another-language-and-technology-of-your-choice)
  - [2) Start implementing an API for the simulator in your _ITU-MiniTwit_.](#2-start-implementing-an-api-for-the-simulator-in-your-itu-minitwit)
  - [3) Describe Distributed Workflow](#3-describe-distributed-workflow)
  - [4) Preparation for next time](#4-preparation-for-next-time)



## 1) Refactor _ITU-MiniTwit_ to another language and technology of your choice.

Now that you know more or less how _ITU-MiniTwit_ is working, your task is to evolve it away from from a Python/Flask application to the language and technology stack of your choice.

**OBS**: 

  - Do not perform the "big rewrite" yet. That is, try to create a one to one copy of what you currently have in `minitwit.py`. If you want to, reuse the `static` artifacts, and `templates`. However, your new application shall have the same features as the current _ITU-MiniTwit_.
  - Make sure that you map the current features before refactoring.
  - Ideally, the test suite in `minitwit_tests.py` should pass for your refactored application too. In a next step you can translate the old test suite to your new language/tech. stack too.


Considerations for choice of language:

  - Either choose a language that you know and want to practice (likely Java and C\#)
  - or choose a language and framework that you always wanted to learn but never had the time to do so.
  
Likely, the first option is appropriate for BSc students and the second option for MSc students.

If I were in your position, I would consider one of the following:

  - [Go](http://golang.org/) with [Gorilla](http://www.gorillatoolkit.org/)
  - [Crystal](https://crystal-lang.org) with [Kemal](https://kemalcr.com)
  - [Elixir](https://elixir-lang.org) with [Phoenix](https://www.phoenixframework.org)
  - [Nim](https://nim-lang.org) with [Jester](https://github.com/dom96/jester)
  - [Ruby](https://www.ruby-lang.org) with [Sinatra](http://sinatrarb.com/)

In case you choose Python as your implementation language you have to build a solution that does not rely on the Flask framework.


**OBS MSc students**: Remember to log and provide good arguments for the choice of programming language and framework. Likely, a feature mapping/comparison or a mini-benchmark is a good choice.


Prepare a new release with a first version of your rewritten version of your _ITU-MiniTwit_ latest by **Sunday Feb 14th, at 22:00**)

Use your programming-fu and not your Google-fu! First, you will learn the most by doing so and second, we will setup and continuously run a copy-and-paste detection (CPD) tool that compares your systems to those of the other groups and last year's groups ;).



## 2) Start implementing an API for the simulator in your _ITU-MiniTwit_.


In some weeks, we will start a simulator that will run until the end of this course. It will simulate users interacting with your micro-blogging platform.

You can find the specification for the simulator API in 
[`API Spec/minitwit_sim_api.py`](./API\ Spec). **OBS**: your applications have to:

  - provide the same end points (on different hosts of course and potentially different ports),
  - ingest the same HTTP requests, i.e., GETs and POSTs as specified with the same parameters and payloads as provided,
  - provide at least the same HTTP status codes in response as specified.


The `API Spec/minitwit_sim_api.py` depends on your refactored `minitwit.py` from last weeks' homework.

A corresponding test (`API Spec/minitwit_sim_api_test.py`) illustrates how the simulator requests will be formed. You can inspect it and run it via `pytest minitwit_sim_api_test.py`.
(`pytest` can be installed via `pip`)


The API does not have to be complete by next week but it should be something like ca. 50% complete.



## 3) Describe Distributed Workflow


Think about, discuss in your groups, and note down in which way you are going to collaborate using Git in this project.

You should reflect and decide on the following points:

  - Which repository setup will we use?
  - Which branching model will we use?
  - Which distributed development workflow will we use?
  - How do we expect contributions to look like?
  - Who is responsible for integrating/reviewing contributions?
  
Information to at least all of the above points should end up in a markdown document in your main repository (likely called `CONTRIBUTE.md`).

We recommend that you do not rewrite history by rebasing or squashing your commits. The main reason is that it remains visible in the history who did what and when. 


## 4) Preparation for next time

Please [setup the tools needed for the next session](../session_03/README_PREP.md).
