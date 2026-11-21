// Chapter 6: Template literals
//
// Five tasks, one export each. Write each function in place of
// its throw line (task 1 is a bug to fix, and task 5 is an
// object you fill in), then press Check.

// Task 1: fix the SMS that prints its placeholders
//
// Return Hi, the name, a comma, your, the item and is ready!.
// It is broken now: customers get the placeholders themselves,
// with the dollar signs and braces, instead of their name and
// their item.
//
//   Export:   readyMessage(name, item)
//   Returns:  a string
//   Example:  readyMessage('Anjali', 'masala chai') gives
//             'Hi Anjali, your masala chai is ready!'
//
// Stuck? Press "What do I do next?" under this task. Fix the
// return line below.
export function readyMessage(name, item) {
  return `Hi ${name}, your ${item} is ready!`;
}

console.log("--- Task 1: fix the SMS that prints its placeholders ---");

console.log(readyMessage("Anjali", "masala chai")); // 'Hi Anjali, your masala chai is ready!'

console.log("\n");

// Task 2: one order line with its total
//
// Return the qty, then ' x ', the item, then ' = ' and ₹
// straight before the line total (qty times price).
//
//   Export:   orderLine(item, qty, price)
//   Returns:  a string
//   Example:  orderLine('Masala chai', 2, 40) gives
//             '2 x Masala chai = ₹80'
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function orderLine(item, qty, price) {
  return `${qty} x ${item} = ₹${price * qty}`;
}

console.log("--- Task 2: one order line with its total ---");

console.log(orderLine("Masala chai", 2, 40)); // '2 x Masala chai = ₹80'

console.log("\n");

// Task 3: good morning or good evening
//
// The hour is a whole number from 0 to 23. Before 12, return
// 'Good morning, ' then the name and '!'. From 12 on, return
// 'Good evening, ' then the name and '!'.
//
//   Export:   greeting(name, hour)
//   Returns:  a string
//   Example:  greeting('Meera', 9) gives 'Good morning, Meera!'
//             greeting('Ravi', 16) gives 'Good evening, Ravi!'
//   Edge:     hour 0 is morning, hour 11 is morning, and hour
//             12 is already evening
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function greeting(name, hour) {
  return hour >= 0 && hour < 12
    ? `Good morning, ${name}!`
    : `Good evening, ${name}!`;
}

console.log("--- Task 3: good morning or good evening ---");

console.log(greeting("Meera", 9)); // 'Good morning, Meera!'
console.log(greeting("Ravi", 16)); // 'Good evening, Ravi!'

console.log("\n");

// Task 4: a four-line receipt
//
// Return one string of exactly four lines, separated by line
// breaks. The price is the price of one, and the total is qty
// times price.
//
//   Export:   receipt(order)
//   Returns:  a string of four lines
//   Example:  receipt({ id: 42, customer: 'Ravi',
//             item: 'Masala chai', qty: 2, price: 40 }) gives
//
//   Tapri, Indiranagar
//   Order #42 for Ravi
//   2 x Masala chai @ ₹40
//   Total: ₹80
//
// Careful: no line starts with a space, and there is no line
// break after the last line.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function receipt(order) {
  return `Tapri, Indiranagar
Order #${order.id} for ${order.customer}
${order.qty} x ${order.item} @ ₹${order.price}
Total: ₹${order.price * order.qty}`;
}

console.log("--- Task 4: a four-line receipt ---");

console.log(
  receipt({ id: 42, customer: "Ravi", item: "Masala chai", qty: 2, price: 40 }),
);

// Tapri, Indiranagar
// Order #42 for Ravi
// 2 x Masala chai @ ₹40
// Total: ₹80

console.log("\n");

// Task 5: what each template really gives
//
// Predict the whole text each template below gives, label
// included, and write it as a string under its letter. The
// check works out the same six templates and compares.
//
//   Export:   templatePredictions
//   Returns:  an object with the keys a to f, each a string
//
//   a)  `Total: ${40 + 25}`
//   b)  `Total: ${'40' + 25}`
//   c)  `Items: ${['chai', 'bun maska']}`
//   d)  `Order: ${{ item: 'chai' }}`
//   e)  `Coupon: ${null}`
//   f)  `Rider: ${undefined}`
//
// Stuck? Press "What do I do next?" under this task. Write
// each answer between its quotes.
export const templatePredictions = {
  a: "Total: 65",
  b: "Total: 4025",
  c: "Items: chai,bun maska",
  d: "Order: [object Object]",
  e: "Coupon: null",
  f: "Rider: undefined",
};

console.log("--- Task 5: what each template really gives ---");

console.log(`Total: ${40 + 25}`); // 'Total: 65'
console.log(`Total: ${"40" + 25}`); // 'Total: 4025'
console.log(`Items: ${["chai", "bun maska"]}`); // 'Items: chai,bun maska'
console.log(`Order: ${{ item: "chai" }}`); // 'Order: [object Object]'
console.log(`Coupon: ${null}`); // 'Coupon: null'
console.log(`Rider: ${undefined}`); // 'Rider: undefined'
