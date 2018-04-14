#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts/command.js');

new Command('../sources/services/core/eureka/service/', 'mvn clean install').execute();
new Command('.', 'docker-compose rm -sf eureka-service').execute();
new Command('.', 'docker-compose up -d --build eureka-service').execute();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');

new Command('.', 'docker-compose logs -f eureka-service').execute();