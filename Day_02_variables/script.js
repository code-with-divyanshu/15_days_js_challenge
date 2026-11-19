// Chapter 2: Variables
//
// Five tasks. Tasks 1 to 3 are bugs: the code is there and it
// is wrong, so fix it. Tasks 4 and 5 ask you to predict what
// short snippets do. Press Check when you are ready.

// Task 1: fix the token machine
//
// nextToken hands out the next token number: 1 on the first
// call, then 2, then 3. It is broken now: the first call stops
// with an error. Fix it.
//
//   Export:   nextToken()
//   Returns:  a number
//   Example:  three calls in a row give 1, then 2, then 3
//
// lastToken is the last token handed out. It starts at 0
// because nobody has had a token yet.
//
// Stuck? Press "What do I do next?" under this task. Fix the
// code below.
let lastToken = 0;

export function nextToken() {
  lastToken += 1;
  return lastToken;
}

console.log("--- Task 1: fix the token machine ---");

console.log(lastToken); // 0
console.log(nextToken()); // 1
console.log(nextToken()); // 2
console.log(nextToken()); // 3
console.log(lastToken); // 3

console.log("\n");

// Today's menu. Other screens hold on to this exact array.
export let menu = ["masala chai", "cutting chai", "bun maska"];

// Task 2: add to the same menu
//
// addToMenu adds an item to the end of menu and returns how
// many items menu has now. It is broken now: it stops with an
// error. Fix it.
//
//   Export:   addToMenu(item)
//   Returns:  a number, the new length of menu
//   Example:  addToMenu('Parle-G') gives 4, and then
//             addToMenu('filter coffee') gives 5
//
// Careful: other screens hold on to the menu array, so it must
// stay the very same array, with the new items in it. Making
// menu a let and building a new array stops the error, but the
// screens would still show the old one.
//
// Stuck? Press "What do I do next?" under this task. Fix the
// code below.
export function addToMenu(item) {
  menu.push(item);
  return menu.length;
}

console.log("--- Task 2: add to the same menu ---");

console.log(addToMenu("Parle-G")); // 4
console.log(addToMenu("filter coffee")); // 5

console.log("\n");

// Task 3: fix the regular's price tag
//
// Everyone sees the menu price. Regulars also see their own
// price, which is ₹5 less. It is broken now: a regular sees
// their price as the menu price too,
// 'Masala chai: ₹35 (you pay ₹35)'. Fix it.
//
//   Export:   priceTag(item, isRegular)
//   Returns:  a string
//   Example:  with chai = { name: 'Masala chai', price: 40 },
//             priceTag(chai, false) gives 'Masala chai: ₹40'
//             priceTag(chai, true) gives
//             'Masala chai: ₹40 (you pay ₹35)'
//
// Stuck? Press "What do I do next?" under this task. Fix the
// code below.
export function priceTag(item, isRegular) {
  const price = item.price;
  let note = "";
  if (isRegular) {
    const price = item.price - 5; // the regular's price, for the note only
    note = ` (you pay ₹${price})`;
  }
  return `${item.name}: ₹${price}${note}`;
}

console.log("--- Task 3: fix the regular's price tag ---");

const chai = { name: "Masala chai", price: 40 };
console.log(priceTag(chai, false)); // 'Masala chai: ₹40'
console.log(priceTag(chai, true)); // 'Masala chai: ₹40 (you pay ₹35)'

console.log("\n");

// Task 4: which lines work and which throw
//
// Predict each snippet. For each one write, as a string,
// exactly what console.log prints (a printed 12 is the string
// '12'), or the error's name, 'ReferenceError' or 'TypeError',
// if the snippet throws. The check runs the same snippets and
// compares.
//
//   Export:   scopePredictions
//   Returns:  an object with the keys a, b, c and d
//
// a)  if (true) { var ginger = 'fresh'; }
//     console.log(ginger);
//
// b)  if (true) { let tulsi = 'fresh'; }
//     console.log(tulsi);
//
// c)  const price = 40;
//     price = 45;
//     console.log(price);
//
// d)  const item = { name: 'Masala chai', price: 40 };
//     item.price = 45;
//     console.log(item.price);
//
// Stuck? Press "What do I do next?" under this task. Write
// your four answers in place of the empty strings.
export const scopePredictions = {
  a: "fresh",
  b: "ReferenceError",
  c: "TypeError",
  d: "45",
};

console.log("--- Task 4: which lines work and which throw ---");
if (true) {
  var ginger = "fresh";
}
console.log(ginger); // 'fresh'

console.log("\n");

// if (true) {
//   let tulsi = "fresh";
// }

// console.log(tulsi); // ReferenceError

// const price = 40;
// // price = 45; // TypeError
// console.log(price); // 40

// const item = { name: "Masala chai", price: 40 };
// item.price = 45;
// console.log(item.price); // 45

// Task 5 (interview question): reading a name before its line
//
// Same rules: as a string, what console.log prints, or the
// error's name, 'ReferenceError' or 'TypeError', if the snippet
// throws. The check runs the same snippets and compares.
//
//   Export:   hoistingPredictions
//   Returns:  an object with the keys a, b, c and d
//
// a)  console.log(token);
//     var token = 7;
//
// b)  console.log(order);
//     let order = 'masala chai';
//
// c)  console.log(typeof neverDeclared);
//
// d)  console.log(typeof rider);
//     let rider = 'Ravi';
//
// The interviewer will ask: what does hoisting set up before
// the code runs, and what is the temporal dead zone?
//
// Stuck? Press "What do I do next?" under this task. Write
// your four answers in place of the empty strings.
export const hoistingPredictions = {
  a: "undefined",
  b: "ReferenceError",
  c: "undefined",
  d: "ReferenceError",
};

console.log("--- Task 5: reading a name before its line ---");

console.log(token); // undefined
var token = 7;

// console.log(order); // ReferenceError
// let order = "masala chai";

// console.log(typeof neverDeclared); // undefined

// console.log(typeof rider); // ReferenceError
// let rider = "Ravi";

console.log("\n");
