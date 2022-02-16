const fruits = () => {
    var fruit = "apple";
    console.log(fruit);
}

fruits();
console.log(fruit);

var printVars = () => {
    var hi = "Hello";
    var hi = "HelloWorld"; //Var puede ser inicializada nuevamente
    let bye = "ByeBye";
    // let bye = "See you!"; let no puede ser inicializada nuevamente
    console.log(hi,bye);
}

printVars();