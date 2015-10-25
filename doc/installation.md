Installation
============

Required
--------

* [Vagrant](https://www.vagrantup.com/)
* [Ansible](http://www.ansible.com/)
* [VirtualBox](https://www.virtualbox.org/)
* [Yo](http://yeoman.io/)
* [Ruby Gems](https://rubygems.org/)
* [Compass](https://rubygems.org/gems/compass/)


Install your dev environment
----------------------------

To init your project :

    git clone git@github.com:condenastfr/Yeoman-angular-loopback-generator.git
    vagrant up
    
Then, install your npm dependencies on your guest machine:

    vagrant ssh
    cd /var/www/toolbox/current
    npm install

You will need to add Gigya keys as well; they are not commited for security reasons. Copy the file src/config.json.sample to src/config.json with the adequate values.

Then, start the server on your guest machine as www-data:

    sudo su www-data
    npm start

Test your dev environment
-------------------------
    
You can know test the api by running the test on your guest machine :

    npm test
