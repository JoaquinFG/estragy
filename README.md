# Estragy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---------------------------------------------
# Prueba Técnica sStragy

https://github.com/JoaquinFG/estragy.git

# Instalar todas las dependencias:

npm i

# Crear base de datos

-- Base de datos: `countries`
--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `name` varchar(100) NOT NULL,
  `capital` varchar(100) DEFAULT NULL,
  `flag` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `paises`
  ADD PRIMARY KEY (`name`);
COMMIT;

# php

Poner carpeta 'countries' en carpeta xampp/htdocs 

