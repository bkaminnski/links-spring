#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts-project/middlewareUp.js');

new Command('.', 'docker stop unique-ids-service').execute();
new Command('.', 'docker rm unique-ids-service').execute();
new Command('.', 'docker rmi unique-ids-service').execute();

middlewareUp();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');

new Command('.', 'docker logs -f unique-ids-service').execute();