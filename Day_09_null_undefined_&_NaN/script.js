// Chapter 9: Null, undefined and NaN
//
// Four tasks, one export each. Write each function in place of
// its throw line (task 4 is an array you fill in), then press
// Check.

// Task 1: a number, or null when there is none
//
// When the text is a number (spaces around it allowed), return
// that number. When there is no number, return null: for blank
// text, and for text that Number cannot read.
//
//   Export:   parseQty(text)
//   Returns:  a number, or null
//   Example:  parseQty('3') gives 3
//             parseQty(' 4 ') gives 4
//             parseQty('two') gives null
//   Edge:     '0' gives 0, a real answer, and '' and '   '
//             give null
//
// Careful: Number('') is 0, not NaN, so blank text needs its
// own test.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function parseQty(text) {
  if (typeof text !== "string" || text.trim() === "") {
    return null;
  }
  const num = Number(text);
  return Number.isNaN(num) ? null : num;
}

console.log("--- Task 1: a number, or null when there is none ---");

console.log(parseQty("3")); // 3
console.log(parseQty(" 4 ")); // 4
console.log(parseQty("two")); // null
console.log(parseQty("")); // null
console.log(parseQty("   ")); // null

console.log("\n");

// Task 2: a label for every kind of reading
//
// Return a label for the milk thermometer's reading:
//   undefined   gives 'Not read yet'
//   null        gives 'No sensor'
//   NaN         gives 'Sensor error'
//   any number  gives the number and °C, like '85°C'
//
//   Export:   cleanReading(reading)
//   Returns:  a string
//   Example:  cleanReading(85) gives '85°C'
//   Edge:     0 is a real reading: cleanReading(0) gives '0°C'
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function cleanReading(reading) {
  if (reading === undefined) {
    return "Not read yet";
  }
  if (reading === null) {
    return "No sensor";
  }
  if (Number.isNaN(reading)) {
    return "Sensor error";
  }

  return `${reading}°C`;
}

console.log("--- Task 2: a label for every kind of reading ---");

console.log(cleanReading(85)); // 85°C
console.log(cleanReading(0)); // 0°C
console.log(cleanReading(undefined)); // Not read yet
console.log(cleanReading(null)); // No sensor
console.log(cleanReading(NaN)); // Sensor error

console.log("\n");

// Task 3: defaults that keep a cleared note
//
// Return a new object with item (copied), qty and note. A qty
// that is undefined becomes 1, and a note that is undefined
// becomes ''. Every other value is kept: a qty of 0 stays 0,
// and a note set to null (cleared on purpose) stays null. Do
// not change the order you are given.
//
//   Export:   fillMissing(order)
//   Returns:  { item, qty, note }
//   Example:  fillMissing({ item: 'Masala chai' }) gives
//             { item: 'Masala chai', qty: 1, note: '' }
//             fillMissing({ item: 'Bun maska', qty: 0,
//             note: null }) gives
//             { item: 'Bun maska', qty: 0, note: null }
//   Edge:     a qty set to undefined becomes 1 too
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function fillMissing(order) {
  return {
    item: order.item,
    qty: order.qty === undefined ? 1 : order.qty,
    note: order.note === undefined ? "" : order.note,
  };
}

console.log("--- Task 3: defaults that keep a cleared note ---");

console.log(fillMissing({ item: "Masala chai" })); // { item: 'Masala chai', qty: 1, note: '' }

console.log(fillMissing({ item: "Bun maska", qty: 0, note: null })); // { item: 'Bun maska', qty: 0, note: null }

console.log(fillMissing({ item: "Bun maska", qty: undefined, note: null })); // { item: 'Bun maska', qty: 1, note: null }

console.log(fillMissing({ item: "Bun maska", qty: 0, note: undefined })); // { item: 'Bun maska', qty: 0, note: '' }

console.log(
  fillMissing({ item: "Bun maska", qty: undefined, note: undefined }),
); // { item: 'Bun maska', qty: 1, note: '' }

console.log("\n");

// Task 4 (interview question): NaN, isNaN and Object.is
//
// Predict what each expression below gives, and export the ten
// answers in this order. Nine are true or false, and the typeof
// one is text, written as a string. The check works out the
// same ten expressions and compares.
//
//   Export:   emptinessPredictions
//   Returns:  an array of ten values
//
//   NaN === NaN
//   Number.isNaN(NaN)
//   isNaN('chai')
//   Number.isNaN('chai')
//   Object.is(NaN, NaN)
//   typeof NaN
//   null == undefined
//   null === undefined
//   0 === -0
//   Object.is(0, -0)
//
// The interviewer will ask: what does each of isNaN and
// Number.isNaN check, and when can Object.is and === give
// different answers?
//
// Stuck? Press "What do I do next?" under this task. Write
// your ten answers between the square brackets.
export const emptinessPredictions = [
  false,
  true,
  true,
  false,
  true,
  "number",
  true,
  false,
  true,
  false,
];

console.log("--- Task 4: NaN, isNaN and Object.is ---");

console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true
console.log(isNaN("hello")); // true
console.log(Number.isNaN("hello")); // false
console.log(Object.is(NaN, NaN)); // true
console.log(typeof NaN); // number
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(0 === -0); // true
console.log(Object.is(0, -0)); // false
