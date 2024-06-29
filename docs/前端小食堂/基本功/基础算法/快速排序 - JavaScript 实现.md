## 快速排序 - JavaScript 实现

#### 题目概述

快速排序（Quick Sort）是一种高效的排序算法，采用分治法（Divide and Conquer）策略来排序。它的基本思想是选择一个基准元素（pivot），通过一趟排序将待排序序列分成两部分，其中一部分所有元素都比基准元素小，另一部分所有元素都比基准元素大，然后再递归地对这两部分进行快速排序。

### 思路

快速排序的核心步骤包括：

1. 选择基准元素（pivot）。
2. 通过一趟排序将序列分为两部分，使得左边部分的所有元素都小于基准元素，右边部分的所有元素都大于基准元素。
3. 递归地对左右两部分进行快速排序。

### 步骤

1. 如果序列的长度为 0 或 1，则序列已经有序，直接返回。
2. 选择一个基准元素（一般选择第一个元素、最后一个元素或中间元素）。
3. 将序列分为两部分：左边部分的元素都小于基准元素，右边部分的元素都大于基准元素。
4. 对左边部分和右边部分递归地进行快速排序。
5. 合并已排序的左边部分、基准元素和右边部分。

### 代码实现

```javascript
function quickSort(arr) {
  // 基本情况：如果数组长度为0或1，直接返回数组
  if (arr.length <= 1) {
    return arr;
  }

  // 选择基准元素（这里选择数组的中间元素）
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  // 定义左右两个数组
  const left = [];
  const right = [];

  // 遍历数组，分成两部分
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue; // 跳过基准元素
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // 递归对左边部分和右边部分进行快速排序，并合并结果
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// 测试快速排序
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:");
console.log(arr);
const sortedArr = quickSort(arr);
console.log("Sorted array:");
console.log(sortedArr);
```

### 原地快速排序

上面的实现使用了额外的数组来存储左右部分，导致空间复杂度较高。我们可以通过原地分区（in-place partitioning）来优化空间复杂度。

#### 原地快速排序实现

```javascript
function quickSortInPlace(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // 分区操作，返回基准元素的正确位置
    const pivotIndex = partition(arr, low, high);

    // 递归对左右部分进行快速排序
    quickSortInPlace(arr, low, pivotIndex - 1);
    quickSortInPlace(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high]; // 选择最后一个元素作为基准元素
  let i = low - 1; // i 是小于基准元素的最后一个元素的索引

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // 交换元素
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // 将基准元素放到正确位置
  return i + 1;
}

// 测试原地快速排序
const arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:");
console.log(arr2);
const sortedArr2 = quickSortInPlace(arr2);
console.log("Sorted array:");
console.log(sortedArr2);
```

### 时间复杂度

- **最坏情况:** \(O(n^2)\)，当每次选取的基准元素都是当前序列的最大或最小元素时，导致每次只分割出一个元素。
- **平均情况:** \(O(n \log n)\)，每次分割序列为两个大致相等的子序列。
- **最好情况:** \(O(n \log n)\)，每次分割序列为两个完全相等的子序列。

### 空间复杂度

- **额外空间:** \(O(\log n)\)，用于递归调用栈的空间。

### 总结

快速排序是一种高效的排序算法，平均时间复杂度为 \(O(n \log n)\)。通过原地分区方法，可以将空间复杂度优化到 \(O(\log n)\)。快速排序在实际应用中非常常见，适用于大多数排序场景。理解并掌握快速排序的实现和优化方法对处理排序问题非常有帮助。
