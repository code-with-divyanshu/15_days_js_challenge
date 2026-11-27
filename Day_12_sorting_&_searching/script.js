// Chapter 12: Sorting and searching
//
// Five tasks, one function each. Write each function in place
// of its throw line, then press Check. The menu below is sample
// data you can try your functions on.

export const menu = [
  { name: "Masala chai", price: 40 },
  { name: "bun maska", price: 35 },
  { name: "Cutting chai", price: 25 },
  { name: "Masala chai flask", price: 100 },
  { name: "Parle-G", price: 10 },
];

// Task 1 (interview question): prices sorted as numbers
//
// Return a new array with the same prices from cheapest to
// dearest, compared as numbers, not as text.
//
//   Export:   sortPrices(prices)
//   Returns:  a new array of numbers
//   Example:  sortPrices([40, 25, 100, 5]) gives
//             [5, 25, 40, 100], and sortPrices([10, 9, 1])
//             gives [1, 9, 10]
//   Edge:     an empty list gives []
//
// Careful: do not change the array you are given. The check
// passes a frozen one, and sorting it in place throws.
//
// The interviewer will ask: why does a plain sort put 100
// before 25?
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function sortPrices(prices) {
  return [...prices].sort((a, b) => a - b);
}

console.log("Task 1: prices sorted as numbers ---");

console.log(sortPrices([40, 25, 100, 5])); // [5, 25, 40, 100]
console.log(sortPrices([10, 9, 1])); // [1, 9, 10]

console.log("\n");

// Task 2: the menu A to Z, ignoring capitals
//
// Each item is an object with a name. Return a new array of the
// same item objects sorted by name from A to Z, the way a
// dictionary orders words, so capitals do not matter.
//
//   Export:   sortByName(items)
//   Returns:  a new array of the same item objects
//   Example:  sortByName(menu) gives the items named
//             'bun maska', 'Cutting chai', 'Masala chai',
//             'Masala chai flask', 'Parle-G', in that order
//
// Careful: do not change the array you are given (the check
// passes a frozen one).
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function sortByName(items) {
  return [...items].sort((a, b) => a.name.localeCompare(b.name));
}

console.log("Task 2: the menu A to Z, ignoring capitals ---");

console.log(sortByName(menu).map((item) => item.name)); // ['bun maska', 'Cutting chai', 'Masala chai', 'Masala chai flask', 'Parle-G']

console.log("\n");

// Task 3: rush orders first, then the oldest
//
// Each order has an id, rush (true or false) and minute (the
// minute it was placed). Return a new array of the same orders:
// every rush order before every other order, and inside each of
// those two groups the oldest first (the smallest minute).
//
//   Export:   kitchenOrder(orders)
//   Returns:  a new array of the same order objects
//   Example:  kitchenOrder([
//               { id: 1, rush: false, minute: 5 },
//               { id: 2, rush: true, minute: 9 },
//               { id: 3, rush: false, minute: 2 }])
//             gives the orders with ids 2, 3, 1, in that order
//
// Careful: do not change the array you are given (the check
// passes a frozen one).
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function kitchenOrder(orders) {
  return [...orders].sort((a, b) => {
    if (a.rush && !b.rush) {
      return -1;
    } else if (!a.rush && b.rush) {
      return 1;
    } else {
      return a.minute - b.minute;
    }
  });
}

console.log("Task 3: rush orders first, then the oldest ---");

console.log(
  kitchenOrder([
    { id: 1, rush: false, minute: 5 },
    { id: 2, rush: true, minute: 9 },
    { id: 3, rush: false, minute: 2 },
  ]),
); // [{ id: 2, rush: true, minute: 9 }, { id: 3, rush: false, minute: 2 }, { id: 1, rush: false, minute: 5 }]

console.log("\n");

// Task 4: most visits first, ties in sign-up order
//
// Each customer has a name and visits. Return a new array of
// the same customers, most visits first. Customers with the
// same visits stay in the order they have in the list you are
// given (their sign-up order).
//
//   Export:   leaderboard(customers)
//   Returns:  a new array of the same customer objects
//   Example:  leaderboard([{ name: 'Ravi', visits: 12 },
//               { name: 'Anjali', visits: 30 },
//               { name: 'Meera', visits: 12 }])
//             gives Anjali, Ravi, Meera, in that order
//   Edge:     a tie keeps the original order
//
// Careful: your comparator must return 0 for a tie, or the ties
// can come out swapped. And do not change the array you are
// given (the check passes a frozen one).
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function leaderboard(customers) {
  return [...customers].sort((a, b) => b.visits - a.visits);
}

console.log("Task 4: most visits first, ties in sign-up order ---");

console.log(
  leaderboard([
    { name: "Ravi", visits: 12 },
    { name: "Anjali", visits: 30 },
    { name: "Meera", visits: 12 },
  ]),
); // [{ name: 'Anjali', visits: 30 }, { name: 'Ravi', visits: 12 }, { name: 'Meera', visits: 12 }]

console.log("\n");

// Task 5: find a price by halving the list
//
// sorted is a list of numbers from small to large. Return the
// position of target in it, or -1 when it is not there. Use
// binary search: look at the middle, then keep only the half
// where target can still be.
//
//   Export:   binarySearch(sorted, target)
//   Returns:  a number: a position, or -1
//   Example:  binarySearch([5, 10, 25, 40, 100], 40) gives 3
//             binarySearch([5, 10, 25, 40, 100], 30) gives -1
//   Edge:     an empty list gives -1, and a list of one item
//             works too
//
// Careful: the check runs your search on a sorted list of a
// million numbers and counts every item it reads. More than 60
// reads in one search fails, so indexOf, includes, find or
// visiting every item will not pass.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function binarySearch(sorted, target) {
  let left = 0;
  let right = sorted.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = sorted[mid];

    if (midValue === target) {
      return mid;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log("Task 5: find a price by halving the list ---");

console.log(binarySearch([5, 10, 25, 40, 100], 40)); // 3
console.log(binarySearch([5, 10, 25, 40, 100], 30)); // -1
console.log(binarySearch([], 30)); // -1
console.log(binarySearch([30], 30)); // 0
console.log(binarySearch([30], 20)); // -1
