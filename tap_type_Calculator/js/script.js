const handleClick = (value) => {
    let inputField = document.getElementById('inputField');
    let currentText = inputField.value;

    if (value === 'C') {
        inputField.value = '0';
        inputField.style.color = 'white'
    } else if (value === '=') {
        try {
            inputField.value = eval(currentText);
        } catch (error) {
            inputField.value = 'Invalid Expression';
            inputField.style.color = 'red';
        }
    } else if (value === '%') {
        try {
            inputField.value = eval(currentText) / 100;
        } catch (error) {
            inputField.value = 'Invalid Expression';
            inputField.style.color = 'red';
        }
    } else if (value === 'bs') {
        inputField.value = currentText.length > 1 ? currentText.slice(0, -1) : '0';
    } else if (value === 'CE') {
        let parts = currentText.split(/[\+\-\*\/]/);
        let lastNumber = parts[parts.length - 1];
        inputField.value = currentText.slice(0, -lastNumber.length) || '0';
    }

    else {
        if (currentText === '0') {
            inputField.value = value;
        } else {
            inputField.value += value;
        }
    }
};

document.addEventListener('keydown', (e) => {
    const key = e.key;
    // alert(key)
    const operators = ['+', '-', '*', '/', '%'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    if (numbers.includes(key) || operators.includes(key) || key === '.') {
        handleClick(key);
    } else if (key === 'Enter') {
        handleClick('=');
    } else if (key === 'Escape') {
        handleClick('C');
    } else if (key === 'Backspace') {
        handleClick('bs');
    }
});