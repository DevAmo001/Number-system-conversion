function convertInput() {
  const inputElement = document.querySelector('.js-input-content').value;
  console.log(inputElement);
  const pickedSystem = document.querySelector('.js-number-systems-options').value;

  let result;

  if (pickedSystem === 'decimal') {
    // convert from decimal to binary, octal, hexadecimal
    const decimalValue = parseInt(inputElement);

    if (isNaN(decimalValue)) {
      alert('Enter a valid decimal number');
      return;
    }
    result = {
      binary: decimalValue.toString(2),
      octal: decimalValue.toString(8),
      hexadecimal: decimalValue.toString(16).toUpperCase()
    };
  } else if (pickedSystem === 'binary') {
    // convert from binary to decimal, octal, hexadecimal
    const decimalValue = parseInt(inputElement, 2);

    if (isNaN(decimalValue)) {
      alert('Enter a valid binary number');
      return;
    }
    result = {
      decimal: decimalValue,
      octal: decimalValue.toString(8),
      hexadecimal: decimalValue.toString(16).toUpperCase()
    };
  } else if (pickedSystem === 'octal') {
    // converting from octal to decimal, binary, hexadecimal
    const decimalValue = parseInt(inputElement, 8);

    if (isNaN(decimalValue)) {
      alert('Enter a valid octal number');
      return;
    }
    result = {
      decimal: decimalValue,
      binary: decimalValue.toString(2),
      hexadecimal: decimalValue.toString(16).toUpperCase()
    };
  } else if (pickedSystem === 'hexadecimal') {
    // converting from hexadecimal to decimal, binary, octal
    const decimalValue = parseInt(inputElement, 16);

    if (isNaN(decimalValue)) {
      alert('enter a valid hexadecimal number');
      return;
    }
    result = {
      decimal: decimalValue,
      binary: decimalValue.toString(2),
      octal: decimalValue.toString(8)
    };
  }
  // update the page
  const resultDisplay = document.querySelector('.js-display-result');
  resultDisplay.innerHTML = '';
  // store properties inside an array and loop through it
 Object.entries(result).forEach(([key, value]) => {
  resultDisplay.innerHTML += `<p>${key}: ${value}</p>`;
 });
}