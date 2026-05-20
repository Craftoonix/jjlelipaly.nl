FROM node:20 AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM caddy:latest

COPY --from=build /app/dist /srv
COPY Caddyfile /etc/caddy/Caddyfile