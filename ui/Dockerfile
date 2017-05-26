FROM node:7

RUN mkdir -p /ui
WORKDIR /ui
COPY . /ui
RUN npm install
RUN npm install -g --save  @angular/cli
EXPOSE 8080
CMD ["npm", "start"]

