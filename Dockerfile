FROM nginx

WORKDIR /www/server/nginx/html
USER root

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./dist  /www/server/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
