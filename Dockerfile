FROM node:18-alpine as dependencies

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn

FROM node:18-alpine as build
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate && yarn build && yarn cache clean
ENV CARGO_NET_GIT_FETCH_WITH_CLI=true

EXPOSE 3000

CMD yarn start
