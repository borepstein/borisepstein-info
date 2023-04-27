FROM ubuntu:22.04 AS wproxy
WORKDIR /app/webproxy/
#EXPOSE 80
#EXPOSE 443
ENV DEBIAN_FRONTEND noninteractive
ENV DEBCONF_NONINTERACTIVE_SEEN true
RUN apt-get update -y
RUN apt-get update -y
RUN apt-get install apt-utils -y
RUN apt-get install tzdata -y
RUN apt-get install debconf-utils -y
RUN apt-get install nginx -y
RUN apt-get install certbot -y
COPY nginx/borisepstein.info /etc/nginx/sites-enabled/
COPY nginx/default /etc/nginx/sites-enabled/
ADD letsencrypt.tar /etc/letsencrypt/
CMD nginx -g 'daemon off;'; sleep 3600

FROM centos:centos7 AS web
WORKDIR /app/
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV HTTPS false
ENV PORT 80
COPY ["package.json", "/app/"]
COPY ["public", "/app/public/"]
COPY ["src", "/app/src/"]
RUN yum install curl -y
RUN curl -sL https://rpm.nodesource.com/setup_14.x | bash -
RUN yum install nodejs -y
RUN npm install
RUN npm install serve
RUN npm run build
CMD serve -s build

FROM ubuntu:22.04 AS letsencrypt
ENV DEBIAN_FRONTEND noninteractive
ENV DEBCONF_NONINTERACTIVE_SEEN true
RUN apt-get update -y
RUN apt-get update -y
RUN apt-get install apt-utils -y
RUN apt-get install tzdata -y
RUN apt-get install debconf-utils -y
RUN apt-get install nginx -y
RUN apt-get install certbot -y
COPY nginx/letsencrypt_start /usr/local/bin/
RUN chmod 755 /usr/local/bin/letsencrypt_start
CMD letsencrypt_start 3600
