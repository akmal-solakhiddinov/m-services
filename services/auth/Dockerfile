FROM node:23-alpine AS development

WORKDIR /app

COPY package*.json ./
RUN ls -l /app

RUN npm install


COPY prisma ./prisma

ENV PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1

COPY . .

RUN npx prisma generate

CMD ["npm", "run", "dev"]



FROM node:23-alpine AS production

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production
# COPY prisma ./src/prism   a


COPY --from=development /app/dist ./dist

RUN npx prisma generate


EXPOSE 4000

CMD [ "node" , "dist/server.js" ]