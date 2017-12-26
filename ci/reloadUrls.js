#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts-project/middlewareUp.js');

new Command('.', 'docker rm -f urls-service').execute();
new Command('.', 'docker rmi urls-service').execute();

middlewareUp();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');