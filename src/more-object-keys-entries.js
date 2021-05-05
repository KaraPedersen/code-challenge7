export function getHouses(obj) {
  const newObject = Object.values(obj);
  return newObject.map(a => a.house);
}

export function updateNumbers(obj) {
  const numbers = Object.entries(obj);
  let newString = '';
  let newArray = [];

  numbers.map(item => {
    return newArray.push(item.toString());

  });
  return newArray;
}
