var result = document.getElementById("result");

function attachToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function calculate() {
    try {
        var value = eval(result.value);
        result.value = value;
    } catch (error) {
        alert("Invalid calculation");
    }
}

function backspace() {
	var input = document.getElementById("result").value;
	document.getElementById("result").value = input.slice(0, -1);
}