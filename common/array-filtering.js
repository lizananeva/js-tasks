// #4 Array filtering

const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => num % 2 === 0 ;

const filterArray = (arrayToFilter, filterFn) => {
  const filteredArray = [];

  arrayToFilter.forEach(number => {
    if (filterFn(number)) {
      filteredArray.push(number);
    }
  });

  return filteredArray;
}

console.log(filterArray(mixedArray, isEven));
