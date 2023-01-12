const totals = [1, 2, 3, 4, 5];

const func = (sum, element) => sum + element;

const add = totals.reduce(func, 0);

//array.reducer((arrow function), initial value);
//array.reducer((sum, element) => sum + element, 0)
console.log(add)