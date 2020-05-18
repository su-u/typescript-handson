FROM ubuntu:18.04

RUN apt update -y && \
    apt upgrade -y && \
    apt install -y \
    curl git build-essential libssl-dev curl && \
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.2/install.sh | bash && \
    nvm install 10.15.3 && \
    nvm use 10.15.3 && \
    npm install npm@latest yarn -g && \
    apt clean && \
    rm -rf /var/lib/apt/lists/*