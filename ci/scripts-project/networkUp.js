#!/usr/bin/jjs -fv

load("./scripts-lib/docker.js");
load('./scripts-lib/command.js');

function networkUp() {
    var dockerNetworks = new DockerNetworks();
	dockerNetworks.assureExisists('links');
}