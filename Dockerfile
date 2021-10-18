
# Builder
FROM node:14.17-alpine as builder

WORKDIR /app

COPY ["yarn.lock", "package.json", "./"]

RUN yarn install

COPY [".", "./"]

RUN yarn test && yarn build

# Production Image

FROM node:14.17-alpine

WORKDIR /app

COPY --from=builder ["/app/yarn.lock", "/app/package.json", "./"]

RUN yarn install

COPY --from=builder ["/app/public", "./public"]

COPY --from=builder ["/app/.next", "./.next"]

CMD yarn start

