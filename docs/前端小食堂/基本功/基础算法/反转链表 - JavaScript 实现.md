## 反转链表 - JavaScript 实现

#### 题目概述

反转一个单链表。

**示例:**
输入: `1->2->3->4->5->NULL`
输出: `5->4->3->2->1->NULL`

### 思路

反转链表的核心思想是改变链表中每个节点的 `next` 指针的指向，而不需要定义一个新的链表，这样可以节省内存空间。我们可以通过迭代和递归两种方法来实现链表的反转。

![image-20240629154554354](/Users/kkzzyyt/Library/Application Support/typora-user-images/image-20240629154554354.png)

### 迭代法

迭代法通过两个指针 `prev` 和 `current` 来实现链表的反转。

#### 步骤

1. 初始化 `prev` 指针为 `null`，`current` 指针指向头结点。
2. 保存 `current->next` 节点到 `next` 指针。
3. 将 `current->next` 指向 `prev`，实现反转。
4. 移动 `prev` 和 `current` 指针。
5. 重复步骤 2-4 直到 `current` 为空。
6. 返回 `prev` 指针作为新的头结点。

#### 代码实现

```javascript
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next; // 保存当前节点的下一个节点
      current.next = prev; // 反转当前节点的指针
      prev = current; // 更新 prev 指针
      current = next; // 移动 current 指针到下一个节点
    }
    this.head = prev; // 最后将 head 指针指向新的头节点
  }

  printList() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join("->") + "->NULL");
  }
}

// 测试迭代法
const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
console.log("Original List:");
list.printList();
list.reverse();
console.log("Reversed List:");
list.printList();
```

### 递归法

递归方法相对抽象一些，但逻辑与迭代法类似。递归分为两种思路：从前往后和从后往前。

#### 从前往后递归反转

1. 初始化 `prev` 为 `null`，`current` 为 `head`。
2. 递归处理当前节点 `current` 和前一个节点 `prev`。
3. 当 `current` 为空时，返回 `prev` 作为新的头结点。

#### 代码实现

```javascript
class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  reverse() {
    const reverseHelper = (prev, current) => {
      if (!current) return prev;
      let next = current.next;
      current.next = prev;
      return reverseHelper(current, next);
    };
    this.head = reverseHelper(null, this.head);
  }

  printList() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join("->") + "->NULL");
  }
}

// 测试递归法（从前往后）
const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
console.log("Original List:");
list.printList();
list.reverse();
console.log("Reversed List:");
list.printList();
```

#### 从后往前递归反转

1. 递归调用，反转第二个节点开始往后的链表。
2. 翻转头节点与第二个节点的指向。
3. 将头节点的 `next` 指向 `NULL`。
4. 返回新的头结点。

#### 代码实现

```javascript
class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  reverse() {
    const reverseHelper = (head) => {
      if (!head || !head.next) return head;
      let newHead = reverseHelper(head.next);
      head.next.next = head;
      head.next = null;
      return newHead;
    };
    this.head = reverseHelper(this.head);
  }

  printList() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join("->") + "->NULL");
  }
}

// 测试递归法（从后往前）
const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
console.log("Original List:");
list.printList();
list.reverse();
console.log("Reversed List:");
list.printList();
```

### 总结

反转链表可以通过迭代和递归两种方法来实现。迭代方法使用两个指针不断调整节点的 `next` 指针，而递归方法则通过递归调用实现链表的反转。两种方法的时间复杂度均为 \(O(n)\)，空间复杂度分别为 \(O(1)\)（迭代）和 \(O(n)\)（递归）。理解并掌握这两种方法对处理链表问题非常有帮助。
