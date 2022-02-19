var a = "Hello, this is a global scope";

function hello() {
    let b = "Hello World, this is a local scope";
    const c = "How's it going function?, this is a local scope";
    if (true) {
        let d = "Hello conditional, this is a block scope";
        debugger
    }
}

function moneyBox() {
    debugger
    let money = 0;
    return function () {
        debugger
        money++;
        console.log(money);
    }
}

hello();

let myMoneyBox = moneyBox();
myMoneyBox();
myMoneyBox();
myMoneyBox();