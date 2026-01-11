<div align="center">

# Day 05 – Number & Digit Problems

![Problem Type](https://img.shields.io/badge/Problem%20Type-Digit%20Manipulation-green)
![Logic](https://img.shields.io/badge/Logic-Math%20%26%20Loops-orange)

</div>

---

## 🧩 Problems Solved

### 1. Count Digits in a Number

**Goal:** Determine how many digits are present in a given integer.

**Core Logic:**

```
count++
n = Math.floor(n / 10)
```

---

### 2. Check Palindrome Number

**Goal:** Verify whether a number reads the same forward and backward.

**Approach:**

* Reverse the number
* Compare it with the original

This avoids string conversion and demonstrates strong mathematical thinking.

---

### 3. Reverse an Integer

**Goal:** Reverse digits of a given number.

**Core Logic:**

```
lastDigit = n % 10
reverse = reverse * 10 + lastDigit
n = Math.floor(n / 10)
```

---

## 🧠 Problem-Solving Pattern

All problems follow the same base pattern:

1. Extract last digit
2. Use it for calculation
3. Remove last digit
4. Repeat until number becomes 0

Once this pattern is mastered, many number problems become easy.

---

## ⚠️ Edge Cases Considered

* Negative numbers (handled using `Math.abs()`)
* Single-digit numbers
* Zero (`0`)

---





## ✅ Key Takeaway

> If you master digit manipulation, you unlock a large category of DSA problems.
