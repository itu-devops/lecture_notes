Now, in pairs of two, create one repository on Github each. One should be called `itu-minitwit-start` and be created by one user (`<YourUsername>`). The other repository should be called `my-minitwit-refactoring` and be created by **another** user (`<YourOtherUsername>`).


User `<YourUsername>` on laptop **A**:

```bash
$ cd ~/Desktop/itu-minitwit-start

$ git remote add origin https://github.com/<YourUsername>/itu-minitwit-start.git
$ git push -u origin master

# Check that there is only one remote branch. Push the others too
$ git push -u origin master

$ git remote -v

# Check that there is only one remote branch.
$ git branch --list --all
$ git branch --list --remote
```


User `<YourOtherUsername>` on laptop **B**:

```bash
$ cd ~/Desktop/
$ cp -r itu-minitwit-start my-minitwit-refactoring

$ cd ~/Desktop/my-minitwit-refactoring

$ git remote add origin https://github.com/<YourOtherUsername>/my-minitwit-refactoring.git
$ git push -u origin master

$ git remote -v

# Check that there is only one remote branch.
$ git branch --list --all
$ git branch --list --remote
```