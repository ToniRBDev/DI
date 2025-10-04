# 01 Ejercicios JavaScript

## Declaración del variables

1. Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola.
    ```js
    let nombre = "Antonio";
    console.log(nombre);
    ```

2. Declara una constante PI con el valor 3.1416. Intenta reasignarla y observa el error.
    ```js
    const pi=3.1416;
    pi = 25.24; //Error,  Assignment to constant variable.
    ```
3. Declara una variable edad sin asignarle valor. Luego asígnale un número y muestra el resultado.
    ```js
    let edad;
    edad= 32;
    console.log(`Mi edad es ${edad}`);
    ```
## Tipos de datos

1. Crea variables de tipo string, number, boolean, null y undefined. Imprime cada una junto con typeof
```js
let nombre = "Toni";
let edad = 32;
let casado = false;
let trabajo = null;
let domicilio;

console.log(typeof(nombre)); //string
console.log(typeof(edad)); //number
console.log(typeof(casado)); //boolean
console.log(typeof(trabajo)); //object -Error
console.log(trabajo); //null
console.log(typeof(domicilio)); //undefined
```
2. Convierte un número a cadena usando **String()** y una cadena a número usando **Number()**.
```js
let edad = 32;
console.log(typeof(edad)); //number
edad = "32"; 
console.log(typeof(edad)); //string
edad = 32;
console.log(typeof(edad)); //number
```
## Objetos

1. Crea un objeto persona con propiedades: nombre, edad, ciudad
```js
let persona = {
nombre:"Toni",
edad : 32,
ciudad : "Cangas del Narcea"
};
console.log(persona); //{nombre: 'Toni', edad: 32, ciudad: 'Cangas del Narcea'}
```

2. Accede a las propiedades usando dot notation (obj.propiedad) y bracket notation (obj["propiedad"]).
```js
console.log(`El nombre de la persona es ${persona.nombre} y su edad es ${persona["edad"]}`);
```
3. Añade una nueva propiedad profesion al objeto persona
```js
persona.profesion="Pintor";
console.log(persona); //{nombre: 'Toni', edad: 32, ciudad: 'Cangas del Narcea', profesion: 'Pintor'}
```
4. Elimina la propiedad profesion al objeto persona
```js
delete persona.profesion;
console.log(persona); //{nombre: 'Toni', edad: 32, ciudad: 'Cangas del Narcea'}
```
5. Usa desestructuración para extraer nombre y edad en variables e imprimelas
```js
let {nombre , edad, ciudad}=persona;
console.log(nombre); //Toni
console.log(edad); //32
console.log(ciudad); //Cangas del Narcea
```

6. Usa desestructuración para extraer nombre y edad en variables e imprimelas (Utiliza alias para las variables)
```js
let {nombre : nombrePersona , edad : edadPersona, ciudad : ciudadPersona}=persona;
console.log(nombrePersona); //Toni
console.log(edadPersona); //32
console.log(ciudadPersona); //Cangas del Narcea
```


## Funciones

1. Crea una función saludar(nombre) que devuelva "Hola, <nombre>".
```js
function saludar(nombre){
    return `Hola, ${nombre}`;
}
console.log(saludar("toni")); //Hola toni
```

2. Crea una función sumar(a, b) que devuelva la suma de dos números.
```js
function sumar(a,b){
    return a+b;
}
console.log(sumar(8,20)); // 28
```

3. Escribe una función flecha que multiplique dos números
```js
const multiplicacion= (a,b) => a*b;
console.log(multiplicacion(5,4)); // 20
```

4. Crea una función esMayorDeEdad(edad) que devuelva true si la edad es mayor o igual a 18, de lo contrario false.
```js
function esMayorDeEdad(edad){
    return edad>=18 ? true : false;
}

console.log(esMayorDeEdad(25)); //true
console.log(esMayorDeEdad(10)); //false
```

5. Crea una función esMayorDeEdad2 que implemente la misma lógica que la anterior pero utilizando una función fleca.
```js
const esMayorDeEdad2 = e => {e>=18 ? true : false;}
console.log(esMayorDeEdad(25)); //true
console.log(esMayorDeEdad(10)); //false
```


