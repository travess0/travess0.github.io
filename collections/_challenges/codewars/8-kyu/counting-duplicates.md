---
layout: post
title: Count of positives / sum of negatives
tags: codewars
category: 8 kyu
---

# Count of positives / sum of negatives
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

# Example
For input `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]`, you should return `[10, -65]`.

# Solution
```python
# one line
# return [len(list(filter(lambda x: (x > 0), arr))), sum(list(filter(lambda x: (x < 0), arr)))] if len(arr) != 0 else []

def count_positives_sum_negatives(arr):
    if len(arr) == 0:
        return []
    
    positives = len(list(filter(lambda x: (x > 0), arr)))
    negatives = sum(list(filter(lambda x: (x < 0), arr)))

    return [positives, negatives]
```

# Faça também
Counting Duplicates em [codewars](https://www.codewars.com/kata/576bb71bbbcf0951d5000044)