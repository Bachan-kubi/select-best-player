function getElementValueById(inputId){
    const inputElement = document.getElementById(inputId);
    const inputElementStr = inputElement.value;
    const inputValue = parseFloat(inputElementStr);
    inputElement.value = '';
    return inputValue; 
}

function getTextValue(textId){
    const textElement = document.getElementById(textId);
    const textElementStr = textElement.innerText;
    const textAmount = parseFloat(textElementStr);
    return textAmount;
}

// to set values
function setValuesById(textId, value){
    const txtIdElement = document.getElementById(textId);
    txtIdElement.innerText = value; 
}