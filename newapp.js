// generating pin  
function getPin() {
    const pin = Math.round(Math.random()*10000);
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
    const inputField = document.getElementById('generate-input');
    inputField.value = pin;
}

// Bubble function for generating every keys 
document.getElementById('key-pad').addEventListener('click', function (event) {
    const getKyes = event.target.innerText;
    const keyInput = document.getElementById('calc-input');
    if (isNaN(getKyes)) {//here isNaN is a function. and its syntax is isNaN(value)
        if (getKyes == 'C') {
            return keyInput.value = '';
        }
    }
    else {
        const keyValue = keyInput.value;
        const newValue = keyValue + getKyes;
        keyInput.value = newValue;
    }
})

// Matching numbers Function 
function verifyPin() {
    const generateInput = document.getElementById('generate-input').value;
    const keyInput = document.getElementById('calc-input').value;
    const succesNotify = document.getElementById('notify-success');
    const failNotify = document.getElementById('notify-fail');
    if (generateInput == keyInput) {
        succesNotify.style.display = 'block';
        failNotify.style.display = 'none';
    }
    else {
        failNotify.style.display = 'block';
        succesNotify.style.display = 'none';
    }
}