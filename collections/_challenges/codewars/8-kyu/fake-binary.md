---
layout: post
title: Fake Binary
tags: codewars
category: 8 kyu
---

# Fake Binary
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

**Note: input will never be an empty string**

# Solution
```python
def validate(n):
    return '1' if n >= 5 else '0'

def fake_bin(x):
    arr = list(map(int, str(x)))
    return "".join(list(map(validate, arr)))
```

# Faça também
Fake Binary em [codewars](https://www.codewars.com/kata/57eae65a4321032ce000002d)