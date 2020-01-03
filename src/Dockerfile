FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm i fsevents
RUN npm rebuild
RUN npm install -g webpack
RUN npm install -g webpack-dev-server
COPY . /app
EXPOSE 8083
CMD ["npm", "run", "dev"]