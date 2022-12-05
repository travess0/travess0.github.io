---
layout: post
title: Replace With Alphabet Position
tags: codewars
category: 6 kyu
---

# Replace With Alphabet Position
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

`"a" = 1`, `"b" = 2`, etc.

# Example
```python 
alphabet_position("The sunset sets at twelve o' clock.") 
```
Should return `"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"` ( as a string )

# Solution
```python
def alphabet_position(text):
    alphabet = [chr(alpha + 97) for alpha in range(0, 26)]
    letters = list(text.lower())
    
    return " ".join([str(alphabet.index(letter) + 1) for letter in letters if letter in alphabet])
```

# Faça também
Replace With Alphabet Position em [codewars](https://www.codewars.com/kata/546f922b54af40e1e90001da)