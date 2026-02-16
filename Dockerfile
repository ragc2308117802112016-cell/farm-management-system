FROM node:18-alpine

# Container-kulla /app folder-ai create panniduvom
WORKDIR /app

# Step 1: Root-la irukkura package.json-ai /app folder-kulla copy panrom
COPY package*.json ./

# Step 2: Dependencies-ai install panrom
RUN npm install

# Step 3: Project-la irukkura matha ella files-aiyum copy panrom
COPY . .

# App 3000 port-la run aaguthu
EXPOSE 3000

# Step 4: Backend folder-kulla irukkura server.js-ai run panrom
CMD ["node", "backend/server.js"]