import { agregarSuperheroes, leerSuperheroes } from "./utilsfinal.mjs";
const archivoOriginal = './superheroes.txt';
const archivoNuevo = './agregarSuperheroes.txt';
agregarSuperheroes(archivoOriginal,archivoNuevo);
const superheroes = leerSuperheroes(archivoOriginal);
console.log('Super Heroes Ordenado');
console.log(superheroes);