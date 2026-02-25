const display = document.getElementById('display');

// Adiciona valores ao display
function appendValue(value) {
    const lastChar = display.value.slice(-1);
    const operators = ['+', '*', '/', '%'];

    // Impede dois operadores seguidos (exceto o sinal de menos para negativos)
    if (operators.includes(value) && operators.includes(lastChar)) {
        return;
    }

    // Permite o sinal de menos se o display estiver vazio (número negativo)
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Lógica de Porcentagem
function calculatePercentage() {
    try {
        // Converte o valor atual em decimal (ex: 50 vira 0.5)
        display.value = eval(display.value) / 100;
    } catch {
        display.value = "Erro";
    }
}

// Lógica Principal de Cálculo
function calculate() {
    try {
        // O eval() resolve a string matemática. 
        // Se a string for "-5+10", ele retorna 5 corretamente.
        let result = eval(display.value);

        if (result === Infinity || isNaN(result)) {
            display.value = "Erro: Div 0";
        } else {
            display.value = result;
        }
    } catch (e) {
        display.value = "Erro de Sintaxe";
    }
}