// Chapter 1: Hello, console
//
// Five tasks, one function each. Write each function in place
// of its throw line, then press Check.

// Task 1: one line for each new order
//
// Print one line for a new order with console.log: the word
// Order and a colon, the item, the word for, then the customer,
// with one space between each part. Use exactly one console.log
// call, and return nothing.
//
//   Export:   logOrder(customer, item)
//   Returns:  nothing
//   Prints:   with console.log, for
//             logOrder('Ravi', 'masala chai'):
//             Order: masala chai for Ravi
//
// Careful: the customer comes first in the brackets, but last
// in the line.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function logOrder(customer, item) {
  console.log("Order:", item, "for", customer);
}

console.log("--- Task 1: one line for each new order ---");

logOrder("Ravi", "masala chai"); // Order: masala chai for Ravi

console.log("\n");

// Task 2: warn when an item runs low
//
// When fewer than 10 are left, print a warning with
// console.warn and return true. When 10 or more are left, print
// nothing and return false.
//
//   Export:   warnLowStock(item, left)
//   Returns:  true or false
//   Prints:   with console.warn, for warnLowStock('ginger', 4):
//             Low stock: ginger (4 left)
//   Example:  warnLowStock('ginger', 4) gives true
//             warnLowStock('sugar', 25) gives false
//   Edge:     10 left is not low: false, and no warning
//
// Careful: use console.warn, not console.log. The check reads
// the warnings, and a line printed with log is not one.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function warnLowStock(item, left) {
  if (left < 10) {
    console.warn("Low stock:", item, "(" + left, "left)");
    return true;
  }
  return false;
}

console.log("--- Task 2: warn when an item runs low ---");

console.log(warnLowStock("ginger", 4)); // true
console.log(warnLowStock("sugar", 25)); // false

console.log("\n");

// Task 3: the menu as a two-column table
//
// Print the menu you are given with one console.table call that
// shows only two columns: name, then price. Hand console.table
// the menu itself, as it is (the check looks for the very same
// array), and the column names as an array. Return nothing.
//
//   Export:   showMenu(menu)
//   Returns:  nothing
//   Prints:   with console.table, a table with the columns
//             (index), name and price, one row per menu item
//   Example:  showMenu([{ name: 'Masala chai', price: 40,
//             stock: 120 }]) shows Masala chai and 40, not 120
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function showMenu(menu) {
  console.table(menu, ["name", "price"]);
}

console.log("--- Task 3: the menu as a two-column table ---");

showMenu([{ name: "Masala chai", price: 40, stock: 120 }]); // shows Masala chai and 40, not 120

console.log("\n");

// Task 4: count every ring of the bell
//
// Every call counts one ring with console.count under the
// label order bell (exactly that text, all lower case). Return
// nothing.
//
//   Export:   ringBell()
//   Returns:  nothing
//   Prints:   with console.count, order bell: 1 on the first
//             call, then order bell: 2, and so on
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function ringBell() {
  console.count("order bell");
}

console.log("--- Task 4: count every ring of the bell ---");

ringBell(); // order bell: 1
ringBell(); // order bell: 2
ringBell(); // order bell: 3

console.log("\n");

// Task 5: time the 4 pm rush and keep its result
//
// work is a function. Start a timer with console.time under the
// label rush hour, run work exactly once, stop the timer with
// console.timeEnd under the same label, and return whatever
// work returned.
//
//   Export:   timeRush(work)
//   Returns:  what work returned
//   Prints:   with console.timeEnd, rush hour: and the time,
//             like rush hour: 0.008ms (it changes every run)
//   Example:  if work returns 42, timeRush(work) gives 42
//
// Careful: the timer starts before work runs and stops after it
// finishes, so work must not run on the return line.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function timeRush(work) {
  console.time("rush hour");
  const result = work();
  console.timeEnd("rush hour");
  return result;
}

console.log("--- Task 5: time the 4 pm rush and keep its result ---");

timeRush(() => 42); // rush hour: 0.008ms (it changes every run)
