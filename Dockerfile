FROM node:8.11.2-alpine

RUN npm i -G npm@latest
RUN mkdir -p /app
COPY ./package.json /app/
WORKDIR /app
RUN ["npm", "i"]

COPY . /app
CMD ["npm", "run", "dev"]