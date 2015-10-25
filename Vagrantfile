$HOSTNAME = "toolbox.dev"
$NAME = "toolbox"
$BOX = "ubuntu/trusty64"
$IP = "10.0.0.50"
$MEMORY = ENV.has_key?('VM_MEMORY') ? ENV['VM_MEMORY'] : "1024"
$CPUS = ENV.has_key?('VM_CPUS') ? ENV['VM_CPUS'] : "1"
$EXEC_CAP = ENV.has_key?('VM_EXEC_CAP') ? ENV['VM_EXEC_CAP'] : "100"
# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  config.vm.hostname = $HOSTNAME
  config.vm.box = $BOX
  config.vm.network :private_network, ip: $IP
  config.ssh.forward_agent = true
  config.vm.synced_folder ".", "/var/www/toolbox/current", type: "nfs"

    config.vm.provider "virtualbox" do |v|
        v.name = $NAME
        v.customize ["modifyvm", :id, "--cpuexecutioncap", $EXEC_CAP]
        v.customize ["modifyvm", :id, "--memory", $MEMORY]
        v.customize ["modifyvm", :id, "--cpus", $CPUS]
    end

    config.vm.provision "ansible" do |ansible|
          ansible.playbook = "devops/provisioning/playbook.yml"
          ansible.limit = "all"
          ansible.inventory_path = "devops/provisioning/hosts/vagrant"
          ansible.verbose = "v"
    end

end
