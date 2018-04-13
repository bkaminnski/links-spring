#!/usr/bin/jjs -fv

var timeStarted = new Date().getTime();

load('./scripts-project/middlewareUp.js');

middlewareUp();

print('Script finished after ' + (new Date().getTime() - timeStarted) + ' millis');