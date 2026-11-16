# Chapter 1: Hello, console

## 1. logOrder: one line for each new order

Write logOrder(customer, item). It prints one line with console.log, exactly like Order: masala chai for Ravi when it is called with Ravi and masala chai: the word Order and a colon, the item, the word for, then the customer, with one space between each part. Use exactly one console.log call, and return nothing.
Careful with the order: the customer comes first in the brackets, but last in the line.

## 2. warnLowStock: warn when an item runs low

Write warnLowStock(item, left). When fewer than 10 are left, print a warning with console.warn, exactly like Low stock: ginger (4 left), and return true. When 10 or more are left, print nothing and return false.
10 left is not low: it gives false and no warning. Use console.warn, not console.log, because the check reads the warnings.

## 3. showMenu: the menu as a two-column table

Write showMenu(menu). It prints the menu it is given with one console.table call that shows only two columns: name, then price. Hand console.table the menu itself, as it is (the check looks for the very same array), and the column names as an array. Return nothing.

## 4. ringBell: count every ring of the bell

Write ringBell(). Every call counts one ring with console.count under the label order bell, exactly that text, all lower case, so the console shows order bell: 1, then order bell: 2. Return nothing.

## 5. timeRush: time the rush and keep its result

Write timeRush(work). work is a function. Start a timer with console.time under the label rush hour, run work exactly once, stop the timer with console.timeEnd under the same label, and return whatever work returned.
The timer must start before work runs and stop after it finishes.
