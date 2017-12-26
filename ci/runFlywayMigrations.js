#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts-project/databaseUp.js');

new Command('.', 'docker rmi urls-flyway').execute();

runFlywayMigrations();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');