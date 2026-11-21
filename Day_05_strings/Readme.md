# Chapter 5. Strings

## 1. cleanName: tidy a name however it was typed

Write cleanName(raw). Remove the spaces at both ends, then return the name with its first letter in upper case and every other letter in lower case.
cleanName(' aNJALI ') gives 'Anjali', cleanName('MEERA') gives 'Meera', and a name that is already tidy, like 'Kiran', comes back the same.

## 2. orderCode: a kitchen code like MAS-007

Write orderCode(item, orderNumber). Return the first three letters of the item in capitals, a dash, and the order number padded with zeros at the front to three digits.
orderCode('masala chai', 7) gives 'MAS-007' and orderCode('Cutting chai', 42) gives 'CUT-042'. Spaces before the item do not count: orderCode(' bun maska', 142) gives 'BUN-142', and a number that already has three digits is not padded.

## 3. wantsLessSugar: spot less sugar in any capitals

Write wantsLessSugar(note). Return true when the note contains the words less sugar, in any mix of upper and lower case and anywhere in the note, and false otherwise.
'Less SUGAR please' and 'extra ginger, LESS SUGAR' give true. 'extra ginger' and 'more sugar' give false.

## 4. slugify: a web address slug for a menu item

Write slugify(item). Return the item in lower case, with no spaces at either end and a dash in place of every space between words. Items have single spaces between their words.
slugify(' Masala Chai Special ') gives 'masala-chai-special', slugify('Kulhad Chai With Extra Elaichi') gives 'kulhad-chai-with-extra-elaichi', and a dash already in the name stays: slugify('parle-g') gives 'parle-g'.

## 5. maskPhone: hide all but the last four digits

Write maskPhone(phone). phone is text. Return text of the same length in which every character except the last four is a star \*, and the last four are the phone's own last four digits.
maskPhone('9876543210') gives '**\*\***3210' and maskPhone('08041234567') gives '**\*\*\***4567'. A phone of just four digits has nothing to hide: maskPhone('1234') gives '1234'.

## 6. `Interview` reverseString, reverse a string

Write reverseString(text). Return the same characters in reverse order: reverseString('chai') gives 'iahc' and reverseString('Tapri') gives 'irpaT'.
One character comes back as it is, and empty text '' gives ''
