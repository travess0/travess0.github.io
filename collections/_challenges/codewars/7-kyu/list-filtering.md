---
layout: post
title: String ends with?
tags: codewars
category: 7 kyu
---

# String ends with?
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

# Examples:
```
solution('abc', 'bc') # returns true
solution('abc', 'd') # returns false
```

# Solution
```python
def solution(string, ending):
    return string.endswith(ending)
```

# Faça também
String ends with? em [codewars](https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d)