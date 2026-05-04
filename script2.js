const display = document.getElementById('display');

function adicionar(valor) {
    display.value += valor;
}

function limpar() {
    display.value = '';
}function apagar() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        // eval() resolve a string matemática (ex: "2+2" vira 4)
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
        setTimeout(limpar, 1500);
    }
}
