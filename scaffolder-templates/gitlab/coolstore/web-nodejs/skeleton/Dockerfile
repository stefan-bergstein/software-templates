FROM node:14
ENV COOLSTORE_GW_ENDPOINT=http://gateway-vertx:8080
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
RUN npm install
COPY . .
RUN chmod -R a+rw /usr/src/app
USER 1001
EXPOSE 8080
CMD [ "npm", "start" ]
