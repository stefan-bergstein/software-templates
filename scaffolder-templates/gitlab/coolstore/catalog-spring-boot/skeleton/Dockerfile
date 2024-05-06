FROM registry.access.redhat.com/ubi8/openjdk-17:1.18

COPY --chown=185 target/*.jar /deployments/app.jar

EXPOSE 8080
USER 185
ENV JAVA_OPTS_APPEND=""
ENV JAVA_APP_JAR="/deployments/app.jar"

ENTRYPOINT [ "/opt/jboss/container/java/run/run-java.sh" ]