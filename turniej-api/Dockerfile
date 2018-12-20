FROM node:8.14.0-alpine

WORKDIR ./turniej-api

RUN npm install
#RUN npm install sails-mongo
#RUN npm install nodemon

COPY ./turniej-api/entrypoint.sh /entrypoint.sh
RUN sed -i 's/\r//' /entrypoint.sh
RUN chmod +x /entrypoint.sh

WORKDIR ./turniej-api

ENTRYPOINT ["/entrypoint.sh"]
