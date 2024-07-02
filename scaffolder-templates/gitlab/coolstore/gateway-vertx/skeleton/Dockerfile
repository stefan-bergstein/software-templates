FROM registry.access.redhat.com/ubi8/openjdk-17:1.18

ENV LANGUAGE='en_US:en'

ENV COMPONENT_CATALOG_HOST=catalog-spring-boot
ENV COMPONENT_CATALOG_PORT=8080
ENV COMPONENT_INVENTORY_HOST=inventory-quarkus
ENV COMPONENT_INVENTORY_PORT=8080

COPY --chown=185 target/*.jar /deployments/app.jar

EXPOSE 8080
USER 185
ENV JAVA_OPTS_APPEND="-Dhttp.port=8080"
ENV JAVA_APP_JAR="/deployments/app.jar"

ENTRYPOINT [ "/opt/jboss/container/java/run/run-java.sh" ]
