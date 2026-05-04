const display = document.getElementById('display');

function adicionar(valor) {
    display.value += valor;
}

function limpar() {
    display.value = '';
}