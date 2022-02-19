//Retorno en objetos

function crearContador(n) {
    let contador = n;

    return {
        incrementar: function /*incrementar*/ () {
            contador++;
        },
        decrementar: function () {
            contador--;
        },
        showContador: function () {
            return contador;
        }
    }
}

const miContador = crearContador(30);
for (let index = 0; index < 10; index++) {
    miContador.incrementar();
}
console.log(miContador.showContador());

for (let index = 0; index < 20; index++) {
    miContador.decrementar();
}
console.log(miContador.showContador());