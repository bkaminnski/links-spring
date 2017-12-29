#!/usr/bin/jjs -fv

load("./scripts-lib/docker.js");
load('./scripts-lib/command.js');

function middlewareUp() {
	new Command('../sources/services/core/parent/', 'mvn install').execute();

	var dockerImages = new DockerImages();
	dockerImages.build('../sources/services/core/eureka/service/', 'eureka-service', '', function () {
		new Command('../sources/services/core/eureka/service/', 'mvn clean install').execute();
	});
	dockerImages.build('../sources/services/core/application/service/', 'application-service', '', function () {
		new Command('../sources/services/core/application/service/', 'mvn clean install').execute();
	});
	dockerImages.build('../sources/services/links/urls/service/', 'urls-service', '', function () {
		new Command('../sources/services/links/urls/service/', 'mvn clean install').execute();
	});
	dockerImages.build('../sources/services/core/menu-and-content/service/', 'menu-and-content-service', '', function () {
		new Command('../sources/services/core/menu-and-content/service/', 'mvn clean install').execute();
	});
	dockerImages.build('../sources/services/core/about/service/', 'about-service', '', function () {
		new Command('../sources/services/core/about/service/', 'mvn clean install').execute();
	});

	var dockerContainers = new DockerContainers();
	dockerContainers.run('eureka-service', '-p 8761:8761 --network links eureka-service');
	dockerContainers.run('application-service', '-p 8001:8001 --network links application-service');
	dockerContainers.run('urls-service', '-p 8002:8002 --network links urls-service --spring.datasource.password=urls');
	dockerContainers.run('menu-and-content-service', '-p 8003:8003 --network links menu-and-content-service');
	dockerContainers.run('about-service', '-p 8004:8004 --network links about-service');
}