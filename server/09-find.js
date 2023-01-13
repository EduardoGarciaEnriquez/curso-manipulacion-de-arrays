const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

const ans = products.find(item => item.id === '🌭')
const ansIndex = products.findIndex(item => item.id === '🌭') //P.N.: if there's no match will return -1 ;) 
console.log('answer: ', ans)
console.log('answer index: ', ansIndex) 