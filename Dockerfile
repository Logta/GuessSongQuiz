FROM node:12-alpine
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5000
ENV HOST=0.0.0.0
CMD [ "npm", "start" ]