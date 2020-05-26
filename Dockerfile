FROM nginx:stable

RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx

COPY nginx.conf /etc/nginx/
ADD dist/ /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]