FROM node:14 as front-end

WORKDIR /app

COPY package*.json ./

COPY . ./

RUN npm install --loglevel=error && \
    npm start --loglevel=error && \
    npm run build --loglevel=error  
  
Expose 80

CMD ["npm", "start"]


