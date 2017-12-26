#!/usr/bin/jjs -fv

load("./scripts-lib/docker.js");
load('./scripts-lib/command.js');

function databaseUp() {
	buildPostgresConfigured();
	runPostgresConfigured();
}

function buildPostgresConfigured() {
	var dockerImages = new DockerImages();
	dockerImages.build('./docker/postgres-configured', 'postgres-configured');
}

function runPostgresConfigured() {
	var dockerContainers = new DockerContainers();
	var preDockerRun = null;
	var postDockerRun = function () {
		waitForPostgresConfigured(dockerContainers);
		runFlywayMigrations();
	}
	dockerContainers.run('postgres-configured', '-p 5432:5432 -e POSTGRES_PASSWORD=postgres --network links --network-alias urls-database postgres-configured', preDockerRun, postDockerRun);
	waitForPostgresConfigured(dockerContainers);
}

function waitForPostgresConfigured(dockerContainers) {
	dockerContainers.waitFor('postgres-configured', 'database system is ready to accept connections');
}

function runFlywayMigrations() {
	buildFlywayConfigured();
	buildFlywayMigrations();
	new Command('./', 'docker run --rm --network links urls-flyway -url=jdbc:postgresql://urls-database:5432/urls -user=urls -password=urls migrate').execute();
}

function buildFlywayConfigured() {
	var dockerImages = new DockerImages();
	dockerImages.build('./docker/flyway-configured', 'flyway-configured');
}

function buildFlywayMigrations() {
	var dockerImages = new DockerImages();
	dockerImages.build('../sources/services/links/urls/flyway', 'urls-flyway');
}