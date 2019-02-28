FROM node:8.11.4-alpine as builder
WORKDIR /webapp
COPY . ./
RUN yarn install
RUN yarn build

FROM node:8.11.4-alpine
WORKDIR /webapp
COPY --from=builder /webapp ./
RUN yarn install --production=true
EXPOSE 8080
ENTRYPOINT ["yarn"]
