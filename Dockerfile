FROM node:16-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

# copy from to
COPY ./ ./

RUN npm install
RUN npm run build

EXPOSE 7223
CMD ["npm", "start"]