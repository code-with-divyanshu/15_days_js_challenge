# Chapter 9: Null, undefined and NaN

## 1. parseQty: a number, or null when there is none

Write parseQty(text). When the text is a number, spaces around it allowed, return that number: parseQty('3') gives 3, parseQty(' 4 ') gives 4, and parseQty('0') gives 0, which is a real answer.
When there is no number, return null: for blank text (empty, or only spaces) and for text that Number cannot read, like 'two' or '3 cups'.

## 2. cleanReading: a label for every kind of reading

Write cleanReading(reading). Return 'Not read yet' for undefined, 'No sensor' for null and 'Sensor error' for NaN. For any other number, return the number followed by °C: cleanReading(85) gives '85°C'.
0 is a real reading: cleanReading(0) gives '0°C'.

## 3. fillMissing: defaults that keep a cleared note

Write fillMissing(order). Return a new object with three keys: item (copied from the order), qty and note. A qty that is undefined (missing, or set to undefined) becomes 1, and a note that is undefined becomes ''. Every other value is kept as it is, so a qty of 0 stays 0 and a note set to null stays null.
fillMissing({ item: 'Masala chai' }) gives { item: 'Masala chai', qty: 1, note: '' }. The order you are given must not change.

## 5. `Interview` emptinessPredictions, NaN, isNaN and Object.is

Export emptinessPredictions, an array of ten values: what each expression in the comment above it gives, in the same order. Nine of them are true or false, and the typeof one is text, written as a string.
The check works out the same ten expressions and compares.
