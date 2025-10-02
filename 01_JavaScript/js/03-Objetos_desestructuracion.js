//Objetos
let persona = {
    nombre : "Toni",
    edad : 32,
    estudiante: true,
    direccion: {
        calle: 'Robledo de Tainas',
        ciudad: 'Cangas del Narcea'
    }
};

console.log(persona);
console.table(persona);
console.log(typeof persona);

//Obtener propiedades
console.log(persona.nombre);
console.log(persona.edad);

//Modificar propiedades
persona.nombre="Antonio";
persona.edad=24;
console.log(persona.nombre);
console.log(persona.edad);

//Desestructuración de objetos
const persona1 = {
    nombre : "Carlos",
    edad : 28,
    ciudad: "Madrid"
};

const {nombre, edad} = persona1;
console.log(nombre);
console.log(edad);

//Podemos crear un alias de la variable
const {ciudad : lugar}=persona1; 
console.log(lugar);

//Podemos crear una variable que contenga un valor por defecto, en caso que la API no devuleva esa variable o sea NULL
const {pais = "España"} = persona1;
console.log(persona1);

const {nombre1, edad1, estudiante, direccion: {calle, ciudad}}=persona;
console.log(nombre1);
console.log(edad1);
console.log(estudiante);
confirm.log(calle);
console.log(ciudad);
