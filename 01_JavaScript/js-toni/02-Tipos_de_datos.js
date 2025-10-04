//string
let nombre = "Toni";
let apellido = 'Alvarez';
let mensaje = `Bienvenido ${nombre} ${apellido}`; // Interpolaciónn, muy útil para concatenar (SON COMILLAS TUMBADAS)
console.log(mensaje);

//number
let edad = 32;
let pi = 3.1416;
let infinito = Infinity;
let noNumero = NaN;

//boolean
let guapo = true;
let rico = false;

//undefined
let x;
console.log(x);

//null
let vacio = null;

//symbol
let id = Symbol();

//bigint
let numeroGrande = 1234567890123456789012345678901234567890n;

//------------TIPOS DE DATOS NO PRIMITIVOS-----------
//Object
let persona = {nombre:"Toni", edad: "32" };

//Array (lista no ordenada)
let numeros = [1,2,3,4];

//Function
function saludar() {return "hola";}

//Date, RegExp, Map, Set, WeakMap, WeatSet
let hoy = new Date();
let mapa = new Map();
let conjunto = new Set ([1,2,3]);

