// Day 1.2 - Task 6: Execution Flow

function calculateTotal(price, quantity) {
  const total = price * quantity;
  return total;
}

const result = calculateTotal(250, 4);

console.log(result);

// Output:
// 1000

// Execution flow:
//
// 1. Global execution starts.
// 2. calculateTotal(250, 4) is called.
// 3. A new function execution context is created.
// 4. price receives 250 and quantity receives 4.
// 5. total is calculated: 250 * 4 = 1000.
// 6. return sends 1000 back to the caller.
// 7. The function execution context is removed
//    from the call stack.
// 8. result receives 1000.
// 9. console.log(result) prints 1000.
//
// The return statement sends a value back to the caller.
// console.log() displays the value but does not return
// that displayed value as the function's result.
