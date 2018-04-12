FROM bkaminnski/spring-boot-service
ADD ./target/unique-ids.jar app.jar
ENTRYPOINT ["/entrypoint.sh", "-jar", "/app.jar"]
EXPOSE 8004 $JMX_PORT $DEBUG_PORT