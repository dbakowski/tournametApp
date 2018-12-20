FROM node:8.14.0-alpine

WORKDIR /usr/local/app/turniej-api

COPY ./turniej-api/package.json .

#RUN npm install
#RUN npm install sails -g
#RUN npm install sails-mongo -g
#RUN npm install nodemon -g
#
COPY ./turniej-api/entrypoint.sh .

RUN sed -i 's/\r//' ./entrypoint.sh
RUN chmod 777 ./entrypoint.sh
RUN ls -all

ENTRYPOINT /usr/local/app/turniej-api/entrypoint.sh
