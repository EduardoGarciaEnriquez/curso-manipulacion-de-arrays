const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

const deliveredOrders = orders.filter(item => item.delivered);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}

console.log(deliveredOrders);
console.log(search('Nic'));