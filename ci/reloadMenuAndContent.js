#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts/command.js');

new Command('../sources/services/core/menu-and-content/service/', 'mvn clean install').execute();
new Command('.', 'docker-compose rm -sf menu-and-content-service').execute();
new Command('.', 'docker-compose up -d --build menu-and-content-service').execute();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');

new Command('.', 'docker-compose logs -f menu-and-content-service').execute();