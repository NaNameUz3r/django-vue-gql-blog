FROM nginx:1.21.3-alpine
EXPOSE 80/tcp
EXPOSE 443/tcp
RUN apk add --no-cache curl openssl
RUN curl https://get.acme.sh | sh
RUN ln -s  /root/.acme.sh/acme.sh /usr/local/bin/acme.sh
RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf.esh ssl_params backend /etc/nginx/
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]
