FROM spring-boot-service
ADD ./target/urls.jar app.jar
ENTRYPOINT ["/entrypoint.sh", "-jar", "/app.jar"]
EXPOSE 8012 $JMX_PORT $DEBUG_PORT