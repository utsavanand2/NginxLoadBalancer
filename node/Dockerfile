FROM node:8.12.0-alpine
MAINTAINER "utsavanand2@gmail.com"
COPY ./ /app
WORKDIR /app
RUN npm install
EXPOSE 5000
ENTRYPOINT [ "node", "./src/app.js" ]
