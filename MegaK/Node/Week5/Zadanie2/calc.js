function cal (operation, num1, num2) {
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
case 'substract':
      result = num1 - num2;
      break;
case 'divide':
      result = num1 / num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    default:
      result = 'Operation is not supported';
      break;
  }
  return result;
}

module.exports = {
  cal
};