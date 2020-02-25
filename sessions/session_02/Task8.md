Now, in pairs of two,work as one user (`<YourUsername>`) on laptop **A** and another user (`<YourOtherUsername>`) on laptop **B**.


User `<YourUsername>` on laptop **A**:


```bash
$ cd ~/Desktop/itu-minitwit-start

$ cat control.sh

# Edit line 1 of file control.sh to contain interpreter link
$ echo -e '#!/usr/bin/env bash\n\n$(cat control.sh)' > control.sh

$ cat control.sh

$ git diff control.sh

$ git add control.sh
$ git commit -m"Fixed shebang"
$ git push
```



User `<YourOtherUsername>` on laptop **B**:

```bash
$ cd ~/Desktop/my-minitwit-refactoring

$ cat control.sh

$ echo -e '#!/bin/bash\n\n$(cat control.sh)' > control.sh

$ cat control.sh

$ git diff control.sh

$ git add control.sh
$ git commit -m"Fixed interpreter choice"
$ git push
```



## How to incorporate the changes from one another now?

User `<YourUsername>` on laptop **A** (the other user can help you here if you like):


```bash
$ cd ~/Desktop/itu-minitwit-start

$ git remote add myfriend https://github.com/<YourOtherUsername>/my-minitwit-refactoring.git

$ git remote -v

$ git pull myfriend master

$ cat control.sh

$ git status

# Fix the merge conflict either manually for example using the `nano` editor
nano control.sh

# Or alternatively using a corresponding merge tool:
# $ git mergetool --tool=kdiff3

$ git status

$ git add control.sh
$ git commit -m"We decided to choose my shebang"
$ git push
```