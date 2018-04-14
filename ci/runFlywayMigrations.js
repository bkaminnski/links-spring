#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts/command.js');

var containers = 'urls-flyway descriptions-flyway keywords-flyway';

new Command('.', 'docker-compose kill ' + containers).execute();
new Command('.', 'docker-compose rm -f ' + containers).execute();
new Command('.', 'docker-compose up -d --build ' + containers).execute();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');

new Command('.', 'docker-compose logs -f ' + containers).execute();