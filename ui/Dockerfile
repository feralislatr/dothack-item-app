FROM node:7

RUN apt-get update && apt-get install -y curl

RUN mkdir -p /ui
WORKDIR /ui
COPY . /ui
RUN npm install
#RUN npm install -g --save  @angular/cli
EXPOSE 3000
CMD ["npm", "start"]
