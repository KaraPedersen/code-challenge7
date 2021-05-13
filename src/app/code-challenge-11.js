export function returnTen(str) {
  return str.split('').slice((-10));
}
 

export function findMax(matrix) {
  const anArray = [];
  matrix.join().split(',').forEach((item) => anArray.push(Number(item)));

  return Math.max(...anArray);
    
}

export function totalSum(matrix) {
  const anArray = [];
  matrix.join().split(',').forEach((item) => anArray.push(Number(item)));
  return anArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
    
}

export function grandTotal(stores) {
  
  const totals = [];

  for (let i = 0; i < 12; i++) {
    let sum = 0;

    for (let store of stores) {
      sum += store[i];
    }
    totals[i] = sum;
  }
  //   console.log(anArray);
  return totals;

};

export function salesData(hours, data) {
  console.log(hours, data);
  const anArray = [];
  for (let i = 0; i < hours.length; i++) {
    anArray.push({ sales: `${data[i]} cookies`, time: hours[i] });


  }
  return anArray;

}