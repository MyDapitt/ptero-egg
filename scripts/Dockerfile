FROM        --platform=$TARGETOS/$TARGETARCH node:lts-bullseye-slim

LABEL       author="David" maintainer="major@onedev.eu.org"

RUN         apt update \
            && apt -y install imagemagick neofetch webp sudo ffmpeg iproute2 git sqlite3 libsqlite3-dev python3 python3-dev ca-certificates dnsutils wget zip tar curl build-essential libtool iputils-ping libnss3 tini \
            && useradd -m -d /home/container container

RUN         npm install typescript ts-node @types/node --location=global

RUN	    npm i npm@latest -g && \
            npm i yarn -g && \
	    npm i pm2 -g 

USER        container
ENV         USER=container HOME=/home/container
WORKDIR     /home/container

STOPSIGNAL SIGINT

COPY        --chown=container:container ./../focal.sh /focal.sh
RUN         chmod +x /focal.sh
ENTRYPOINT    ["/usr/bin/tini", "-g", "--"]
CMD         ["/focal.sh"]
