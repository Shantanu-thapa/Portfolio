FROM node:20-alpine

WORKDIR /app

COPY package_new*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
