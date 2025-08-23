# =========================
#  Development stage
# =========================
FROM node:18-alpine AS development

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Expose Vite dev server
EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]

# =========================
#  Production stage
# =========================
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# =========================
#  Serve with nginx
# =========================
FROM nginx:1.27-alpine AS production

# Remove default nginx config
RUN rm -rf /usr/share/nginx/html/*

# Copy built frontend
COPY --from=build /app/dist /usr/share/nginx/html

# Expose nginx port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
