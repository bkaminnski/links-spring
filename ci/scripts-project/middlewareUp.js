#!/usr/bin/jjs -fv

load("./scripts-lib/docker.js");
load('./scripts-lib/command.js');

function middlewareUp() {
	var dockerImages = new DockerImages();
	dockerImages.build('../sources/services/links/urls/service', 'urls-service', '', function () {
		new Command('../sources/services/links/urls/service/', 'mvn clean install').execute();
	});

	var dockerContainers = new DockerContainers();
	dockerContainers.run('urls-service', '-p 8080:8080 --network links urls-service --spring.datasource.password=urls');
}