# Chapter 2: Variables

## 1.nextToken: fix the token machine

nextToken() is broken now: its first call stops with an error. Fix it so it hands out the next token number on every call: 1 on the first call, then 2, then 3.
The count is kept outside the function, in lastToken, which starts at 0 because nobody has had a token yet.

## 2.addToMenu: add to the same menu

addToMenu(item) is broken now: it stops with an error. Fix it so it adds the item to the end of menu and returns how many items menu has now: addToMenu('Parle-G') gives 4, and then addToMenu('filter coffee') gives 5.
Other screens hold on to the menu array, so it must stay the very same array, with the new items at its end in the order they were added. Making menu a let and building a new array stops the error but fails, because the screens still hold the old array.

## 3.priceTag: fix the regular's price tag

priceTag(item, isRegular) is broken now: a regular sees their own price as the menu price too, like Masala chai: ₹35 (you pay ₹35). Fix it so the menu price is always the item's price, and a regular also sees their price, which is ₹5 less.
For Masala chai at 40, someone who is not a regular gets Masala chai: ₹40, and a regular gets Masala chai: ₹40 (you pay ₹35). For Cutting chai at 25, a regular gets Cutting chai: ₹25 (you pay ₹20).

## 4.scopePredictions: which lines work and which throw

Export scopePredictions, an object with the keys a, b, c and d, one for each snippet in the comment above it. For each, write as a string exactly what console.log prints (a printed 12 would be the string '12'), or, if the snippet throws, the error's name: 'ReferenceError' or 'TypeError'.
The check runs the same snippets and compares.

## 5.InterviewhoistingPredictions, reading a name before its line

Export hoistingPredictions, an object with the keys a, b, c and d, one for each snippet in the comment above it. Same rules as task 4: as a string, exactly what console.log prints, or the error's name, 'ReferenceError' or 'TypeError', if the snippet throws.
The check runs the same snippets and compares.
