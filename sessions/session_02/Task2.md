Open a terminal and execute the following commands one after another and inspect the output.


```bash
$ cd ~/Desktop/flask-minitwit-mongodb

$ git log --pretty=format:'"%h","%an","%ad"' \
    --date=short \
    --numstat

$ git log --pretty=format:'"%h","%an","%ad"' \
    --date=short \
    --numstat \
    | head -1 \
    | cut -d',' -f1

$ tree .git/objects

# Choose a subdirectory that exists for you, `ec` is just an example
$ ls -l .git/objects/ec

# Choose a subdirectory and file that exists for you, the following
# is just an example
$ file .git/objects/ec/e6e11424b1f09cfc2bab1bddfe61dcc6545944

$ cat .git/objects/ec/e6e11424b1f09cfc2bab1bddfe61dcc6545944

$ xxd .git/objects/ec/e6e11424b1f09cfc2bab1bddfe61dcc6545944
```
