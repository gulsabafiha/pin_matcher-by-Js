function getPin() {
    const pin = Math.round(Math.random() * 10000);
    console.log(pin);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }  
}

function generatePin() {
    const pin = getPin();
    document.getElementById('generate-input').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
    const previousNum = calcInput.value;
    const newNum = previousNum + number;
    calcInput.value = newNum;
    }
})

function verifyPin() {
    const pin = document.getElementById('generate-input').value;
    const typedNum = document.getElementById('calc-input').value;
    const succesNotify = document.getElementById('notify-success');
    const failNotify = document.getElementById('notify-fail');
    if (pin == typedNum) {
        
        succesNotify.style.display = 'block';
        failNotify.style.display = 'none';
    }
    else {
        succesNotify.style.display = 'none';
        failNotify.style.display = 'block';
    }
}
