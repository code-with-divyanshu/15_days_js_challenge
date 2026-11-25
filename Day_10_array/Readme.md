# Chapter 10: Array

## 1. menuEnds: the first item, the last and the count

Write menuEnds(items). Return an object with three keys: first (the first item), last (the last item) and count (how many items there are). menuEnds(['Masala chai', 'Bun maska', 'Parle-G']) gives { first: 'Masala chai', last: 'Parle-G', count: 3 }.
A menu of one item gives that item as both first and last, and an empty menu gives { first: undefined, last: undefined, count: 0 }. Do not change the array you are given: the check passes a locked one.

## 2. runQueue: the kitchen queue through a rush

Write runQueue(events). Start with an empty queue and go through the events in order. An order event's item joins the back of the queue. An urgent event's item jumps to the front. A serve event takes the item at the front out of the queue and serves it. A cancel event drops the item at the back, which is not served. Serve and cancel do nothing when the queue is empty.
Return { served, waiting }: served holds the served items in the order they were served, and waiting is what is still in the queue, front first. runQueue([{ type: 'order', item: 'chai' }, { type: 'urgent', item: 'bun' }, { type: 'serve' }]) gives { served: ['bun'], waiting: ['chai'] }.
No events gives { served: [], waiting: [] }. Every call starts with an empty queue, and the events array must not change.

## 3. menuPage: one page of the menu

Write menuPage(items, page, size). Pages are numbered from 1 and hold size items each, in menu order. Return a new array with the items on that page: menuPage(['a', 'b', 'c', 'd', 'e'], 2, 2) gives ['c', 'd'].
The last page may be shorter: menuPage(['a', 'b', 'c', 'd', 'e'], 3, 2) gives ['e']. A page past the end gives []. The menu must not change: the check passes a locked one.

## 4. swapSoldOut: swap a sold-out item in place

Write swapSoldOut(items, soldOut, replacement). Change the menu array itself, not a copy: put the replacement in the sold-out item's position, or, when no replacement is given, remove the sold-out item so that nothing is left in its place. Return the removed item itself, a string, not an array.
When the sold-out item is not on the menu, return null and leave the menu as it is.
With m = ['Masala chai', 'Bun maska', 'Parle-G'], swapSoldOut(m, 'Bun maska', 'Vada pav') returns 'Bun maska', and m becomes ['Masala chai', 'Vada pav', 'Parle-G'].

## 5. `Interview` uniqueOrders, each order once

Write uniqueOrders(orders). Return a new array with each order once, in the order it was first seen: uniqueOrders(['chai', 'bun', 'chai', 'Parle-G', 'bun']) gives ['chai', 'bun', 'Parle-G'].
Two orders are the same only when they are exactly equal, so 'masala chai' and 'Masala chai' are two different orders. An empty list gives []. The array you are given must not change (the check passes a locked one), and the result is always a new array.
