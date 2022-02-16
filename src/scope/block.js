const fruits = () => {
    if (true) {
        var fruits1 = "Apple";
        var fruits2 = "Banana";
        var fruits3 = "Kiwi";
    }
    console.log(fruits1,fruits2,fruits3); //Equal

    if (true) {
        let fruits2 = "Orange";
        const fruits3 = "Avocado";
        console.log(fruits1,fruits2,fruits3); //Different
    }
    console.log(fruits1,fruits2,fruits3); //Equal
}
fruits();

{
    let variable = "Let Variable";
}
// console.log(variable); <- No se puede acceder porque let no escapa del block scope
{
    var variable2 = "Var variable"; //Var por el contrario puede escapar de un block scope
}
console.log(variable2);

const importanceOfLet = () => {
    //debe ser let debido a que var escapa del scope normal y primero se incrementa. Despues pasa el tiempo del timeout, y
    for (/*var*/let index = 0; index < 3; index++) { // ahora solo se va a displayear el valor final que tiene despues de las repetidas iteraciones
        setTimeout(()=>{console.log(index);},1000);
    }
}
importanceOfLet();