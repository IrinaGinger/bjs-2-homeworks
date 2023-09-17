function getArrayParams(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  else {  
    let min = arr[0];
    let max = arr[0];
    let sum = arr[0];
    let avg;
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      else if (arr[i] > max) {
        max = arr[i];
      }

      sum += arr[i];
    } 

    avg = parseFloat((sum / arr.length).toFixed(2));

    return { min: min, max: max, avg: avg };
  }
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  else {  
    const initialValue = 0;
    let sumWithInitial = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

    return sumWithInitial;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  else {  
    let min, max;

    min = Math.min.apply(null, arr);
    max = Math.max.apply(null, arr);

    return max - min;
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  else {  
    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      }
      else {
        sumOddElement += arr[i];
      }
    }
  
    return sumEvenElement - sumOddElement;
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  else {  
    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }

    return sumEvenElement / countEvenElement;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  let funcResult;

  for (let i = 1; i < arrOfArr.length; i++) {
    funcResult = func(...arrOfArr[i]);

    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  } 

  return maxWorkerResult;
}
