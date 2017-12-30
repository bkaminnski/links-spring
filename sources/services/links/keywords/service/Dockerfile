FROM spring-boot-service
ADD ./target/keywords.jar app.jar
ENTRYPOINT ["/entrypoint.sh", "-jar", "/app.jar"]
EXPOSE 8014 $JMX_PORT $DEBUG_PORT