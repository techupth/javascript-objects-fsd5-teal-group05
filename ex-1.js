// Exercise #1: Food Order

// Start coding here
const foodOrder = Object.freeze({
    orderNumber: "A0234",
    address: "Bangkok",
    paymentType: "Cash",
    totalPrice: 4500,
    restaurentName: "MK"
});

foodOrder.totalPrice = 5000;
foodOrder.paymentType = "Credit Card";

console.log(foodOrder);