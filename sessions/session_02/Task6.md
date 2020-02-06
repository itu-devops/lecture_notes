Open a terminal and execute the following commands one after another and inspect the output.


```bash
$ cd ~/Desktop/itu-minitwit-start

$ cd ~/Desktop/itu-minitwit-start
$ git log --oneline --decorate
$ git checkout flag_feature
$ git merge control_feature

$ git checkout master
$ git merge flag_feature

$ git checkout -b complete_flag_feature
$ git add minitwit_flagging_support.patch PATCHME.md
$ git commit -m"Added patch to complete the flagging feature in Python code"

$ patch minitwit.py < minitwit_flagging_support.patch
$ git diff minitwit.py


$ git add minitwit.py
$ git rm minitwit_flagging_support.patch
$ git commit -m"Merged patch to complete the flagging feature in Python code"

$ git checkout master
$ git merge complete_flag_feature

$ git branch --list
$ git branch --no-merged  # Shows nothing as everything is merged
```