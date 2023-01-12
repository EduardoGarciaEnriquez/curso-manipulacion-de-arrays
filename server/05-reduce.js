const totals = [1, 2, 3, 4, 5];

const func = (sum, element) => sum + element;

const add = totals.reduce(func, 0);

//array.reducer((arrow function), initial state);
//array.reducer((sum, element) => sum + element, initial state)
console.log(add)