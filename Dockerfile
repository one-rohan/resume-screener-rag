# Stage 1: Install dependencies
FROM node:22-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "server"]