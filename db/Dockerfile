FROM mongo:latest

#RUN apt-get update 

RUN mkdir -p /usr/src/app/

COPY . /usr/src/app/


# Expose port #27017 from the container to the host
EXPOSE 27017

#RUN mongod
# Set /usr/bin/mongod as the dockerized entry-point application
ENTRYPOINT ["/usr/bin/mongod"]

CMD use items
