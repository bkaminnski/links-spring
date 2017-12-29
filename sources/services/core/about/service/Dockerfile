FROM spring-boot-service
ADD ./target/about.jar app.jar
ENTRYPOINT ["/entrypoint.sh", "-jar", "/app.jar"]
EXPOSE 8003 $JMX_PORT $DEBUG_PORT