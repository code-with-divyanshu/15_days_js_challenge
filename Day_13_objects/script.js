// Chapter 13: Objects
//
// Six tasks, one export each. Write each function in place of
// its throw line, then press Check. The menu below is sample
// data you can try your functions on.

export const menu = {
  "masala chai": 40,
  "cutting chai": 25,
  "bun maska": 35,
  "parle-g": 10,
  water: 0,
};

// Task 1: a price by name, only for real menu items
//
// prices is an object of item names and prices, like menu.
// Return the price of the item called name. When the object
// does not have that key itself, return null. Keys every object
// inherits, such as 'toString' and 'constructor', are not menu
// items and give null too.
//
//   Export:   priceOf(prices, name)
//   Returns:  a number, or null
//   Example:  priceOf(menu, 'bun maska') gives 35
//   Edge:     priceOf(menu, 'water') gives 0, and
//             priceOf(menu, 'toString') and
//             priceOf(menu, 'samosa') give null
//
// Careful: a price of 0 is a real price, not a missing one.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function priceOf(prices, name) {
  if (!prices || !Object.hasOwn(prices, name)) {
    return null;
  }
  return prices[name];
}

console.log("Task 1: a price by name, only for real menu items ---");

console.log(priceOf(menu, "bun maska")); // 35
console.log(priceOf(menu, "water")); // 0
console.log(priceOf(menu, "toString")); // null
console.log(priceOf(menu, "samosa")); // null

console.log("\n");

// Task 2: how many of each item
//
// Take an array of item names and return a new object with one
// key per name, holding how many times that name appears. Names
// are compared exactly, so 'Parle-G' and 'parle-g' would be two
// keys. The keys may come in any order.
//
//   Export:   tallyItems(names)
//   Returns:  an object of counts
//   Example:  tallyItems(['masala chai', 'bun maska',
//               'masala chai'])
//             gives { 'masala chai': 2, 'bun maska': 1 }
//   Edge:     an empty array gives {}
//
// Careful: every call starts a fresh tally, so a second call
// must not see the first call's counts. Do not change the array
// you are given (the check passes a frozen one).
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function tallyItems(names) {
  const counts = {};

  for (const name of names) {
    counts[name] = Object.hasOwn(counts, name) ? counts[name] + 1 : 1;
  }

  return counts;
}

console.log("Task 2: how many of each item ---");

console.log(tallyItems(["masala chai", "bun maska", "masala chai"])); // { 'masala chai': 2, 'bun maska': 1 }
console.log(tallyItems([])); // {}

console.log("\n");

// Task 3: Ravi's stock update with computed keys
//
// Return a new object with two keys built from the item's name:
// the name itself, holding qty, and the name followed by Low,
// holding true when fewer than 10 are left, false otherwise.
//
//   Export:   stockPatch(item, qty)
//   Returns:  an object with two keys
//   Example:  stockPatch('ginger', 4) gives
//             { ginger: 4, gingerLow: true }
//             stockPatch('milk', 30) gives
//             { milk: 30, milkLow: false }
//   Edge:     exactly 10 is not low: stockPatch('sugar', 10)
//             gives { sugar: 10, sugarLow: false }. 0 is low:
//             stockPatch('elaichi', 0) gives
//             { elaichi: 0, elaichiLow: true }
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function stockPatch(item, qty) {
  return {
    [item]: qty,
    [`${item}Low`]: qty < 10,
  };
}

console.log("Task 3: Ravi's stock update with computed keys ---");

console.log(stockPatch("ginger", 4)); // { ginger: 4, gingerLow: true }
console.log(stockPatch("milk", 30)); // { milk: 30, milkLow: false }
console.log(stockPatch("sugar", 10)); // { sugar: 10, sugarLow: false }
console.log(stockPatch("elaichi", 0)); // { elaichi: 0, elaichiLow: true }

console.log("\n");

// Task 4: the delivery line from a nested address
//
// The order has an id and a customer object. The customer has a
// name and maybe an address object with an area and a city.
// Return the delivery line. When the customer has no address,
// return the pickup line instead.
//
//   Export:   deliveryLine(order)
//   Returns:  a string
//   Example:  deliveryLine({ id: 101,
//               customer: { name: 'Anjali', address: {
//                 area: 'Koramangala', city: 'Bengaluru',
//               } } })
//             gives
//             'Order 101 to Anjali, Koramangala, Bengaluru'
//   Edge:     deliveryLine({ id: 102,
//               customer: { name: 'Ravi' } })
//             gives 'Order 102: Ravi picks up at the stall'
//
// Careful: reading a key of a missing address throws an error.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function deliveryLine(order) {
  const { id, customer } = order;

  const address = customer.address;

  if (address) {
    return `Order ${id} to ${customer.name}, ${address.area}, ${address.city}`;
  }

  return `Order ${id}: ${customer.name} picks up at the stall`;
}

console.log("Task 4: the delivery line from a nested address ---");

console.log(
  deliveryLine({
    id: 101,
    customer: {
      name: "Anjali",
      address: { area: "Koramangala", city: "Bengaluru" },
    },
  }),
); // 'Order 101 to Anjali, Koramangala, Bengaluru'

console.log(
  deliveryLine({
    id: 102,
    customer: { name: "Ravi" },
  }),
); // 'Order 102: Ravi picks up at the stall'

console.log("\n");

// Task 5: a profile without the private details
//
// Return a new object with every key and value the customer
// has, except phone and upiId. Other keys, such as a nested
// address, come along as they are. The result must not have a
// phone or upiId key at all.
//
//   Export:   publicProfile(customer)
//   Returns:  a new object
//   Example:  publicProfile({ name: 'Anjali', visits: 12,
//               phone: '98450 12345', upiId: 'anjali@okbank' })
//             gives { name: 'Anjali', visits: 12 }
//   Edge:     publicProfile({ name: 'Ravi', phone: '1' }) gives
//             { name: 'Ravi' }
//
// Careful: the customer you are given must not change, so do
// not delete from it.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function publicProfile(customer) {
  const { phone, upiId, ...profile } = customer;

  return profile;
}

console.log("Task 5: a profile without the private details ---");

console.log(
  publicProfile({
    name: "Anjali",
    visits: 12,
    phone: "98450 12345",
    upiId: "anjali@okbank",
  }),
); // { name: 'Anjali', visits: 12 }

console.log(
  publicProfile({
    name: "Ravi",
    phone: "1",
  }),
); // { name: 'Ravi' }

console.log("\n");

// Task 6 (interview question): references, keys and in
//
// Do not run this code. Predict what each numbered line gives
// and export your seven answers in this order, as real values
// (numbers, true or false, undefined), not as text. The check
// runs the same code and compares.
//
//   Export:   predictions
//   Returns:  an array of seven values
//
//   const a = { item: 'masala chai', price: 40 };
//   const b = a;
//   b.price = 45;
//   const c = { item: 'masala chai', price: 45 };
//   const key = 'price';
//   const prices = { 'masala chai': 40 };
//
//   1. a.price
//   2. a === b
//   3. a === c
//   4. a.key
//   5. a[key]
//   6. 'toString' in prices
//   7. Object.hasOwn(prices, 'toString')
//
// The interviewer will ask: why is a === c false when the two
// objects look the same?
//
// Stuck? Press "What do I do next?" under this task. Write
// your seven answers between the square brackets.
export const predictions = [45, true, false, undefined, 45, true, false];

console.log("Task 6 (interview question): references, keys and in ---");

console.log(predictions); // [45, true, false, undefined, 45, true, false]
