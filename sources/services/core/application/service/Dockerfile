FROM openjdk:8-jdk-alpine
ADD ./target/application.jar app.jar
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app.jar"]
EXPOSE 8001