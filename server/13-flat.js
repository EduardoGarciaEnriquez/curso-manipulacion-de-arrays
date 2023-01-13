const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const flattedLvl1 = matriz.flat()
const flattedLvl3 = matriz.flat(3)

console.log('flatted only once: ', flattedLvl1);
console.log('flatted 3 times: ', flattedLvl3);