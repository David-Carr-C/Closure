const buildCount = (i) => {
    let count = i;

    return function displayCount() {
        console.log(count++);
    }
} 
console.group("First Lexical Environment");
const firstLexical = buildCount(10); //Cada vez que asigna a una variable la funcion, se crea un ambiente lexico
firstLexical();
firstLexical();
firstLexical();
firstLexical();
console.groupEnd();

console.group("Second Lexical Environment");
const secondLexical = buildCount(80); //Cada vez que asigna a una variable la funcion, se crea un ambiente lexico
secondLexical();
secondLexical();
secondLexical();
secondLexical();
console.groupEnd();