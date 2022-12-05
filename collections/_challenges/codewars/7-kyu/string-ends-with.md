---
layout: post
title: List Filtering
tags: codewars
category: 7 kyu
---

# List Filtering
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

# Example
```python
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
```

# Solution
```python
def filter_list(arr):
    return [value for value in arr if isinstance(value, int)]
```

# Faça também
List Filtering em [codewars](https://www.codewars.com/kata/53dbd5315a3c69eed20002dd)