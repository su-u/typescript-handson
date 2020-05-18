FROM ubuntu:18.04

RUN apt update -y && \
    apt upgrade -y && \
    apt install -y \
    curl git nodejs && \
    curl -SL https://deb.nodesource.com/setup_10.x | bash && \
    npm install npm@latest yarn -g
    apt clean && \
    rm -rf /var/lib/apt/lists/*

USER gitpod