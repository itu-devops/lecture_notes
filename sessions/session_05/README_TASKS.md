-----------


# Your turn now!

<img src="https://media.giphy.com/media/13GIgrGdslD9oQ/giphy.gif" width=50%/>

  - [The Simulator starts today!](#the-simulator-starts-today)
  - [DevOps](#devops)
  - [Complete and polish your _ITU-MiniTwit_ implementation](#Complete-and-polish-your-ITU-MiniTwit-implementation)
  - [Software Maintenance](#software-maintenance)


## The Simulator starts today!

We will start the simulator **today** in the exercise session (in between 13:00 and 14:00).

In case you have not done so yet, send a pull request to `repositories.py` in our central repository: https://github.com/itu-devops/lecture_notes/blob/master/repositories.py!

Add two URLs:

  * One to your running applications (edit `"http://<minitwit_application_url>"`)
  * Another one to the simulator API endpoint (edit `"http://<sim_api_url>"`)


## DevOps

Consider how much you as a group adhere to the "*Three Ways*" characterizing DevOps (from _"The DevOps Handbook"_):

  * Flow
  * Feedback
  * Continual Learning and Experimentation

Map what you are doing with regards to each principle.
In case you realize you are not doing something for a principle change the way you are working as a group accordingly.


## Complete and polish your _ITU-MiniTwit_ implementation

Likely, your implementations are not complete yet.
They lack some features that were present in the version that you took over, or you have some features that you would like to add.

### a) Add missing features

Add missing features continuously from now on and during the following week.

### b) Introduce a DB abstraction layer in your _ITU-MiniTwit_.

Introduce a DB abstraction layer so that you do not directly communicate with the DB anymore.
That is, you should not have any SQL queries in your main application anymore after this refactoring.
Instead introduce for example an Object-relational mapping (ORM) framework to your application so that you decouple it from the actual DBMS.


## Software Maintenance

From now on we are in software maintenance. That is, fix issues of your version of _ITU-MiniTwit_ as soon as possible. Likely, after the simulator is started you will experience some issues in your systems. Just fix them as soon as you realize them.

For example, you will be able to see status and potential errors as the simulator 'sees' them [here](http://164.92.243.132/status.html).

Continue to release (now likely automatically) whenever new features and bug-fixes are ready (least once per week).
