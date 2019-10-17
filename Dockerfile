FROM node:12.11.0-alpine as node
COPY . /shlink-website
RUN cd /shlink-website && \
    npm install && \
    npm run export && \
    rm -r out/index

FROM nginx:1.17.3-alpine
LABEL maintainer="Alejandro Celaya <alejandro@alejandrocelaya.com>"
RUN rm -r /usr/share/nginx/html && rm /etc/nginx/conf.d/default.conf
COPY --from=node /shlink-website/out /usr/share/nginx/html
COPY assets/nginx.conf /etc/nginx/conf.d/default.conf
