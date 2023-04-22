FROM node:18.16-alpine as node
COPY . /shlink-website
RUN cd /shlink-website && \
    npm ci --force && \
    npm run export:prod

FROM nginx:1.23-alpine
LABEL maintainer="Alejandro Celaya <alejandro@alejandrocelaya.com>"
RUN rm -r /usr/share/nginx/html && rm /etc/nginx/conf.d/default.conf
COPY --from=node /shlink-website/out /usr/share/nginx/html
COPY src/assets/nginx.conf /etc/nginx/conf.d/default.conf
