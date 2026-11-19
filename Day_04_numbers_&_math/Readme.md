# Chapter 3: Data types

## 1. splitBill: whole-rupee shares and what is left

Write splitBill(total, people). total is a bill in whole rupees and people is how many share it (at least 1). Return an object with two keys: each, the whole number of rupees every person pays (the share rounded down), and left, the rupees left over that nobody's share covers.
splitBill(125, 3) gives { each: 41, left: 2 }. When the bill splits evenly, left is 0: splitBill(120, 3) gives { each: 40, left: 0 }.

## 2. parseCups: the number of cups from typed text

Write parseCups(text). Read the whole number at the start of what the customer typed and return it as a number. Spaces before the number are fine, and reading stops at the first character that is not a digit: '3 cups' gives 3, ' 4 ' gives 4, '2.5' gives 2 and '12kulhads' gives 12.
When the text does not start with a number, return 0: 'two' gives 0, and so does empty text ''.

## 3. `Interview` addMoney, 0.1 + 0.2 that comes out as 0.3

Write addMoney(a, b). Add two wallet amounts in rupees and round the sum to the nearest paisa (two decimal places). Return a number, not text.
addMoney(0.1, 0.2) gives 0.3, addMoney(19.99, 0.01) gives 20, addMoney(1.1, 2.2) gives 3.3, and whole amounts stay whole: addMoney(40, 25) gives 65.

## 4. formatPrice: a price with two decimals

Write formatPrice(amount). Return text: the rupee sign ₹ followed by the amount rounded to exactly two decimal places, with no space between them.
formatPrice(42.5) gives '₹42.50', formatPrice(40) gives '₹40.00', formatPrice(12.345678) gives '₹12.35', and formatPrice(0.1 + 0.2) gives '₹0.30'.

## 5. isValidQty: whole numbers from 1 to 20

Write isValidQty(qty). Return true only when qty is a whole number, of the number type, from 1 to 20 (1 and 20 included). Return false for everything else.
0, 21 and -3 give false, and so do 2.5, NaN and the text '2'.
