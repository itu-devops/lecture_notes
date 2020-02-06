For today's session we need some software, which you can install as in the following

```bash
sudo apt install -y tree
sudo apt install -y kdiff3
sudo apt install -y graphviz
```


Open a terminal and execute the following commands one after another and inspect the output.


```bash
$ git clone https://github.com/HelgeCPH/flask-minitwit-mongodb.git ~/Desktop/flask-minitwit-mongodb

$ cd ~/Desktop/flask-minitwit-mongodb

$ git log | head -50

$ git log --pretty=format:'"%h","%an","%ad"' \
    --date=short \
    --numstat

$ git cat-file -p HEAD

$ git ls-tree HEAD
```

