-----------


# Your turn now!

<img src="https://media.giphy.com/media/13GIgrGdslD9oQ/giphy.gif" width=50%/>

  - [1) Refactor _ITU-MiniTwit_ to another language and technology of your choice.](#1-refactor-itu-minitwit-to-another-language-and-technology-of-your-choice)
  - [2) Containerize _ITU-MiniTwit_ with Docker.](#2-containerize-itu-minitwit-with-docker)
  - [3) Preparation for next time](#3-preparation-for-next-time)



## 1) Refactor _ITU-MiniTwit_ to another language and technology of your choice.

Now that you know more or less how _ITU-MiniTwit_ is working, your task is to evolve it away from from a Python/Flask application to the language and web framework of your choice.
Prepare a new *release* with a first version of your rewritten version of your _ITU-MiniTwit_ latest by **Thursday, Feb. 15th, at 22:00**)

Use your programming-fu and not your Google-fu!
First, you will learn the most by doing so and second, we will setup and continuously run a copy-and-paste detection (CPD) tool that compares your systems to those of the other groups and last year's groups ;).


### **OBS: Do not do the big rewrite!**

  - Do **not** perform the "big rewrite" yet.
    That is, try to create a one-to-one copy of what you currently have in `minitwit.py`.
    If you want to, reuse the `static` artifacts, and `templates`.
    However, your new application shall have the same features as the current _ITU-MiniTwit_.
  - That is, do not reimplement the application in Django, Ruby on Rails, ASP.Net Blazor, etc.
    - You have to have a working _ITU-MiniTwit_ by next week.
    - A big rewrite is not feasible in this time.


### Considerations for refactoring strategy:

  - Map the current features of _ITU-MiniTwit_ before refactoring.
  - The test suite in `refactored_minitwit_tests.py` should pass for your refactored application too.
    Likely, you have to modify the setup method slightly so that it points to your application.
    However, all test methods of the API tests should pass on your refactored application.
    - You can execute these tests with `pytest refactored_minitwit_tests.py`
    - The test suite expects you refactored application to be accessible at http://localhost:5000.
      Change that URL if necessary.
  - For now, **do not** refactor the test suite!
    First refactor your application.
    Once your new application is passing the tests, refactor the test suite to your language/framework of choice.
    Then, to double check, you also execute these tests against the original _ITU-MiniTwit_ application.
  - Rewrite the application in mini-steps at a time.
    - For example, a very first step could be: Given a database, I want to show the public timeline.
    - A second step could then be: I want to be able to see the public timeline of one user.
    - ...
  - Perhaps it is a good strategy to proceed end-point by end-point.


### Considerations for choice of language/technology stack:

  - Either choose a language that you know and want to practice (likely Java and C♯)
  - or choose a language and framework that you always wanted to learn but never had the time to do so.

Likely, the first option is appropriate for BSc students and the second option for MSc students.

If I were in your position, I would consider one of the following:

  - [Nim](https://nim-lang.org) with [Jester](https://github.com/dom96/jester)
  - [Go](http://golang.org/) with only the standard library or with [Gorilla](http://www.gorillatoolkit.org/)
  - [Crystal](https://crystal-lang.org) with [Kemal](https://kemalcr.com)
  - [Elixir](https://elixir-lang.org) with [Phoenix](https://www.phoenixframework.org)
  - [Ruby](https://www.ruby-lang.org) with [Sinatra](http://sinatrarb.com/)

In case you choose Python as your implementation language you have to build a solution that **does not** rely on the Flask framework.


### OBS: BSc students who took BDSA 2023

If you want to, you can continue to work on your _Chirp!_ system from last semester.
In case you do so, you have to refactor it as in the following:

  - Remove the "login via GitHub" functionality.
  - Add instead login functionality as in the original _ITU-MiniTwit_ application.
    That is, use HTTP Session cookies to handle if a user is logged into your system.
  - Likely, [this documentation](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/app-state?view=aspnetcore-8.0) helps you to get started.


### OBS: MSc students

Remember to log and provide good arguments for the choice of programming language and framework.
Likely, a feature mapping/comparison or a mini-benchmark is a good choice.


## Guidelines for using AI code assistants like GitHub Copilot, ChatGPT, etc.

In case you use AI code assistants, you have to do the following:

  - Check that what these systems suggest you to do is in line with what you actually want to do.
  - Add `GitHub Copilot`, `ChatGPT`, etc. as co-author to all commits in which you incorporate their work.
    See [this documentation](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors) for how to do it.
  - Please keep a log with your experiences of using such systems and share your experiences with us.


## 2) Containerize _ITU-MiniTwit_ with Docker

For your refactoring work, use Docker.
That is, create respective Dockerfiles (and if needed yet Docker Compose files) in your repository.
These containerize your application and allow all team members to develop your application in a uniform environment.


## 3) Preparation for next time

Please [setup the tools needed for the next session](../session_03/README_PREP.md).
