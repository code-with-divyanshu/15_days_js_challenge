# Chapter 7: Type coercion

## 1. addToCart: fix the cart that joins instead of adding

Fix addToCart(cartQty, typed). cartQty is the number already in the cart, and typed is what the customer typed in the quantity box: always a string of digits, like '2'. Return the new quantity as a number: addToCart(1, '2') gives 3, and addToCart(5, '10') gives 15.
It is broken now: it gives back text instead of the sum.

## 2. readForm: real numbers and booleans from the form

Write readForm(form). The form has three fields, and every one is a string: qty, tableNumber and extraGinger. Return a new object with the same three keys: qty and tableNumber as numbers, and extraGinger as a boolean, true when the field is the word 'true' and false when it is the word 'false'.
readForm({ qty: '2', tableNumber: '07', extraGinger: 'false' }) gives { qty: 2, tableNumber: 7, extraGinger: false }, and a table number with a zero in front, like '07', is just 7.

## 3. arithmeticPredictions: what mixed-type sums give

Export arithmeticPredictions, an array of seven values: what each expression in the comment above it gives, in the same order. The type counts as well as the value: write a string answer as a string in quotes, and a number answer as a number without quotes.
The check works out the same seven expressions and compares.

## 4. `Interview` looseEqualityPredictions, what == really says

Export looseEqualityPredictions, an array of eight booleans: true or false for each comparison in the comment above it, in the same order.
The check works out the same eight comparisons and compares.
