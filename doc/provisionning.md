Provisioning
============

Provisioning setting
--------------------
You will need [ansible](http://docs.ansible.com/intro_installation.html#latest-releases-via-apt-ubuntu) to run the provisioning.

Register your SSH Key
---------------------

To access to your vitual machine, you need to push your ssh public key.

```
cd devops/provisionning/roles/ssh-keys/files
```

Create a _authorized_keys_ file and push your ssh public key




Provision local virtual machine
-------------------------------
Use the following command on your **host machine**:

```
vagrant provision
```
