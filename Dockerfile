FROM node:20-alpine
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
COPY prisma ./prisma
RUN npm install
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY --from=0 /app/dist .
EXPOSE 3000
CMD [ "node", "index.js" ]