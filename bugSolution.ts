function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

const result1 = add(5, 3); // 8
const result2 = subtract(10, 4); // 6
const result3 = multiply(7, 2); // 14
const result4 = divide(15, 3); // 5

console.log(result1, result2, result3, result4);

//Improved Type Safety
function addSafe(a: number, b: number): number {
    return a + b;
  }
  
  function subtractSafe(a: number, b: number): number {
    return a - b;
  }
  
  function multiplySafe(a: number, b: number): number {
    return a * b;
  }
  
  function divideSafe(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
  
  const resultSafe1 = addSafe(5, 3); // 8
  const resultSafe2 = subtractSafe(10, 4); // 6
  const resultSafe3 = multiplySafe(7, 2); // 14
  const resultSafe4 = divideSafe(15, 3); // 5
  
  console.log(resultSafe1, resultSafe2, resultSafe3, resultSafe4);