Open a terminal and execute the following commands one after another and inspect the output and inspect the corresponding Python files.


```bash
$ cd ~/Desktop/flask-minitwit-mongodb

$ python inspect_git_object1.py

$ python inspect_git_object2.py

$ git ls-tree HEAD

$ python inspect_git_object3.py

$ git cat-file -p eed3e6e7dfe575f006667a19f0c1857fca9e5ce2 | head
```