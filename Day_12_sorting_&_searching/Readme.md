# Chapter 12: Sorting and searching

## 1. `Interview` sortPrices, prices sorted as numbers

Write sortPrices(prices). Return a new array with the same prices from cheapest to dearest, compared as numbers, not as text: sortPrices([40, 25, 100, 5]) gives [5, 25, 40, 100], and sortPrices([10, 9, 1]) gives [1, 9, 10].
An empty list gives []. Do not change the array you are given: the check passes a frozen one, and sorting a frozen array in place throws an error.

## 2. sortByName: the menu A to Z, ignoring capitals

Write sortByName(items). Each item is an object with a name. Return a new array of the same item objects sorted by name from A to Z, the way a dictionary orders words, so capital letters do not matter: 'bun maska' comes before 'Cutting chai'.
Do not change the array you are given: the check passes a frozen one.

## 3. kitchenOrder: rush orders first, then the oldest

Write kitchenOrder(orders). Each order has an id, rush (true or false) and minute (the minute it was placed). Return a new array of the same orders for the kitchen screen: every rush order before every order that is not a rush, and inside each of those two groups the oldest first, which means the smallest minute first.
Do not change the array you are given: the check passes a frozen one.

## 4. leaderboard: most visits first, ties in sign-up order

Write leaderboard(customers). Each customer has a name and visits. Return a new array of the same customers, most visits first. Customers with the same number of visits must stay in the order they have in the list you are given (their sign-up order), so the comparator must return 0 for a tie.
Do not change the array you are given: the check passes a frozen one.

## 5. binarySearch: find a price by halving the list

Write binarySearch(sorted, target). sorted is a list of numbers from small to large. Return the position of target in it, or -1 when it is not there: binarySearch([5, 10, 25, 40, 100], 40) gives 3, and binarySearch([5, 10, 25, 40, 100], 30) gives -1. An empty list gives -1, and a list of one item works too.
Use binary search. The check runs it on a sorted list of a million numbers and counts every item your function reads: more than 60 reads in one search fails, so indexOf, includes, find or visiting every item will not pass.
