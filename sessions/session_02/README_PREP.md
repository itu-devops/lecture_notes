# Preparation Material for Session 02


## Version Control with Git

In case you did not configure your Git installation already, do so as described in [First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

In particular, configure your username, email address, and command line editor:

```bash
$ git config --global user.name "<Your Name>"
$ git config --global user.email <yourname>@itu.dk
```

In case you are not into using VI as editor, you might want to choose `nano`

```bash
$ git config --global core.editor nano
```

  * If you are rusty with basic Git concepts, like adding files to version control, viewing your commit history, undoing changes, etc., you might want to check chapter [2. Git Basics](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) from the Pro Git book.
  * Please read the following four sub-chapters of chapter [3. Git Branching on Git branches](https://git-scm.com/book/en/v2/)
    - [Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
    - [Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
    - [Branch Management](https://git-scm.com/book/en/v2/Git-Branching-Branch-Management)
    - [Remote Branches](https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches)
  * To allow for a better understanding of why Git works the way it does read on [Git objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)

-------------------------------

## Setup Docker

Install Docker and Docker Compose to your computer.


### Docker

Install Docker as for example like this:



```bash
sudo apt-get update
sudo apt install -y docker.io
```

Check if the Docker engine is up and running:

```bash
sudo systemctl status docker
```

To be able to run docker commands as your current user, it has to be added to the respective group.

```bash
sudo usermod -aG docker ${USER}
```

With the following, double check that your user is in the `docker` group.

```bash
su - ${USER}
id -nG
exit
```

The above is adapted from the official documentation: https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository


### Docker Compose

```bash
sudo apt install -y docker-compose
```

