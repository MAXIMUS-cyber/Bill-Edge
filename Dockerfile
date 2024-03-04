FROM node:20-alpine3.19

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

RUN mkdir -p node_modules && chown -R node:node /home/node/app

COPY --chown=node:node . .

EXPOSE 4000

RUN npm install -g json-server@0.17.4 json-server-auth@2.1.0 express

CMD json-server-auth --watch db.json --port 4000 --host 0.0.0.0