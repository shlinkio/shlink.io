FROM node:25.2-alpine
MAINTAINER Alejandro Celaya <alejandro@alejandrocelaya.com>

# Install tini
RUN apk add --no-cache tini
# Set tini as the entry point, as node does not properly handle signals
ENTRYPOINT ["/sbin/tini", "--"]
