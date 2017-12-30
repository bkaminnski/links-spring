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
	dockerContainers.run('postgres-configured', '-p 5432:5432 -e POSTGRES_PASSWORD=postgres --network links --network-alias urls-database --network-alias keywords-database --network-alias descriptions-database postgres-configured', preDockerRun, postDockerRun);
	waitForPostgresConfigured(dockerContainers);
}

function waitForPostgresConfigured(dockerContainers) {
	dockerContainers.waitFor('postgres-configured', 'database system is ready to accept connections');
}

function runFlywayMigrations() {
	buildFlywayConfigured();
	buildFlywayMigrations();
	new Command('./', 'docker run --rm --network links urls-flyway -url=jdbc:postgresql://urls-database:5432/urls -user=urls -password=urls migrate').execute();
	new Command('./', 'docker run --rm --network links descriptions-flyway -url=jdbc:postgresql://descriptions-database:5432/descriptions -user=descriptions -password=descriptions migrate').execute();
	new Command('./', 'docker run --rm --network links keywords-flyway -url=jdbc:postgresql://keywords-database:5432/keywords -user=keywords -password=keywords migrate').execute();
}

function buildFlywayConfigured() {
	var dockerImages = new DockerImages();
	dockerImages.build('./docker/flyway-configured', 'flyway-configured');
}

function buildFlywayMigrations() {
	var dockerImages = new DockerImages();
	dockerImages.build('../sources/services/links/urls/flyway', 'urls-flyway');
	dockerImages.build('../sources/services/links/descriptions/flyway', 'descriptions-flyway');
	dockerImages.build('../sources/services/links/keywords/flyway', 'keywords-flyway');
}