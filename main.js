function add() {
    let num1Ele = document.getElementById('num1-input');
    let num2Ele = document.getElementById('num2-input');
    let sum = parseFloat(num1Ele.value) + parseFloat(num2Ele.value);
    console.log(sum);
}

function subtract() {
    let num1Ele = document.getElementById('num1-input');
    let num2Ele = document.getElementById('num2-input');
    let sum = parseFloat(num1Ele.value) - parseFloat(num2Ele.value);
    console.log(sum);
}

function multiply() {
    let num1Ele = document.getElementById('num1-input');
    let num2Ele = document.getElementById('num2-input');
    let sum = parseFloat(num1Ele.value) * parseFloat(num2Ele.value);
    console.log(sum);
    // document.getElementsByTagName("body")[0].innerHTML="<span>TEST</span>";
}

function divide() {
    let num1Ele = document.getElementById('num1-input');
    let num2Ele = document.getElementById('num2-input');
    let sum = parseFloat(num1Ele.value) / parseFloat(num2Ele.value);
    console.log(sum);
    // document.getElementById('otter-title').style.backgroundColor="green";
}
