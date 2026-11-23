# Chapter 8: Truthy and falsy

## 1. displayName: Guest when the name is blank

Write displayName(name). Return the name when there is one, and 'Guest' when the name is empty text, undefined or null.
displayName('Anjali') gives 'Anjali', and displayName('') gives 'Guest'.

## 2. stockLabel: fix the label that treats 0 as not counted

Fix stockLabel(count). When count is null or undefined, return 'Not counted yet'. Otherwise return the count, a space and left: stockLabel(12) gives '12 left', and stockLabel(0) gives '0 left'.
It is broken now: a count of 0 shows 'Not counted yet'.

## 3. isEmptyCart: fix the check that never says empty

Fix isEmptyCart(cart). The cart is always an array of item names. Return true when it has no items, and false when it has one or more: isEmptyCart([]) gives true, and isEmptyCart(['masala chai']) gives false.
It is broken now: it never says true, not even for an empty cart.

## 4. couponCode: the coupon in capitals, or nothing

Write couponCode(customer). The customer is an object with a name and maybe a coupon. Return the coupon in capitals: couponCode({ name: 'Ravi', coupon: 'chai10' }) gives 'CHAI10'.
When there is no coupon (the coupon key is missing, or is empty text or null), return empty text, '', never undefined or null.

## 5. `Interview` truthyPredictions, which values are truthy

Export truthyPredictions, an array of twelve booleans: what Boolean gives for each value in the comment above it (true for a truthy value, false for a falsy one), in the same order.
The check runs Boolean on the same twelve values and compares.
