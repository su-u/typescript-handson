FROM node:10-alpine

RUN apk upgrade --update && \
    apk add --no-cache wget make bash git curl

USER gitpod