FROM node:26.7-alpine
MAINTAINER Alejandro Celaya <alejandro@alejandrocelaya.com>

# Install tini and update npm
RUN apk add --no-cache tini && npm install -g 'npm@^11.17'
# Set tini as the entry point, as node does not properly handle signals
ENTRYPOINT ["/sbin/tini", "--"]
