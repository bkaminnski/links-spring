FROM bkaminnski/spring-boot-service
ADD ./target/links.jar app.jar
ENTRYPOINT ["/entrypoint.sh", "-jar", "/app.jar"]
EXPOSE 8011 $JMX_PORT $DEBUG_PORT