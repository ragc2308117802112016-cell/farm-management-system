FROM node:18-alpine
WORKDIR /app
# Ippo namma create panna file-ai copy panrom
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "backend/server.js"]