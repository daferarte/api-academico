FROM node:16

USER root
RUN apt-get update && apt-get install -y \
    wget \
    nano
RUN npm cache clean --force

RUN npm install -g npm@8.12.1

RUN npm install prisma -g \
    && npm install cors -g \
    && npm install dotenv -g \
    && npm install express -g \
    && npm install jsonwebtoken -g \
    && npm install nodemon -g \
    && npm install @prisma/client -g



#RUN npm install crypto-js --save

# Vamos a crear un directorio donde dejar la aplicación Angular
RUN mkdir -p /usr/academicoAPI

# Nos cambiamos a ese directorio
WORKDIR /usr/academicoAPI

# Copiamos el paquete json para gestionar las dependencias
COPY app/package*.json /usr/academicoAPI/

RUN npm install

RUN npm install dotenv --save-dev

# Copiamos el código que hemos generado en el punto anterior, al crear la aplicación angular-cli
COPY app/ /usr/academicoAPI/



RUN apt-get install -y locales locales-all
ENV LC_ALL es_CO.UTF-8
ENV LANG es_CO.UTF-8
ENV LANGUAGE es_CO.UTF-8

RUN echo "America/Bogota" > /etc/timezone && rm -f /etc/localtime \
     && dpkg-reconfigure -f noninteractive tzdata

#CMD ["npm", "run" , "start:prod"]
CMD ["nodemon", "app.js"]
# WORKDIR /usr/src/app/ruahapi
# RUN npm install
RUN npm install dotenv
# EXPOSE 3000
#CMD ["pm2-runtime", "start", "ecosystem.config.js"]