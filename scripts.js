value = "";

function attachNumber(event) {
  value += event.currentTarget.value;
  updateDisplay();
}

function plusOperator() {
  value += "+";
  updateDisplay();
}

function minusOperator() {
  value += "-";
  updateDisplay();
}

function timesOperator() {
  value += "*";
  updateDisplay();
}

function divOperator() {
  value += "/";
  updateDisplay();
}

function clearOperator() {
  value = "";
  updateDisplay();
}

function equalOperator() {
  value = eval(value);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = value;
}