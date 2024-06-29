## 冒泡排序 - JavaScript 实现

#### 题目概述

冒泡排序是一种简单的排序算法。它重复地遍历要排序的列表，依次比较相邻的元素，如果前一个元素比后一个元素大，就交换它们的位置。这个过程会重复进行，直到不再需要交换元素为止，也就是说列表已经排序完成。

### 思路

冒泡排序的核心思想是通过相邻元素的比较和交换，把最大的元素逐渐“冒泡”到列表的末尾。每一轮遍历后，未排序部分的最大元素会被移到已排序部分的最前面。

### 步骤

1. 从列表的第一个元素开始，依次比较相邻的两个元素。
2. 如果前一个元素比后一个元素大，则交换它们的位置。
3. 对每一对相邻元素进行这样的比较和交换，从列表的开始到结尾。
4. 每一轮遍历结束后，最大的元素会被移动到列表的末尾。
5. 重复以上步骤，逐渐减少未排序部分的长度，直到列表完全排序。

### 代码实现

```javascript
function bubbleSort(arr) {
  let n = arr.length;
  // 外层循环控制需要遍历的轮数
  for (let i = 0; i < n - 1; i++) {
    // 内层循环控制每一轮中的相邻元素比较和交换
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 交换相邻元素
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// 测试冒泡排序
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:");
console.log(arr);
const sortedArr = bubbleSort(arr);
console.log("Sorted array:");
console.log(sortedArr);
```

### 优化冒泡排序

可以通过在每轮遍历中加入一个标志变量 `swapped`，来判断是否发生过交换。如果在某一轮遍历中没有发生交换，说明列表已经是有序的，可以提前结束排序。

#### 代码实现

```javascript
function optimizedBubbleSort(arr) {
  let n = arr.length;
  let swapped;
  // 外层循环控制需要遍历的轮数
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    // 内层循环控制每一轮中的相邻元素比较和交换
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 交换相邻元素
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    // 如果没有发生交换，提前结束排序
    if (!swapped) break;
  }
  return arr;
}

// 测试优化后的冒泡排序
const arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:");
console.log(arr2);
const sortedArr2 = optimizedBubbleSort(arr2);
console.log("Sorted array:");
console.log(sortedArr2);
```

### 时间复杂度

- **最坏情况:** \(O(n^2)\)，当列表是逆序时，需要进行 \(n(n-1)/2\) 次比较和交换。
- **平均情况:** \(O(n^2)\)，需要进行 \(n(n-1)/4\) 次比较和交换。
- **最好情况:** \(O(n)\)，当列表已经是有序时，只需要进行一次遍历。

### 空间复杂度

- \(O(1)\)，只需要常数级别的额外空间来存储临时变量。

### 总结

冒泡排序是一种简单直观的排序算法，虽然时间复杂度较高，但理解和实现起来非常容易。通过优化，可以在列表已经有序的情况下提前结束排序，提高效率。冒泡排序主要用于教学和理解排序算法的基本原理，在实际应用中较少使用。
