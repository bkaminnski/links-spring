#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts/command.js');

new Command('../sources/services/links/descriptions/service/', 'mvn clean install').execute();
new Command('.', 'docker-compose rm -sf descriptions-service').execute();
new Command('.', 'docker-compose up -d --build descriptions-service').execute();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');

new Command('.', 'docker-compose logs -f descriptions-service').execute();