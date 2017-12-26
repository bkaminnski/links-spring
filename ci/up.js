#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts-project/networkUp.js');
load('./scripts-project/databaseUp.js');
load('./scripts-project/middlewareUp.js');

networkUp();
databaseUp();
middlewareUp();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');