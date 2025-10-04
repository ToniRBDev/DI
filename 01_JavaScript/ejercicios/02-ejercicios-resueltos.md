# 02 Ejercicios JavaScrip

## Arrays y métodos básicos
1. Declara un array con al menos 5 nombres de personas.
```js
const personas = ["Maria", "Pepe", "Germán", "Cristina", "Pablo"];
```
    - Añade un nombre al final.
```js
personas.push("Toni"); //['Maria', 'Pepe', 'Germán', 'Cristina', 'Pablo', 'Toni']
```
    - Elimina el primero.
```js
personas.shift(); //['Pepe', 'Germán', 'Cristina', 'Pablo', 'Toni']
```
    - Busca si existe un nombre concreto con includes().
```js
console.log(personas.includes("Pepe")); //True
console.log(personas.includes("Mario")); //False
```

2. Ordena el array [4, 1, 9, 3, 7] de forma ascendente y descendente.
```js
numeros.sort((a , b) => a-b); //[1, 3, 4, 7, 9]
numeros.sort((a , b) => b-a); //[9, 7, 4, 3, 1]
```

## Desestructuración de arrays
1. Dado el array ["manzana", "pera", "plátano", "naranja"]:
```js
const frutas = ["manzana", "pera", "plátano", "naranja"];
```

    - Extrae en variables fruta1 y fruta2 los dos primeros.
```js
let [fruta1, fruta2] = frutas;
console.log(fruta1); //manzana
console.log(fruta2); //pera
```

    - Usa el operador rest para guardar el resto en un nuevo array.
```js
let [fruta1, fruta2, ...resto] = frutas;
console.log(resto); // ['plátano', 'naranja']
```

2. Intercambia los valores de dos variables usando desestructuración
```js
let a = 100;
let b = 200;
[a,b]=[b,a];
console.log(`El valor de a es ${a}`); //El valor de a es 200
console.log(`El valor de b es ${b}`); //El valor de b es 100
```
3. Extrae el color azul del array anidado:
```js
let colores = ["rojo", ["verde", "azul", "amarillo"]];
let [ , [ ,azul]]=colores;
console.log(azul); //azul
```

## Recorrido de arrays con for

1. Crea un array con los números del 1 al 5 y muéstralos en consola con:
```js
const numeros = [1,2,3,4,5];
```
    - Un for clásico.
```js
for (let i=0; i<numeros.length; i++){
    console.log(numeros[i]);
}
```
    - Un for...of.
```js
for (let numero of numeros){
    console.log(numero);
}
```
    - Un for...in.
```js
for (let i in numeros){
    console.log(numeros[i]);
}
```

2. Recorre el array ["HTML", "CSS", "JavaScript", "React"] con un for clásico e imprime "Posición X: Valor Y"
```js
const tecnologiasFront = ["HTML", "CSS", "JavaScript", "React"];
for (let i=0; i<tecnologiasFront.length; i++){
    console.log(`En la posición ${i} se encuentra la tecnología ${tecnologiasFront[i]}`);
}
```

3. Recorre un array al revés (for con decremento).
```js
for (let i=tecnologiasFront.length-1; i>=0; i--){ 
    console.log(`En la posición ${i} se encuentra la tecnología ${tecnologiasFront[i]}`);
}
```

## Recorridos con forEach, filter y map

1. Dado el array ["Ana", "Luis", "Marta", "Pedro"], recórrelo con forEach e imprime un saludo para cada nombre.
```js
const nombres = ["Ana", "Luis", "Marta", "Pedro"];
nombres.forEach(nombre =>(console.log(`Hola ${nombre}!`)));
```

2. Crea un array de números [2, 4, 6, 8] y usa forEach para mostrar el doble de cada número.
```js
const numeros = [2,4,6,8];
numeros.forEach(numero => console.log(numero*2));
```

3. Dado el array [5, 12, 8, 130, 44], usa filter para obtener solo los números mayores que 10.
```js
const numeros = [5, 12, 8, 130, 44];
numeros.filter(num => num>10).forEach(num=>console.log(num));
```

4. Crea un array con nombres ["Ana", "Alberto", "Bea", "Carlos"] y filtra los que empiecen por la letra A.
```js
const nombres = ["Ana", "Alberto", "Bea", "Carlos"];
nombres.filter(num=>num.startsWith('A')).forEach(num=>console.log(num));
```

5. Dado un array de edades [15, 18, 21, 12, 30], usa filter para obtener solo las que representen mayores de edad (≥18).
```js
const edades = [15, 18, 21, 12, 30];
edades.filter(edad=>edad>=18).forEach(edad => console.log(edad));
```

6. Dado el array [1, 2, 3, 4, 5], usa map para obtener un nuevo array con los números elevados al cuadrado
```js
const numeros = [1, 2, 3, 4, 5];
numeros.map(num=>Math.pow(num,2)).forEach(num=>console.log(num));
```

7. Crea un array con precios [10, 20, 30] y usa map para calcular el precio con IVA (21%) incluido
```js
const precios = [10, 20, 30];
precios.map(num=>num*1.21).forEach(num=>console.log(num));
```

8. Dado el array ["html", "css", "javascript"], usa map para poner en mayúsculas cada palabra.
```js
const tecFrontBasicas = ["html", "css", "javascript"];
tecFrontBasicas.map(tec=>tec.toUpperCase()).forEach(tec=>console.log(tec));
```

9. Dado el array [3, 8, 12, 5, 7, 20]:
    - Usa filter para quedarte con los pares.
    - Luego, usa map para multiplicarlos por 10
```js
const numeros = [3, 8, 12, 5, 7, 20];
numeros.filter(num=>num%2===0).map(num=>num*10).forEach(num=>console.log(num));
```
10. Dado el array de objetos:
```js
let alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9 }
];
```
- Filtra solo los alumnos con nota ≥ 5.
- Usa map para obtener un array solo con sus nombres.
-   Recorre el resultado con forEach e imprime: "Alumno aprobado: NOMBRE"
```js
alumnos.filter(alumno=>alumno.nota>=5).map(alumno=>alumno.nombre)
        .forEach(alumno=>console.log(`Alumno aprobado: ${alumno}`));
```