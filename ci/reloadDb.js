#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts-project/databaseUp.js');

new Command('.', 'docker rmi urls-flyway').execute();
new Command('.', 'docker rmi flyway-configured').execute();
new Command('.', 'docker rm -f postgres-configured').execute();
new Command('.', 'docker rmi postgres-configured').execute();

databaseUp();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');