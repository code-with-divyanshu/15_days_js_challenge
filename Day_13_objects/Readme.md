# Chapter 13: Objects

## 1. priceOf: a price by name, only for real menu items

Write priceOf(prices, name). prices is an object of item names and prices, like menu. Return the price of the item called name: priceOf(menu, 'bun maska') gives 35.
When the object does not have that key itself, return null: priceOf(menu, 'samosa') gives null. Keys every object inherits, such as 'toString' and 'constructor', are not menu items and give null too. A price of 0 is a real price: priceOf(menu, 'water') gives 0, not null.

## 2. tallyItems: how many of each item

Write tallyItems(names). It takes an array of item names and returns a new object with one key per name, holding how many times that name appears: tallyItems(['masala chai', 'bun maska', 'masala chai']) gives { 'masala chai': 2, 'bun maska': 1 }. Names are compared exactly, so 'Parle-G' and 'parle-g' would be two keys. The keys may come in any order.
An empty array gives {}. Every call starts a fresh tally, so a second call does not see the first call's counts. Do not change the array you are given (the check passes a frozen one).

## 3. stockPatch: Ravi's stock update with computed keys

Write stockPatch(item, qty). Return a new object with two keys built from the item's name: the name itself, holding qty, and the name followed by Low, holding true when fewer than 10 are left and false otherwise. stockPatch('ginger', 4) gives { ginger: 4, gingerLow: true }, and stockPatch('milk', 30) gives { milk: 30, milkLow: false }.
Exactly 10 is not low: stockPatch('sugar', 10) gives { sugar: 10, sugarLow: false }. And 0 is low: stockPatch('elaichi', 0) gives { elaichi: 0, elaichiLow: true }.

## 4. deliveryLine: the line from a nested address

Write deliveryLine(order). The order has an id and a customer object, and the customer has a name and maybe an address object with an area and a city. Return the text Order 101 to Anjali, Koramangala, Bengaluru: the word Order, the id, to, the name, then the area and the city, with a comma and a space between the last three.
When the customer has no address, return Order 102: Ravi picks up at the stall instead: the word Order, the id, a colon, then the name and picks up at the stall.

## 4. publicProfile: a profile without the private details

Write publicProfile(customer). Return a new object with every key and value the customer has, except phone and upiId: publicProfile({ name: 'Anjali', visits: 12, phone: '98450 12345', upiId: 'anjali@okbank' }) gives { name: 'Anjali', visits: 12 }. Other keys, such as a nested address, come along as they are.
The result must not have a phone or upiId key at all, not even one holding undefined. The customer you are given must not change, so do not delete from it. A customer with only some of those keys works too: publicProfile({ name: 'Ravi', phone: '1' }) gives { name: 'Ravi' }

## 5. `Interview` predictions, references, keys and in

Export predictions, an array of seven values: what each of the seven numbered lines in the comment above it gives, in the same order. Write them as real values (numbers, true or false, undefined), not as text.
The check runs the same code and compares.
