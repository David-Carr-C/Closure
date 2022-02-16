const helloWorld = () => {
    const hello = "Hello World";
    console.log(hello);
}

helloWorld();
// console.log(hello); <- Esta variable no es global, esta declarada localmente en la funcion 'helloWorld()'

var scope = "I am global";

function functionScope() {
    var scope = "I'm just a local variable";
    const funcNested = () => {
        return scope;
    }
    console.log(funcNested());
}

functionScope();
console.log(scope); //La variable no se sobreescribe, solo se encuentran en diferentes scopes