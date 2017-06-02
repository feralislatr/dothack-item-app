FROM java:8-jdk

RUN apt-get update && apt-get install -y maven curl

COPY . /usr/src/food
WORKDIR /usr/src/food

EXPOSE 4200

#CMD java -jar target/dothack-api-0.1.0.jar
CMD mvn clean package && mvn spring-boot:run
