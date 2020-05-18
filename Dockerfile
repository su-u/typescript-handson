FROM node:10-alpine

RUN \
    apk update && \
    apk add --no-cache curl bash ca-certificates openssl ncurses coreutils python2 make gcc g++ libgcc linux-headers grep util-linux binutils findutils && \
    touch ~/.bashrc && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash && \

SHELL ["/bin/bash", "-c"]
RUN \
    source ~/.bashrc && \
    nvm install -s 10.15.3 && \
    nvm cache clear