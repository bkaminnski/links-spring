#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts-project/middlewareUp.js');

new Command('.', 'docker stop eureka-service').execute();
new Command('.', 'docker rm eureka-service').execute();
new Command('.', 'docker rmi eureka-service').execute();

middlewareUp();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');

new Command('.', 'docker logs -f eureka-service').execute();