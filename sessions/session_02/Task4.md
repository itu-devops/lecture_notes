Open a terminal and execute the following commands one after another and inspect the output.


```bash
$ mkdir ~/Desktop/itu-minitwit-start
$ cd ~/Desktop/itu-minitwit-start
$ wget https://github.com/itu-devops/2020-spring/raw/master/sessions/session_02/Initial%20sources.zip
$ unzip Initial\ sources.zip

# We just create a commit with some of the basic files:
$ git init

$ git add templates/*
$ git add static/*
$ git add minitwit.py minitwit_tests.py
$ git add README

$ git commit -m"Initial commit of MiniTwit code artifacts"

# How many branches are there?
$ git branch --list --all


$ git branch flag_feature 

# Still on the master branch, see with:
$ git log --oneline --decorate

# Switch to the new branch:
$ git checkout flag_feature

$ git log --oneline --decorate

# Let's commit some work to this new branch
$ git add flag_tool.c
$ git commit -m"Added code for flagging tool"

$ git add Makefile
$ git commit -m"Added build code for flagging tool"

$ git log
```
