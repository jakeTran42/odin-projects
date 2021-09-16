# All about strings and its functionality

## Basic

1. Three way to create strings. 
  * Double quotes "string"
  * Single quotes 'string'
  * String literal \`${variables or expressions}`

2. Escape character '\\' to make quote recognize as text in case we need to use quotes for other purposes.

3. Concatenate strings using '+' or string literal \`John ${variable}`

## Methods

1. Length -> string.length #return the length of a string

2. slice(start, end) extract part of string and return the extracted part

3. substring(start, end) similar to slice() but start and end value less than 0 are **treated** as 0.

4. substr() is similar to slice() but the end value specifies the **length** of the extracted part.

`If you omit the second parameter on substring() or substr() then it will slice out the rest of the strong`

5. replace() replaces a specified value with another value in a string.

`replace() method does not change the string it is called on. It returns a new string and it only replace the first match. To replace case sensitive string use the /i flag eg. text.replace(/STRING/i, "Another");. The flag /g will replace every encounter/matches in the text.`

6. Convert to upper and lowercase... toUpperCase() || to LowerCase()

7. concat() joins two or more strings.

`eg. text1.concat(" ", text2)`

8. trim() method removes whitespace from both sides of a string

9. padStart() and padEnd() padd the beginning and end of a string with another string.

10. charAt() returns the character at a specified index in a string.

11. charCodeAt() returns the unicode of the character at the specified index.

12. String [] allows for property access on strings

`eg. text[0] --> get that character at that index of the string`

13. split() convert string to an array/list.

`text.split(",") split on commas || text.split(" ") split on spaces || text.split("|") splits on pipe etc`

`If the separator is omited, the returned array will contain the whole string at index [0]. If the separator is "", the returned array will be an array of single characters`