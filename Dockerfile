FROM node:26.8-alpine AS node
USER root
COPY . /shlink-website
RUN cd /shlink-website && \
    npm install -g 'npm@^11.17' && \
    npm ci && \
    node --run build:prod

FROM nginx:1.31.3-alpine
LABEL maintainer="Alejandro Celaya <alejandro@alejandrocelaya.com>"
RUN rm -r /usr/share/nginx/html && rm /etc/nginx/conf.d/default.conf
COPY --from=node /shlink-website/build /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
