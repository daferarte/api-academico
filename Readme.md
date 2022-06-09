# @author Daniel Arteaga
# @version 1.0.0
 
## Microservicio academico para gestion de elementos academicos de RUAH
## Este esquema cuenta con la inclusion de JWT

# Instalación
Para poder utilizar el aplicativo se debe correr el comando 

``` Docker-compose ```
- docker-compose up -d --build

Esto ejecutara los aplicativos y lebrerias necesarias para iniciar el app

# Directorios

AcademicoAPI
    -API
        -app
            -controllers
                --controladores de la app
            -middlewares
                --validar-jwt.js
            -models
                --server.js
            -prisma
                -migrations
                --schema.prisma
            -public
                --index.html
            -routes
                --rutas de la app
            .env
            .gitignore
            app.js
            package.json
        Dockerfile
    -env
        --.env.dev
    --gitignore
    docker-compose.yml
    Readme.md

## Acontinuación se explica la utilizacion de los directorios y archivos

```app.js```
Archivo central del API donde se instancia el servidor.

```package.json```
Archivo de configuracion del API en este se especifican las librerias y comandos a utilizar (Recuerde incluir comandos de produccion y desarollo de ser necesario)

```controllers```
Carpeta contenedora de los controlladores del API


```models```
Carpeta contenedora de todos los modelos del API

```server.js```
Clase donde se instancia el servidor de express este incluye express, cors.
Dentro de esta clase se mira la implementacion de metodos constructor, middleware, routes y listen.

```public```
Carpeta contenedora de todos los archivos publicos del API

```index.html```
Archivo de ejemplo de html en caso de requerirlo de lo contrario se recomienda eliminarlo

```Routes```
Carpeta contenedora de todas las rutas del API




