#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts/command.js');

new Command('../sources/services/links/urls/service/', 'mvn clean install').execute();
new Command('.', 'docker-compose rm -sf urls-service').execute();
new Command('.', 'docker-compose up -d --build urls-service').execute();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');

new Command('.', 'docker-compose logs -f urls-service').execute();