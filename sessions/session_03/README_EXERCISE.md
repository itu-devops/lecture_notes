# Exercises

<img src="https://media.giphy.com/media/13GIgrGdslD9oQ/giphy.gif" width=50%/>


## A deeper dive into Vagrant with a **remote** development scenario

  - To make this example work properly, you have to have a pair of SSH keys. In case you do not have them set up yet see [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-1804) for how to do this.

  - It is assumed that your SSH keys are located in your home directory in the hidden directory `~/.ssh/id_rsa`. In case you have them stored somewhere else, you have to modify the line `config.ssh.private_key_path = '~/.ssh/id_rsa'` in the below Vagrant file accordingly.
  - You have to be registered at DigitalOcean (remember to use your free credit from the Github education pack)
  - [Your public key has to be registered at DigitalOcean](https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/to-account/)

  - Additionally, you have to have two environment variables set. One `$SSH_KEY_NAME` which is the name of the key that you have registered at DigitalOcean's homepage. Furthermore, the `Vagrantfile` assumes that you have set the environment variable `$DIGITAL_OCEAN_TOKEN` to the API token, which you receive from DigitalOcean, see [this tutorial](https://www.digitalocean.com/docs/api/create-personal-access-token/)

  - Lastly, you need to have the DigitalOcean Vagrant Provider installed. If you have not yet:

```bash
$ vagrant plugin install vagrant-digitalocean
```

Now, switch to the `VMify_remote` branch of the example repository and see if everything starts up correctly


```bash
$ git clone https://github.com/itu-devops/flask-minitwit-mongodb.git
$ cd flask-minitwit-mongodb
$ git checkout VMify_remote
$ rm -r .vagrant/
$ vagrant up
==> webserver: Running action triggers before up ...
==> webserver: Running trigger...
==> webserver: Waiting to create server until dbserver's IP is available.
==> dbserver: Using existing SSH key: ITU
==> dbserver: Creating a new droplet...
...
```

While waiting, make sure you understand the `Vagrantfile` for remote deployment.
In case you are in doubt about anything check the [brief and really good documentation](https://www.vagrantup.com/docs/).
In particular, make sure to understand how the VMs are created in order (first `dbserver` and then `webserver`).



## Getting accustomed using `Vagrantfile`s

  * Take the local development scenario from https://github.com/HelgeCPH/flask-minitwit-mongodb/tree/VMify_local (branch **`VMify_local`**).
  * Add a third **local** virtual machine with the IP `192.168.20.4`. It will server as a client (give it a corresponding name in the `Vagrantfile`. 
  * Let it be a machine with the same Ubuntu installation. 
  * On it, install via the machines provision script a text-based browser, such as, `lynx` or `w3m`.
  * After provisioning of the three local VMs, ssh into your client machine.
  * Using the text-based browser connect to http://192.168.20.3:5000

In case you can see the public time line of the _ITU-MiniTwit_ clone.


## Getting accustomed using Docker and Docker Compose

  - Navigate to https://github.com/HelgeCPH/flask-minitwit-mongodb/tree/Containerize (**branch `Containerize`**) and work through the scenario given in the [`README.md`](https://github.com/itu-devops/flask-minitwit-mongodb/tree/Containerize) file.

```bash
$ git clone https://github.com/HelgeCPH/flask-minitwit-mongodb.git
$ cd flask-minitwit-mongodb
$ git checkout Containerize
```
  - Make sure with your group fellows, that you understand what you are doing in every step. If in doubt, explain to each other what you think is going on.

Once done reproducing the given scenario, modify the `docker-compose.yml` file to include another container `clidownload`, which is an instance of the image `appropriate/curl`. It should download all tweets from the web-application as HTML text. If in doubt, consult the lecture notes for inspiration.

