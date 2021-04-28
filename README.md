# Curso Nativescript OpenWebinars

Repositorio relacionado con el curso de Introducción a Nativescript con Angular. Este proyecto fue creado con la versión 8 de Nativescript

## Plantilla utilizada

La plantilla utilizada será la siguiente:

    ns create cursoNativescriptOpenWebinars --template @nativescript/template-drawer-navigation-ng

## Como ejecutar la aplicación

1. Descargar el proyecto con `git clone git@github.com:ServerJon/cursoNativescriptOpenWebinars.git`.
2. Instalar dependencias con `npm i`.
3. Añadir la carpeta *platform* del dispositivo que queramos lanzar *android/ios* con `tns platform add <android/ios>`.
4. Ejecutar `tns prepare <android/ios>` para preparar nuestro proyecto.
5. Construir el proyecto `tns build <android/ios>`.
6. Por último lanzar la aplicación en el dispotivo/emulador que queramos `tns run <android/ios>`

## Comandos extra

- Limpiar nuestro proyecto: `tns clean`.
- Eliminar la carpeta *platform* de una plataforma específica: `tns platform remove <android/ios>`.
- Listar los dispositivos conectados o los emuladores activados: `tns device`
