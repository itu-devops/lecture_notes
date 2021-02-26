-----------


# Your turn now!

<img src="https://media.giphy.com/media/13GIgrGdslD9oQ/giphy.gif" width=50%/>

  - [1) Complete implementing an API for the simulator in your ITU-MiniTwit.](#1\)-Complete-implementing-an-API-for-the-simulator-in-your-ITU-MiniTwit.)
  - [2) Continue refactoring of your ITU-MiniTwit.¶](#2\)-Continue-refactoring-of-your-ITU-MiniTwit.)
  - [3) Log dependencies of your ITU-MiniTwit.](#3\)-Log-dependencies-of-your-ITU-MiniTwit.)


## 1) Complete implementing an API for the simulator in your _ITU-MiniTwit_.


Next week, we will start a simulator that will run until the end of this course. It will simulate users using your micro-blogging platform.

You can find the specification for the simulator API in 
`API Spec/minitwit_sim_api.py`. **OBS**: your applications have to:

  - provide the same end points (on different hosts of course and potentially different ports),
  - ingest the same HTTP requests, i.e., GETs and POSTs as specified with the same parameters and payloads as provided,
  - provide at least the same HTTP status codes in response as specified.
  
  
The `API Spec/minitwit_sim_api.py` depends on your refactored `minitwit.py` from the homework two weeks ago.

A corresponding test (`API Spec/minitwit_sim_api_test.py`) illustrates how the simulator requests will be formed. You can inspect it and run it via `pytest minitwit_sim_api_test.py`. 

Next to the unit test, there is a small program with some more test data, which is similar to the simulator program that will run against your systems. It is located in `API Spec/minitwit_simulator.py` and can be run via:

```bash
$ python minitwit_simulator.py http://localhost:5001
```

where the argument `http://localhost:5001` has to be replaced with the URL of where you simulator API is running. In case this simulator test does not log any errors, you should be all fine for next week. If errors are logged, you have to likely fix the corresponding issue either in your implementation of the simulator API or in the implementation of your version of _ITU-MiniTwit_.

**OBS**: We are talking about an API specification here. It is completely up to you how you integrate this into your systems. That is, that the program in `API Spec/minitwit_sim_api.py` interacts directly with the database is only for illustration. It does not mean that the API has to be implemented like that in your systems!


## 2) Continue refactoring of your _ITU-MiniTwit_.

Continue refactoring of your version of _ITU-MiniTwit_ with the features of your liking.

### a) Introduce a DB abstraction layer in your _ITU-MiniTwit_.

Introduce a DB abstraction layer so that you do not directly communicate with the DB anymore. That is, you should not have any SQL queries in your main application anymore after this refactoring. Instead introduce for example an Object-relational mapping (ORM) framework to your application so that you decouple it from the actual DBMS.

While doing so, you might consider moving away from SQLite as your DBMS and choose a different one according to your liking.

**OBS MSc students**: Remember to log and provide good arguments for the choice of ORM framework and chosen DBMS. 

### b) Release and deploy your _ITU-MiniTwit_.

Prepare a new release with the refactored version of your _ITU-MiniTwit_ latest by **Sunday Feb 21th, at 22:00**)

Additionally, deploy that version (the one in the release) of your _ITU-MiniTwit_ to a remote ("cloud") server. You might want to deploy to DigitalOcean, from where you get free credits from the Github education pack. For that, you might want to start with the exercise from the demo in the lecture, see [A deeper dive into Vagrant with a remote development scenario](#A-deeper-dive-into-Vagrant-with-a-remote-development-scenario). **OBS**: The simulator API from the task above is considered part of your _ITU-MiniTwit_.
That is, do not create and provision VMs manually, instead use a corresponding `Vagrantfile` or a similar reproducible setup for that task.

You are free to deploy to whichever Infrastructure as a Service provider of your choice or your own servers. The only requirement is that your deployment is automatically reproducible, i.e., no clicking in UIs required, and that your application is reachable via a public IP/domain.

For development/deployment you may want to use virtualization techniques as discussed in today's lecture.

**OBS MSc students**: Remember to log and provide good arguments for the choice of virtualization techniques and deployment targets.


## 3) Log dependencies of your _ITU-MiniTwit_.

From now on, keep track of your dependencies. That is, all technologies, services, runtime and build-time dependencies should be logged in a corresponding file and/or visualization.
