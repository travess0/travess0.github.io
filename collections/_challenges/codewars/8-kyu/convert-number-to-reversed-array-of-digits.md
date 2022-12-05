---
layout: post
title: Convert number to reversed array of digits
tags: codewars
category: 8 kyu
---

# Convert number to reversed array of digits
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

# Example(Input => Output):
```
35231 => [1,3,2,5,3]
0 => [0]
```

# Solution
```python
def digitize(n):
    arr = list(map(int, str(n)))
    arr.reverse()
    return arr
```

# Faça também
Convert number to reversed array of digits em [codewars](https://www.codewars.com/kata/57a2013acf1fa5bfc4000921)