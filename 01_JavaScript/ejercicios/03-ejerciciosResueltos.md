# 📝 Ejercicios de Módulos en JavaScript

### 1. Exportar e importar constantes
Crea un archivo `constantes.js` que contenga varias constantes como el nombre de la app, la versión y el autor.  
Importa esas constantes en `app.js` y muéstralas en consola.  
```js
// Archivo constantes.js
export const nombreApp = "PCREBORN";
export const  versionAPP = 1.0;
export const autorAPP = "Antonio";

//Archivo apps.js
import {nombreApp, versionAPP, autorAPP} from './constantes.js';
console.log(`Hola, soy ${autorAPP} y soy el autor de la app ${nombreApp} y acabo lanzar la version ${versionAPP}`);
// Hola, soy Antonio y soy el autor de la app PCREBORN y acabo lanzar la version 1
```
---

### 2. Funciones matemáticas
En `operaciones.js` crea y exporta funciones para sumar, restar, multiplicar y dividir.  
En `main.js` importa esas funciones y prueba varias operaciones.  
```js
//Archivo operaciones.js
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;
export const multiplicar = (a, b) => a * b;
export const dividir = (a, b) => a / b;

//Archivo main.js
import {sumar, restar, multiplicar, dividir} from "./operaciones.js";
console.log(sumar(3,2)); //5
console.log(restar(3,2)); //1
console.log(multiplicar(3,2)); //6
console.log(dividir(3,2)); //1.5
```
---

### 3. Exportación por defecto  
Crea un archivo `saludos.js` que tenga una exportación por defecto con una función `saludar(nombre)`.  
Importa esa función en `index.js` y úsala con tu nombre.  
```js
//Archivo saludos.js
export default function saludar  (nombre) { return `Buenos días ${nombre}`;};

//Archivo index.js
import saludar from "./saludos.js";
console.log(saludar('Toni'));  //Buenos días Toni
```
---

### 4. Combinar exportaciones  
En `utils.js` exporta:
- Una constante llamada `APP_NAME`.  
- Una función `mayusculas(texto)` que convierta un string a mayúsculas.  
Haz una exportación por defecto con una función que reciba un array de strings y devuelva el primero.  
En `app.js` importa todo y pruébalo.  
```js
// Archivo utils.js
export const APP_NAME = 'PCReborn';
export const mayusculas= (texto) => texto.toUpperCase();
export default function DevolverPrimerString(lista) {
    return lista[0];
}

//Archivo apps.js

import DevolverPrimerString, {APP_NAME, mayusculas} from './utils.js';
const desarrolladores = ['Toni','Andrés' ,'Paula', 'German', 'Manuel'];

console.log(`Uno de los desarrolladores de la app ${APP_NAME} es ${mayusculas(DevolverPrimerString(desarrolladores))}.`)
// Uno de los desarrolladores de la app PCReborn es TONI.
```
---

### 5. Importar con alias  
En `matematicas.js` exporta dos funciones: `areaCirculo(radio)` y `areaCuadrado(lado)`.  
En `main.js` importa esas funciones con alias (`circulo`, `cuadrado`) y calcula las áreas de un círculo de radio 5 y un cuadrado de lado 4.  
```js
// Matematicas.js
export const areaCirculo = (radio) => Math.PI*(Math.pow(radio,2));
export const areaCuadrado = (lado) => lado*lado;

// Main.js
import { areaCirculo as circulo, areaCuadrado as cuadrado } from "./matematicas.js";
let ladoCuadrado=20;
let radioCirculo=25;
console.log(`El area del cuadrado es ${cuadrado(ladoCuadrado)}. 
El área del círculo es ${circulo(radioCirculo)}.`);
```
---

### 6. Importar todo con `* as`
En `personas.js` exporta varias constantes con nombres de personas.  
En `main.js` impórtalas todas bajo un objeto:  
```js
// Personas.js
const nombresPersonas = ['Ana', 'Luis', 'Carlos', 'María', 'Jorge', 'Lucía', 'Pedro', 'Sofía', 'Miguel', 'Elena'];
export let [a,b,c,d,f,g,h,i,j]=nombresPersonas;

//main.js
import * as nombres from "./personas.js";
console.log(`${nombres.a}, ${nombres.b}, ${nombres.c}, ${nombres.d}, ${nombres.f}, ${nombres.g}, ${nombres.h}, ${nombres.i}, ${nombres.j}`);
//Ana, Luis, Carlos, María, Jorge, Lucía, Pedro, Sofía, Miguel
```
```js
import * as nombres from "./personas.js";
```