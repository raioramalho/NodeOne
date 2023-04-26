FROM node

WORKDIR /usr/app

COPY package*.json ./

RUN npm install


COPY . .

RUN npx prisma generate

RUN npx prisma migrate dev

RUN npm run test

EXPOSE 3000

CMD ["npm", "run", "dev"]
