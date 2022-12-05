---
layout: post
title: String repeat
tags: codewars
category: 8 kyu
---

# String repeat
Write a function that accepts an integer `n` and a string `s` as parameters, and returns a string of `s` repeated exactly `n` times.

# Examples (input -> output)
```
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
```

# Solution
```python
def repeat_str(repeat, string):
    return string * repeat
```

# Faça também
String repeat em [codewars](https://www.codewars.com/kata/57a0e5c372292dd76d000d7e)