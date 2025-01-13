# Base Image
FROM node:18-alpine as base

WORKDIR /app
COPY package*.json yarn.lock ./
RUN apk add --no-cache git \
    && yarn install --frozen-lockfile \
    && yarn cache clean

# Build Image
FROM node:18-alpine as builder

WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .
RUN apk add --no-cache git curl \
    && yarn build \
    && yarn install --production --ignore-scripts --prefer-offline

# Production Image
FROM node:18-alpine as runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Copy necessary files
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
