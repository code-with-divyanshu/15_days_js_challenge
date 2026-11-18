// Chapter 3: Data types
//
// Five tasks, one export each. Write each function in place of
// its throw line (task 2 is an array you fill in), then press
// Check.

// Task 1: the type of any value
//
// Return the type of the value as text, like typeof, with two
// differences: null gives 'null', and any array gives 'array'.
// For every other value, return exactly what typeof gives.
//
//   Export:   describeValue(value)
//   Returns:  a string
//   Example:  describeValue(true) gives 'boolean'
//             describeValue(null) gives 'null'
//             describeValue([1, 2]) gives 'array'
//   Edge:     an empty array [] gives 'array' too
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function describeValue(value) {
  if (value === null) {
    return "null";
  }
  if (Array.isArray(value)) {
    return "array";
  }
  return typeof value;
}

// Task 2 (interview question): what typeof really says
//
// Predict what each typeof below returns, and export the eight
// answers as strings, in this order. The check runs the same
// eight typeof expressions and compares.
//
//   Export:   typeofPredictions
//   Returns:  an array of eight strings
//
//   typeof null
//   typeof []
//   typeof NaN
//   typeof undefined
//   typeof function () {}
//   typeof 'Masala chai'
//   typeof 42n
//   typeof { item: 'Bun maska' }
//
// The interviewer will ask: which of these surprise people,
// and why does JavaScript give those answers?
//
// Stuck? Press "What do I do next?" under this task. Write
// your eight answers between the square brackets.
export const typeofPredictions = [
  "object",
  "object",
  "number",
  "undefined",
  "function",
  "string",
  "bigint",
  "object",
];

// Task 3: a real copy with the next id
//
// Return a new order with the same customer, the same items and
// the next id (the order's id plus 1). The copy must share
// nothing with the original: changing the copy's customer, or
// adding to its items, must leave the original as it was.
//
//   Export:   repeatOrder(order)
//   Returns:  a new order object
//   Example:  repeatOrder({ id: 7, customer: 'Anjali',
//             items: ['masala chai'] }) gives
//             { id: 8, customer: 'Anjali',
//               items: ['masala chai'] }
//
// Careful: spread copies one level only. The copy needs its own
// items array, or the original's items change with it.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function repeatOrder(order) {
  return { ...order, id: order.id + 1, items: [...order.items] };
}

// Task 4: same item and same qty
//
// Return true when both orders are for the same item and the
// same qty, even when they are two different objects, and false
// otherwise.
//
//   Export:   isSameOrder(a, b)
//   Returns:  true or false
//   Example:  isSameOrder({ item: 'Bun maska', qty: 2 },
//             { item: 'Bun maska', qty: 2 }) gives true
//   Edge:     a qty of 2 and a qty of '2' are not the same, and
//             the same object passed twice is the same order
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function isSameOrder(a, b) {
  return a.item === b.item && a.qty === b.qty;
}

// Task 5: a deep copy of the stock
//
// Return a copy of the stock that shares nothing with it, at
// any level. After the snapshot, changing a count inside the
// stock or adding a new shelf to it must not change the
// snapshot.
//
//   Export:   snapshotStock(stock)
//   Returns:  a new object of objects
//   Example:  snapshotStock({ masala: { kulhads: 50,
//             ginger: 12 } }) gives
//             { masala: { kulhads: 50, ginger: 12 } },
//             with a new masala object inside
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function snapshotStock(stock) {
  return structuredClone(stock);
}
