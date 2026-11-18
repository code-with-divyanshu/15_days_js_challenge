# Chapter 3: Data types

## 1. describeValue: the type of any value

Write describeValue(value). It returns the type of the value as text, like typeof, with two differences: for null it returns 'null', and for any array, an empty one too, it returns 'array'.
For every other value (a string, a number, true or false, undefined, a plain object, a function, a bigint) return exactly what typeof gives for it.

## 2. `Interview` typeofPredictions, what typeof really says

Export typeofPredictions, an array of eight strings: what each typeof in the comment above it returns, in the same order as the list.
The check runs the same eight typeof expressions and compares.

## 3. repeatOrder: a real copy with the next id

Write repeatOrder(order). Return a new order object with the same customer, the same items and the next id (the order's id plus 1). For { id: 7, customer: 'Anjali', items: ['masala chai'] } it returns { id: 8, customer: 'Anjali', items: ['masala chai'] }.
The copy must share nothing with the original: it is a different object, its items is a different array, and changing the copy's customer or adding to its items leaves the original order exactly as it was.

## 4.isSameOrder: same item and same qty

Write isSameOrder(a, b). Return true when both orders are for the same item and the same qty, even when they are two different objects, and false otherwise.
The qty must match exactly: a qty of 2 and a qty of '2' (text) are not the same. The same object passed twice is the same order.

## 5. snapshotStock: a deep copy of the stock

Write snapshotStock(stock). Return a copy of the stock that shares nothing with it at any level. The stock is an object of objects, like { masala: { kulhads: 50, ginger: 12 } }.
After the snapshot is taken, changing a count inside the stock, or adding a new shelf to it, must not change the snapshot.
