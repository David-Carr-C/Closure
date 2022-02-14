var hello = "hello";
// var hello = "hello +"; var puede ser reasignado asi como fue declarado
let world = "hello world";
// let world = "hello world +"; con let la variable ya esta asignada y no se le puede asignar otro valor como cuando fue declarada
const helloWorld = "Hello World!";
// console.log(hello);

function toPickUpVariables() {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

toPickUpVariables();

const helloWorldFunc = () => {
    globalVar = "I'm global"; //Si no se le pone let var o const esta variable puede ser accedida incluso por fuera de la funcion
}
//Pero a esto se le considera una mala practica
helloWorldFunc();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = anotherGlobalVar = "I'm global var";
}
//Esto es otra forma de que se incurra en que una variable se extienda al scope global
anotherFunction();
console.log(anotherGlobalVar);