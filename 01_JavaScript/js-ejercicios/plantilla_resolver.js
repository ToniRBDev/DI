const nombres = ["Ana", "Alberto", "Bea", "Carlos"];
nombres.filter(num=>num.startsWith('A')).forEach(num=>console.log(num));

const edades = [15, 18, 21, 12, 30];
edades.filter(edad=>edad>=18).forEach(edad => console.log(edad));

console.log('----------NUMEROS------------')
const numeros = [3, 8, 12, 5, 7, 20];
numeros.filter(num=>num%2===0).map(num=>num*10).forEach(num=>console.log(num));

console.log('----------PRECIOS------------')
const precios = [10, 20, 30];
precios.map(num=>num*1.21).forEach(num=>console.log(num));

console.log('----------TECNOLOGIAS------------')
const tecFrontBasicas = ["html", "css", "javascript"];
tecFrontBasicas.map(tec=>tec.toUpperCase()).forEach(tec=>console.log(tec));

console.log('--------ARRAY_OBJETOS_ALUMNO------------')

let alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9 }
];

alumnos.filter(alumno=>alumno.nota>=5).map(alumno=>alumno.nombre)
        .forEach(alumno=>console.log(`Alumno aprobado: ${alumno}`));
