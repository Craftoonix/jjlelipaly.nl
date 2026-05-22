# Build stage
FROM node:22-alpine AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build


# Runtime stage
FROM caddy:2-alpine

COPY --from=builder /app/dist /srv

COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80