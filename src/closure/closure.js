/*Un closure es la combinacion entre una funcion y el ambito lexico en el que fue declarada
Con esto, la funcion recuerda el ambito en el que se creo*/

//Vamos a codigo:

const moneyBox = (coins) => { //No closure
    var saveCoins = 0;
    saveCoins += coins;
    console.log("MoneyBox: $"+saveCoins);
}

moneyBox(5); //No guarda los elementos, solo imprime lo que se le pasa
moneyBox(28); //No se genera un valor de recuerdo


console.group("Closure")
const moneyBoxClosure = () => { //Si closure
    let saveCoins = 0;
    function closure(coins) {
        saveCoins+=coins;
        console.log("MoneyBox: $"+saveCoins);
    }
    return closure;
}

let countCoins = moneyBoxClosure();

countCoins(4);
countCoins(20);
countCoins(80);
                            //Valor de recuerdo
console.groupEnd();