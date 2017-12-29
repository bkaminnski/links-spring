FROM spring-boot-service
ADD ./target/application.jar app.jar
ENTRYPOINT ["/entrypoint.sh", "-jar", "/app.jar"]
EXPOSE 8001 $JMX_PORT $DEBUG_PORT