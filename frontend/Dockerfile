FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install @vue/cli-service --save-dev \
    && npm install -g http-server \
    && yarn add bootstrap bootswatch jquery popper.js \
    && npm install --save @popperjs/core \ 
    && npm install 
COPY . . 
# RUN npm run build
RUN yarn build
EXPOSE 8080
