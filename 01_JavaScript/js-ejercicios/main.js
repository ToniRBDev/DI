import {sumar, restar, multiplicar, dividir} from "./operaciones.js";
console.log(sumar(3,2));
console.log(restar(3,2));
console.log(multiplicar(3,2));
console.log(dividir(3,2));

import { areaCirculo as circulo, areaCuadrado as cuadrado } from "./matematicas.js";
let ladoCuadrado=20;
let radioCirculo=25;
console.log(`El area del cuadrado es ${cuadrado(ladoCuadrado)}. 
El área del círculo es ${circulo(radioCirculo)}.`);

import * as nombres from "./personas.js";
console.log(`${nombres.a}, ${nombres.b}, ${nombres.c}, ${nombres.d}, ${nombres.f}, ${nombres.g}, ${nombres.h}, ${nombres.i}, ${nombres.j}`);
//Ana, Luis, Carlos, María, Jorge, Lucía, Pedro, Sofía, Miguel


