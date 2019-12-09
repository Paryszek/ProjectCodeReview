equasion = "";

function attach(event) {
    equasion += event.currentTarget.value;
    updateDisplay();
}

function clearOperator() {
    equasion = "";
    updateDisplay();
}

function equalOperator() {
    equasion = eval(equasion);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = equasion;
}