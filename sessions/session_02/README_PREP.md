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
  * Please read the following four subchapters of chapter [3. Git Branching on Git branches](https://git-scm.com/book/en/v2/)
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
sudo apt update
sudo apt-get install ca-certificates url gnupg lsb-release
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg


echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

sudo systemctl status docker
sudo usermod -aG docker ${USER}
su - ${USER}
id -nG
```

The above is adapted from the official documentation: https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository


### Docker Compose

```bash
sudo apt install docker-compose
```

