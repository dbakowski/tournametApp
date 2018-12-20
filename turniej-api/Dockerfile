FROM node:8.14.0-alpine

WORKDIR /turniej-api

COPY ./turniej-api/package.json .

RUN ls -all

RUN npm install
RUN npm install sails -g
RUN npm install sails-mongo -g
RUN npm install nodemon -g

COPY ./turniej-api/entrypoint.sh /entrypoint.sh
RUN sed -i 's/\r//' /entrypoint.sh
RUN chmod +x /entrypoint.sh

WORKDIR ./turniej-api

ENTRYPOINT ["/entrypoint.sh"]
