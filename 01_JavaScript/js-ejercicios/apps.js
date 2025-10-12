import {nombreApp, versionAPP, autorAPP} from './constantes.js';
console.log(`Hola, soy ${autorAPP} y soy el autor de la app ${nombreApp} y acabo lanzar la version ${versionAPP}`);

import DevolverPrimerString, {APP_NAME, mayusculas} from './utils.js';
const desarrolladores = ['Toni','Andrés' ,'Paula', 'German', 'Manuel'];

console.log(`Uno de los desarrolladores de la app ${APP_NAME} es ${mayusculas(DevolverPrimerString(desarrolladores))}.`);
