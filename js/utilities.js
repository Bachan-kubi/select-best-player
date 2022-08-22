// retrive value from input
function getElementValueById(inputId){
    const inputElement = document.getElementById(inputId);
    const inputElementStr = inputElement.value;
    const inputValue = parseFloat(inputElementStr);
    inputElement.value = '';
    return inputValue; 
}
// to get value from text targeted

function getTextValue(textId){
    const textElement = document.getElementById(textId);
    const textElementStr = textElement.innerText;
    const textAmount = parseFloat(textElementStr);
    return textAmount;
}

// to set values to targeted text field
function setValuesById(textId, value){
    const txtIdElement = document.getElementById(textId);
    txtIdElement.innerText = value; 
}