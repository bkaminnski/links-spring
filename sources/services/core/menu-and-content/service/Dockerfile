FROM spring-boot-service
ADD ./target/menu-and-content.jar app.jar
ENTRYPOINT ["/entrypoint.sh", "-jar", "/app.jar"]
EXPOSE 8002 $JMX_PORT $DEBUG_PORT