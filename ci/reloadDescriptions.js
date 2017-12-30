#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts-project/middlewareUp.js');

new Command('.', 'docker stop descriptions-service').execute();
new Command('.', 'docker rm descriptions-service').execute();
new Command('.', 'docker rmi descriptions-service').execute();

middlewareUp();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');

new Command('.', 'docker logs -f descriptions-service').execute();