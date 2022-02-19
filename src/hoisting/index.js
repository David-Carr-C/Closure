a = 2;
var a;//El hoisting consiste en que las declaraciones se procesan primero en javascript y despues las asignaciones
console.log(a); //Al llegar aqui, tenemos ya asignado y listo para ejecutar

console.log(b);
var b = 5; //la declaracion ocurre, pero la asignacion es cargada posteriormente al log, por ello, obtiene el primer valor cuando se declara una variable, que es undefined



nameCat("Cat")
function nameCat(name) {
    console.log(name);
} //La declaracion de la funcion ocurre primero, todas estas declaraciones son ejecutadas primero
//posteriormente se asginan los datos, pero la funcion al ser declarada como func esta es una declaracion completa, no hay problema alguno
