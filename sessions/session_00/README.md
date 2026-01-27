## Preparation

Remember to backup your data before starting the installation process and in particular resizing your partitions! Also double check values before repartitioning!

The following links are exemplary guides, you might find others that are more suitable to your personal setup.

## Installing Linux (Pop!_OS) on Harddisk

* Download the OS from https://pop.system76.com/
* Follow the official installation instructions: https://support.system76.com/articles/install-pop

In case you install Pop!_OS or any similar Linux on you Laptop and you want to connect to ITU's WiFi and Eduroam network, do the following:

* Navigate to: itu.dk/wireless
* click "Choose another installer to download"
* click on the "Linux" button
* On the pop-up saying: "Please use your ITU email address as username." click "Continue"
* Download the file `eduroam-linux-IUoC-All_users.py`
* Transfer that file to your Linux computer
* Open a terminal and run `python3 eduroam-linux-IUoC-All_users.py`
* Use your full email address as userid when prompted

The process above installs the necessary certificates on your computer.


## Installing Linux on Harddisk (Windows Dual Boot)

In case you want to install a Linux next to an existing Windows, the following links might provide helpful information

* https://blnlabs.com/dual-boot-pop-os-and-windows-10/
* https://www.tecmint.com/install-ubuntu-alongside-with-windows/
* https://vitux.com/how-to-install-ubuntu-18-04-along-with-windows-10/


## Installing Linux on Harddisk (MacOS Dual Boot)

* For older Intel-based Macs without Touchbar: https://www.maketecheasier.com/install-dual-boot-ubuntu-mac/
* For Intel-based Macs with Touchbar:
  * First check if the Wifi card of your model is supported:
https://github.com/Dunedan/mbp-2016-linux#wi-fi
  * If yes: https://apple.stackexchange.com/a/375863
  * If not, either:
    *  Install in a Virtual Machine (see below), or
    * Install on another old computer that you can use for this course.
* For Macs with M1/M2 processor:
  * The only Linux distribution that runs natively on "Apple Silicon" is [Asahi Linux](https://asahilinux.org/)
  * Their installer that is linked from the front-page installs Asahi Linux next to MacOS


## Installing Linux on USB Key instead of Harddisk

In case you do not want to install another operating system on your computer's harddisk but on an external drive, follow these instructions: http://ubuntuhandbook.org/index.php/2014/11/install-real-ubuntu-os-usb-drive/

## Installing Linux as Virtual Machine

In case non of the above options of installing Linux are an option for you, you might want to install Linux in a Virtual Machine (VM).
In lecture three, we will talk more about virtualization.
Some of the examples in this lecture will likely not work in a Linux VM.
However, the rest of the course contents should work in a VM


### VirtualBox (for both macOS and Windows)
  * https://support.system76.com/articles/install-in-vm/
  * Since 2024, VirtualBox [should work](https://blogs.oracle.com/virtualization/oracle-virtualbox-710) on "Apple Silicon" Macs

### UTM (for macOS)

UTM is a frontend for qemu, which also allows to emulate an x86 computer.
* Install [UTM](https://mac.getutm.app/)
* Install a virtual machine with Ubuntu for ARM: https://docs.getutm.app/guides/ubuntu/

### VMware Fusion (for macOS "Apple Silicon")

VMware Fusion is a hypervisor for the macOS operating system, and is [offered as a free service](https://blogs.vmware.com/cloud-foundation/2024/11/11/vmware-fusion-and-workstation-are-now-free-for-all-users/).

  * Download the VMware Fusion 13.x https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion
  * You have to create an account on the Broadcom homepage.
  * If in doubt, follow this video: https://www.youtube.com/watch?v=V8M6zgVBtbo
