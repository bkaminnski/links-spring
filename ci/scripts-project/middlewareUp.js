#!/usr/bin/jjs -fv

load("./scripts-lib/docker.js");
load('./scripts-lib/command.js');

function middlewareUp() {
	new Command('../sources/services/core/parent/', 'mvn install').execute();

	var dockerImages = new DockerImages();
	var dockerContainers = new DockerContainers();

	buildAndRun('eureka', '../sources/services/core/eureka/service/', 8761, 128);
	buildAndRun('application', '../sources/services/core/application/service/', 8001, 128);
	buildAndRun('menu-and-content', '../sources/services/core/menu-and-content/service/', 8002, 64);
	buildAndRun('about', '../sources/services/core/about/service/', 8003, 64);
	buildAndRun('unique-ids', '../sources/services/core/unique-ids/service/', 8004, 64);
	buildAndRun('links', '../sources/services/links/links/service/', 8011, 64);
	buildAndRun('urls', '../sources/services/links/urls/service/', 8012, 128, '--spring.datasource.password=urls');
	buildAndRun('descriptions', '../sources/services/links/descriptions/service/', 8013, 128, '--spring.datasource.password=descriptions');
	buildAndRun('keywords', '../sources/services/links/keywords/service/', 8014, 128, '--spring.datasource.password=keywords');

	function buildAndRun(serviceName, serviceDir, port, memoryMegabytes, serviceParameters) {
		dockerImages.build(serviceDir, serviceName + '-service', '', function () {
			new Command(serviceDir, 'mvn clean install').execute();
		});
		dockerContainers.run(serviceName + '-service',
			'-p ' + port + ':' + port +
			' --env JMX_PORT=1' + port + ' -p 1' + port + ':1' + port +
			' --env DEBUG_PORT=2' + port + ' -p 2' + port + ':2' + port +
			' --network links' +
			' --env MEMORY_OPTS=-Xmx' + memoryMegabytes + 'm ' +
			serviceName + '-service ' + serviceParameters
		);
	}
}