Open a terminal and execute the following commands one after another and inspect the output.


```bash
$ cd ~/Desktop/itu-minitwit-start

# Let's build some more branches
git checkout -b control_feature
git add control.sh
git commit -m"Added tool for controlling application"

git checkout master

git add .gitignore
git commit -m"Added ignore patterns"

git log --oneline --decorate
```