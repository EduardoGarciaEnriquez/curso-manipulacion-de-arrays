const numbers = [1, 2, 3, 4];

const newObj = numbers.reduce((obj, item) => {
    if(!obj[element]){
        obj[element] = 1;
    }else{
        obj[element] += 1;
    }
}, {})

console.log(newObj);