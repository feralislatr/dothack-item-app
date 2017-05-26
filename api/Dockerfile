FROM java:8-jdk
RUN apt-get update && apt-get install maven -y
COPY . /usr/src/food
WORKDIR /usr/src/food

EXPOSE 3000

#CMD java -jar target/dothack-api-0.1.0.jar
CMD mvn clean package && mvn spring-boot:run
