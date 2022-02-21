#!/usr/bin/env bash

MACHINENAME=$1

# Download debian.iso
if [ ! -f ./debian.iso ]; then
    wget https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-11.2.0-amd64-netinst.iso -O debian.iso
fi

#Create VM
VBoxManage createvm --name "$MACHINENAME" --ostype "Debian_64" --register --basefolder "$(pwd)"
#Set memory and network
VBoxManage modifyvm "$MACHINENAME" --ioapic on
VBoxManage modifyvm "$MACHINENAME" --memory 1024 --vram 128
VBoxManage modifyvm "$MACHINENAME" --nic1 nat
#Create Disk and connect Debian Iso
VBoxManage createhd --filename "$(pwd)"/"$MACHINENAME"/"$MACHINENAME_DISK".vdi --size 80000 --format VDI
VBoxManage storagectl "$MACHINENAME" --name "SATA Controller" --add sata --controller IntelAhci
VBoxManage storageattach "$MACHINENAME" --storagectl "SATA Controller" --port 0 --device 0 --type hdd --medium  "$(pwd)"/"$MACHINENAME"/"$MACHINENAME_DISK".vdi
VBoxManage storagectl "$MACHINENAME" --name "IDE Controller" --add ide --controller PIIX4
VBoxManage storageattach "$MACHINENAME" --storagectl "IDE Controller" --port 1 --device 0 --type dvddrive --medium "$(pwd)"/debian.iso
VBoxManage modifyvm "$MACHINENAME" --boot1 dvd --boot2 disk --boot3 none --boot4 none

#Enable RDP
VBoxManage modifyvm "$MACHINENAME" --vrde on
VBoxManage modifyvm "$MACHINENAME" --vrdemulticon on --vrdeport 10001

#Start the VM
VBoxHeadless --startvm "$MACHINENAME"