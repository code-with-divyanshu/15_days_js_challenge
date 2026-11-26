# Chapter 11: Array methods

## 1. availableLabels: menu labels for what is in stock

Write availableLabels(items). Return a new array with one label for every item that is in stock, written like Masala chai: ₹40 (the name, a colon and a space, then ₹ and the price). Leave out the items that are sold out and keep the menu order. Do not change the array you are given.
When nothing is in stock, return an empty array.

## 2. orderTotal: the total of one order

Write orderTotal(order). It takes one order and returns its total in rupees: for every item in the order's items, its price times its qty, all added up.
An order with no items has a total of 0.

## 3. lookupOrder: an order and its position

Write lookupOrder(list, id). Find the order whose id equals the id you are given, and return an object with two keys: order (the order itself, the same object that is in the list, not a copy) and position (its index in the list).
When no order has that id, return order undefined and position -1.

## 4. rushCheck: anyone unpaid, everything delivered?

Write rushCheck(list). Return an object with two true or false answers: anyUnpaid is true when at least one order is not paid, and allDelivered is true when every order is delivered.
With no orders at all, nobody owes money and nothing is waiting to go out, so the answer is anyUnpaid false and allDelivered true.

## 5. kitchenTickets: one ticket per cup

Write kitchenTickets(list). Return one flat array of tickets, one ticket per cup: the order's id, a colon and a space, then the item's name, like 101: Masala chai. An item with qty 2 makes two tickets.
Keep the orders, and the items inside each order, in their original order. An order with no items makes no tickets, an empty list gives an empty array, and the list you are given must not change.

## 6. `Interview` groupByCustomer, orders by customer with reduce

Write groupByCustomer(list) with reduce. Object.groupBy is not allowed here: the check makes it throw.
Return an object with one key per customer name, in the order each customer first appears in the list. Each key holds an array of that customer's orders (the same order objects, not copies), in their original order.
An empty list gives an empty object. Every call starts from a fresh object, so a second call does not see the first call's orders. The list you are given must not change.
