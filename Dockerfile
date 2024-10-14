# FROM node:18.16 
FROM node:18.16-alpine 

WORKDIR /app2
COPY package*.json ./
RUN npm install && npm install pm2 -g
COPY . /app2
# RUN cp .env.sample .env
# RUN npm run start

EXPOSE 8180
# CMD [ "npm", "run", "pm2" ]
CMD ["pm2-runtime", "ecosystem.config.cjs"]
# CMD ["pm2-runtime", "/app2/ecosystem.config.cjs"]
# CMD ["pm2", "start", "./server/config/index.js"]
# CMD ["pm2-runtime", "server.js", "--exp-backoff-restart-delay=100"]
# CMD ["pm2", "start", "server.js", "--exp-backoff-restart-delay=100"]
# CMD ["node", "server.js"]
