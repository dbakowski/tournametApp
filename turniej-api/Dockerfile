FROM node:8.14.0-alpine

RUN npm install -g sails grunt npm-check-updates

WORKDIR ./turniej-api

RUN npm install sails -g
RUN npm install sails-mongo -g
RUN npm install nodemon -g

COPY ./turniej-api/entrypoint.sh /entrypoint.sh
RUN sed -i 's/\r//' /entrypoint.sh
RUN chmod +x /entrypoint.sh

WORKDIR ./turniej-api

ENTRYPOINT ["/entrypoint.sh"]
