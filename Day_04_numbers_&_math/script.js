// Chapter 4: Numbers and Math
//
// Five tasks, one function each. Write each function in place
// of its throw line, then press Check.

// Task 1: whole-rupee shares and what is left
//
// total is a bill in whole rupees, and people is how many share
// it (at least 1). Return each, the whole rupees every person
// pays (the share rounded down), and left, the rupees left
// over.
//
//   Export:   splitBill(total, people)
//   Returns:  { each, left }
//   Example:  splitBill(125, 3) gives { each: 41, left: 2 }
//   Edge:     an even split leaves 0: splitBill(120, 3) gives
//             { each: 40, left: 0 }
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function splitBill(total, people) {
  return {
    each: Math.floor(total / people),
    left: total % people,
  };
}

console.log(splitBill(125, 3)); // { each: 41, left: 2 }
console.log(splitBill(120, 3)); // { each: 40, left: 0 }

// Task 2: the number of cups from typed text
//
// Read the whole number at the start of what the customer typed
// and return it as a number. Spaces before the number are fine,
// and reading stops at the first character that is not a digit.
//
//   Export:   parseCups(text)
//   Returns:  a number
//   Example:  parseCups('3 cups') gives 3
//             parseCups('  4 ') gives 4
//             parseCups('2.5') gives 2
//   Edge:     text that does not start with a number gives 0:
//             parseCups('two') and parseCups('') both give 0
//
// Careful: NaN is not equal to anything, not even NaN, so
// triple equals cannot find it.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function parseCups(text) {
  const cups = parseInt(text, 10);

  if (Number.isNaN(cups)) {
    return 0;
  }
  return cups;
}

console.log(parseCups("3 cups")); // 3
console.log(parseCups("  4 ")); // 4
console.log(parseCups("2.5")); // 2
console.log(parseCups("two")); // 0
console.log(parseCups("")); // 0

// Task 3 (interview question): 0.1 + 0.2 that comes out as 0.3
//
// Add two wallet amounts in rupees and round the sum to the
// nearest paisa (two decimal places). Return a number, not
// text.
//
//   Export:   addMoney(a, b)
//   Returns:  a number
//   Example:  addMoney(0.1, 0.2) gives 0.3
//             addMoney(19.99, 0.01) gives 20
//   Edge:     whole amounts stay whole: addMoney(40, 25)
//             gives 65
//
// The interviewer will ask: why is 0.1 + 0.2 not 0.3 in
// JavaScript, and how do you handle money safely?
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function addMoney(a, b) {
  return Number((a + b).toFixed(2));
}

console.log(addMoney(0.1, 0.2)); // 0.3
console.log(addMoney(19.99, 0.01)); // 20
console.log(addMoney(40, 25)); // 65

// Task 4: a price with two decimals
//
// Return text: the rupee sign ₹ followed by the amount rounded
// to exactly two decimal places, with no space between them.
//
//   Export:   formatPrice(amount)
//   Returns:  a string
//   Example:  formatPrice(42.5) gives '₹42.50'
//             formatPrice(12.345678) gives '₹12.35'
//   Edge:     a whole amount still shows two decimals:
//             formatPrice(40) gives '₹40.00'
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function formatPrice(amount) {
  return "₹" + amount.toFixed(2);
}

console.log(formatPrice(42.5)); // '₹42.50'
console.log(formatPrice(40)); // '₹40.00'
console.log(formatPrice(12.345678)); // '₹12.35'

// Task 5: whole numbers from 1 to 20
//
// Return true only when qty is a whole number, of the number
// type, from 1 to 20 (1 and 20 included), and false for
// everything else.
//
//   Export:   isValidQty(qty)
//   Returns:  true or false
//   Example:  isValidQty(2) gives true
//             isValidQty(20) gives true
//   Edge:     0, 21, -3, 2.5, NaN and the text '2' give false
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function isValidQty(qty) {
  return Number.isInteger(qty) && qty >= 1 && qty <= 20;
}

console.log(isValidQty(2)); // true
console.log(isValidQty(20)); // true
console.log(isValidQty(0)); // false
console.log(isValidQty(21)); // false
console.log(isValidQty(-3)); // false
console.log(isValidQty(2.5)); // false
console.log(isValidQty(NaN)); // false
console.log(isValidQty("2")); // false
