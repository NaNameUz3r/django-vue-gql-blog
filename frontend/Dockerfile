FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install @vue/cli-service --save-dev \
    && npm install -g http-server \
    && npm install 
COPY . . 
RUN npm run build
EXPOSE 8080
ENTRYPOINT ["http-server","dist"]