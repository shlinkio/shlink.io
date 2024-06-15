FROM node:22.3-alpine as node
USER root
COPY . /shlink-website
RUN cd /shlink-website && \
    npm ci && \
    npm run build:prod

FROM nginx:1.27.0-alpine
LABEL maintainer="Alejandro Celaya <alejandro@alejandrocelaya.com>"
RUN rm -r /usr/share/nginx/html && rm /etc/nginx/conf.d/default.conf
COPY --from=node /shlink-website/build /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
