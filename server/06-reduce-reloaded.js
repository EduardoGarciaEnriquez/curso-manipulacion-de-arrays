const numbers = [1, 2, 3, 4];

const newObj = numbers.reduce((obj, element) => {
    if(!obj[element]){
        obj[element] = 1;
    }else{
        obj[element] = obj[element] + 1;
    }
    return obj
}, {})

console.log(newObj);