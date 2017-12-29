#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts-project/middlewareUp.js');

new Command('.', 'docker rm -f menu-and-content-service').execute();
new Command('.', 'docker rmi menu-and-content-service').execute();

middlewareUp();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');

new Command('.', 'docker logs -f menu-and-content-service').execute();