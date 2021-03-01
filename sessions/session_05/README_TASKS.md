-----------


# Your turn now!

<img src="https://media.giphy.com/media/13GIgrGdslD9oQ/giphy.gif" width=50%/>

  - [The Simulator starts today!](#the-simulator-starts-today)
  - [Software Maintenance](#software-maintenance)
  - [Software Maintenance II](#software-maintenance-ii)


## The Simulator starts today!

The TAs will start the simulator **today** in the exercise session (in between 11:00 and 12:00). 

In case you have not done so yet, send a pull request to `repositories.py` in our central repository: https://github.com/itu-devops/lecture_notes/blob/master/repositories.py!

Only half of the groups have done so yet.

Add two URLs:

  * One to your running applications (edit `"http://<minitwit_application_url>"`)
  * Another one to the simulator API endpoint (edit `"http://<sim_api_url>"`)
  

## DevOps

Consider how much you as a group adhere to the "*Three Ways*" characterizing DevOps (from _"The DevOps Handbook"_): 

  * Flow
  * Feedback
  * Continual Learning and Experimentation

Map what you are doing with regards to each principle. In case you realize you are not doing something for a principle change the way you are working as a group accordingly.


## Software Maintenance 

From now on were are in software maintenance. That is, fix issues of your version of _ITU-MiniTwit_ as soon as possible. Likely, after the simulator is started you will experience some issues in your systems. Just fix them as soon as you realize them.

For example, you will be able to see status and potential errors as the simulator 'sees' them [here](http://138.68.93.2/status.html).

Continue to release (now likely automatically) at least once per week versions of your system with corresponding fixes.

## Software Maintenance II

Check the user interface of another group's _ITU-MiniTwit_ application for functionality. That is, connect via a browser to another group's application and check if the system is working similar to the original _ITU-MiniTwit_, i.e.,

  * Do you see a public timeline?
  * Does the public timeline show messages that the application received from the simulator?
  * Can you create a new user?
  * Can you login as a new user?
  * Can you write a message?
  * After publishing a message, does it appear on you private timeline?
  * Can you follow another user?

In case you find non-functional/erroneous behavior please report it via issues to the respective Github repositories (find them in [`repositories.py`](https://github.com/itu-devops/lecture_notes/blob/master/repositories.py)).

**Do not** send requests to the simulator API of the other group. It is really only meant for the simulator (behave nicely towards the other group!). In case you want to make sure that non of the other groups sends requests to the simulator API of your group, you might want to only accept connections from the simulator server, which has the IP `138.68.93.2`.

Please find which group's user interface you are checking in the list below. Find your own group on the left-hand side and the name of the group your are checking behind the arrow. You will find the URL of the _ITU-MiniTwit_ application from the respective group in file [`repositories.py`](https://github.com/itu-devops/lecture_notes/blob/master/repositories.py) (first of the two given URLs).


### Who checks whom?

#### BSc

  * Group a <Name> -> Group c <Name>
  * Group c <Name> -> Group e _group e_
  * Group e _group e_ -> Group i _??_
  * Group i _??_ -> Group j _Python Kindergarten_
  * Group j _Python Kindergarten_ -> Group k _TheMagicStrings_
  * Group k _TheMagicStrings_ -> Group d _Cool Beans_
  * Group d _Cool Beans_ -> Group a <Name>

#### MSc

  * Group b _b_ -> Group f _Group Fibonacci_
  * Group f _Group Fibonacci_ -> Group g _Group G_
  * Group g _Group G_ -> Group h _Neutral_
  * Group h _Neutral_ -> Group l _AJKPT_
  * Group l _AJKPT_ -> Group b _b_