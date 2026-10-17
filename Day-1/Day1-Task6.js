function calculateBill(price, quantity) {
    const total = price * quantity;
    return total;
}

const bill = calculateBill(500, 3);

console.log("Total Shopping Bill:", bill);
