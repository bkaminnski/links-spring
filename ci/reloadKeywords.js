#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts-project/middlewareUp.js');

new Command('.', 'docker stop keywords-service').execute();
new Command('.', 'docker rm keywords-service').execute();
new Command('.', 'docker rmi keywords-service').execute();

middlewareUp();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');

new Command('.', 'docker logs -f keywords-service').execute();