"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4 * a * c;
   
  if (discriminant === 0) { 
    arr[0] = -b / (2 * a);
  }
  else {
    if (discriminant > 0) { 
      arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
      arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
    }
  }
 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let payment;
  let totalAmount;
  let sumCredit = amount - contribution;
  let p = percent / 100 / 12;
    
  payment = sumCredit * (p + (p / (Math.pow(1 + p, countMonths) - 1)));
  totalAmount = parseFloat((payment * countMonths).toFixed(2));
  
  return totalAmount;
}

function testCase(taskNumber) {
  if (taskNumber === 1) {
    let argumentsOfEquation = [];
 
    argumentsOfEquation[0] = +prompt('Уравнение вида ax² + bx + c = 0. Введите коэффициент а: ');
    argumentsOfEquation[1] = +prompt('Введите коэффициент b: ');
    argumentsOfEquation[2] = +prompt('Введите коэффициент c: ');
 
    return solveEquation(argumentsOfEquation[0], argumentsOfEquation[1], argumentsOfEquation[2]); 
  }
  else {
    if (taskNumber === 2) {
      let dataCredit = [];
 
      dataCredit[0] = +prompt('Введите процентную ставку: ');
      dataCredit[1] = +prompt('Введите первоначальный взнос: ');
      dataCredit[2] = +prompt('Введите сумму кредита: ');
      dataCredit[3] = +prompt('Введите количество месяцев: ');
 
      return calculateTotalMortgage(dataCredit[0], dataCredit[1], dataCredit[2], dataCredit[3]);
    }
  }
}

alert(testCase(1));
alert(testCase(2));