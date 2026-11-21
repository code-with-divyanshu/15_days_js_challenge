# Chapter 6. Template literals

## 1. readyMessage: fix the SMS that prints its placeholders

Fix readyMessage(name, item). It must return Hi, the name, a comma, your, the item and is ready!, like readyMessage('Anjali', 'masala chai') gives 'Hi Anjali, your masala chai is ready!'.
It is broken now: it returns the placeholders themselves, with the dollar signs and braces, instead of the name and the item.

## 2. orderLine: one order line with its total

Write orderLine(item, qty, price). Return the qty, then x with a space on each side, the item, then = with a space on each side, and ₹ straight before the line total, which is qty times price.
orderLine('Masala chai', 2, 40) gives '2 x Masala chai = ₹80', and orderLine('Bun maska', 1, 35) gives '1 x Bun maska = ₹35'.

## 3. greeting: good morning or good evening

Write greeting(name, hour). The hour is a whole number from 0 to 23. Before 12 (0 to 11) return Good morning, a comma and a space, the name and an exclamation mark: greeting('Meera', 9) gives 'Good morning, Meera!'.
From 12 on, return Good evening the same way: greeting('Ravi', 16) gives 'Good evening, Ravi!'. Midnight, hour 0, is morning, and hour 12 is already evening.

## 4. receipt: a four-line receipt

Write receipt(order). The order has an id, a customer, an item, a qty and a price (of one, in rupees). Return one string of exactly four lines, separated by line breaks.
Line 1 is always Tapri, Indiranagar. Line 2 is Order #, the id, for and the customer: Order #42 for Ravi. Line 3 is the qty, x, the item, @ and ₹ with the price: 2 x Masala chai @ ₹40. Line 4 is Total: and ₹ with qty times price: Total: ₹80.
No line starts with a space, and there is no line break after the last line.

## 5. templatePredictions: what each template really gives

Export templatePredictions, an object with the keys a, b, c, d, e and f. For each key, write the whole text that the template with that letter in the comment above it gives, as a string, label included.
The check works out the same six templates and compares.
