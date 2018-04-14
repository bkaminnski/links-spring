#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts/command.js');

new Command('../sources/services/core/unique-ids/service/', 'mvn clean install').execute();
new Command('.', 'docker-compose rm -sf unique-ids-service').execute();
new Command('.', 'docker-compose up -d --build unique-ids-service').execute();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');

new Command('.', 'docker-compose logs -f unique-ids-service').execute();