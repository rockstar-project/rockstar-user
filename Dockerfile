FROM alpine:3.4

RUN apk add --update nginx
RUN mkdir -p /run/nginx
RUN mkdir -p /usr/share/nginx/html

COPY nginx.conf /etc/nginx/
ADD dist /usr/share/nginx/html

EXPOSE 8080

CMD nginx -g 'daemon off;'
