#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts/command.js');

new Command('../sources/services/core/parent/', 'mvn install').execute();
new Command('../sources/services/core/eureka/service/', 'mvn clean install').execute();
new Command('../sources/services/core/application/service/', 'mvn clean install').execute();
new Command('../sources/services/core/menu-and-content/service/', 'mvn clean install').execute();
new Command('../sources/services/core/about/service/', 'mvn clean install').execute();
new Command('../sources/services/core/unique-ids/service/', 'mvn clean install').execute();
new Command('../sources/services/links/links/service/', 'mvn clean install').execute();
new Command('../sources/services/links/urls/service/', 'mvn clean install').execute();
new Command('../sources/services/links/descriptions/service/', 'mvn clean install').execute();
new Command('../sources/services/links/keywords/service/', 'mvn clean install').execute();

new Command('./', 'docker-compose up -d').execute();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');

new Command('./', 'docker-compose logs -f').execute();