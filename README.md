# Instrucciones de inicialización de la aplicación

## Requisitos:

Para poder ejecutar las instrucciones de inicialización de la aplicación, debes tener instalados en tu sistema los siguientes requisitos:

- Docker
- Docker Compose

Puedes descargar e instalar [Docker](https://www.docker.com/get-started/) y [Docker Compose](https://docs.docker.com/compose/install/) de sus respectivos sitios web oficiales.

Además, asegúrate de que los archivos `docker-compose.seed.yml` y `docker-compose.yml` estén en el directorio donde ejecutarás los comandos.

## Pasos a seguir:

1. Primero, necesitas autenticarte en el registry de ingram.azurecr.io. Para esto, debes ejecutar el siguiente comando en tu terminal:

```bash
  docker login ingram.azurecr.io -u USER -p PASSWORD
```

Este comando te autenticará en el registry de ingram.azurecr.io. Recuerda reemplazar `USER` y `PASSWORD` por sus respectivos valores!

2. Una vez que te has autenticado correctamente, debes ejecutar el docker-compose para el seedeo de la base de datos. Para esto, debes ejecutar el siguiente comando en tu terminal:

```bash
  docker-compose -f docker-compose.seed.yml up --abort-on-container-exit
```

Este comando descargará la imagen del registry y una vez completa la descarga, comenzará a seedear la base de datos.

3. Después de completar el seedeo de la base de datos, debes ejecutar el segundo docker-compose para levantar la aplicación. Para esto, debes ejecutar el siguiente comando en tu terminal:

```bash
  docker-compose up -d
```

4. A continuación, para acceder a la aplicación, debes ingresar a la siguiente dirección en tu navegador:

   [http://localhost:3000/](http://localhost:3000/)

Consulte al administrador por credenciales de logeo a la aplicacion

5. Finalmente, si necesitas detener la aplicación, puedes hacerlo ejecutando el siguiente comando en tu terminal:

```bash
  docker-compose down
```

Este comando dentendrá la aplicación, pero los datos en la base de datos persistirán. La próxima vez que intentes acceder a la aplicación solo debes ejecutar los pasos 4 y 5 de este instructivo.

## Notas adicionales

- Si encuentras algún problema durante la inicialización de la aplicación, por favor revisa los logs para obtener más detalles sobre el problema.
- Si necesitas más información sobre cómo utilizar Docker y Docker Compose, puedes consultar la documentación [docs.docker.com](https://docs.docker.com/)
