import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.7204edfa.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端小食堂/基本功/基础算法/二叉树基础概念及分类.md","filePath":"前端小食堂/基本功/基础算法/二叉树基础概念及分类.md"}'),l={name:"前端小食堂/基本功/基础算法/二叉树基础概念及分类.md"},p=n(`<h2 id="二叉树基础概念及分类" tabindex="-1">二叉树基础概念及分类 <a class="header-anchor" href="#二叉树基础概念及分类" aria-label="Permalink to &quot;二叉树基础概念及分类&quot;">​</a></h2><h4 id="基础概念" tabindex="-1">基础概念 <a class="header-anchor" href="#基础概念" aria-label="Permalink to &quot;基础概念&quot;">​</a></h4><ol><li><strong>节点（Node）</strong>: 二叉树中的每个元素称为节点。</li><li><strong>根节点（Root）</strong>: 树的最顶层节点称为根节点。</li><li><strong>子节点（Child）</strong>: 一个节点的直接下层节点称为其子节点。</li><li><strong>父节点（Parent）</strong>: 一个节点的直接上层节点称为其父节点。</li><li><strong>叶子节点（Leaf）</strong>: 没有子节点的节点称为叶子节点。</li><li><strong>内部节点（Internal Node）</strong>: 具有至少一个子节点的节点称为内部节点。</li><li><strong>高度（Height）</strong>: 从节点到叶子节点的最长路径上的边数称为该节点的高度。</li><li><strong>深度（Depth）</strong>: 从根节点到该节点路径上的边数称为该节点的深度。</li><li><strong>层（Level）</strong>: 树的第几层，从根节点开始，根节点为第 0 层。</li><li><strong>二叉树（Binary Tree）</strong>: 每个节点最多有两个子节点的树结构。</li></ol><h4 id="二叉树分类及示例图" tabindex="-1">二叉树分类及示例图 <a class="header-anchor" href="#二叉树分类及示例图" aria-label="Permalink to &quot;二叉树分类及示例图&quot;">​</a></h4><p>二叉树是一种重要的数据结构，根据其特性和结构，可以分为以下几类：</p><h5 id="_1-满二叉树-full-binary-tree" tabindex="-1">1. 满二叉树（Full Binary Tree） <a class="header-anchor" href="#_1-满二叉树-full-binary-tree" aria-label="Permalink to &quot;1. 满二叉树（Full Binary Tree）&quot;">​</a></h5><ul><li><strong>定义</strong>: 每个节点要么没有子节点，要么有两个子节点。</li><li><strong>特点</strong>: 所有叶子节点都在同一层，且每个非叶子节点都有两个子节点。</li><li><strong>示例图</strong>:<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1</span></span>
<span class="line"><span style="color:#e1e4e8;">     / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    2   3</span></span>
<span class="line"><span style="color:#e1e4e8;">   / \\ / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  4  5 6  7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1</span></span>
<span class="line"><span style="color:#24292e;">     / \\</span></span>
<span class="line"><span style="color:#24292e;">    2   3</span></span>
<span class="line"><span style="color:#24292e;">   / \\ / \\</span></span>
<span class="line"><span style="color:#24292e;">  4  5 6  7</span></span></code></pre></div></li></ul><h5 id="_2-完全二叉树-complete-binary-tree" tabindex="-1">2. 完全二叉树（Complete Binary Tree） <a class="header-anchor" href="#_2-完全二叉树-complete-binary-tree" aria-label="Permalink to &quot;2. 完全二叉树（Complete Binary Tree）&quot;">​</a></h5><ul><li><strong>定义</strong>: 除了最后一层，所有层都是满的，且最后一层的节点尽可能地靠左排列。</li><li><strong>特点</strong>: 节点从左到右依次排列，没有空缺。</li><li><strong>示例图</strong>:<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1</span></span>
<span class="line"><span style="color:#e1e4e8;">     / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    2   3</span></span>
<span class="line"><span style="color:#e1e4e8;">   / \\ /</span></span>
<span class="line"><span style="color:#e1e4e8;">  4  5 6</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1</span></span>
<span class="line"><span style="color:#24292e;">     / \\</span></span>
<span class="line"><span style="color:#24292e;">    2   3</span></span>
<span class="line"><span style="color:#24292e;">   / \\ /</span></span>
<span class="line"><span style="color:#24292e;">  4  5 6</span></span></code></pre></div></li></ul><h5 id="_3-平衡二叉树-balanced-binary-tree-或-avl-tree" tabindex="-1">3. 平衡二叉树（Balanced Binary Tree 或 AVL Tree） <a class="header-anchor" href="#_3-平衡二叉树-balanced-binary-tree-或-avl-tree" aria-label="Permalink to &quot;3. 平衡二叉树（Balanced Binary Tree 或 AVL Tree）&quot;">​</a></h5><ul><li><strong>定义</strong>: 每个节点的左子树和右子树的高度差不超过 1。</li><li><strong>特点</strong>: 保持树的高度尽可能低，以保证查找、插入和删除操作的时间复杂度为 (O(\\log n))。</li><li><strong>示例图</strong>:<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">4</span></span>
<span class="line"><span style="color:#e1e4e8;">     / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    2   6</span></span>
<span class="line"><span style="color:#e1e4e8;">   / \\ / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  1  3 5  7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">4</span></span>
<span class="line"><span style="color:#24292e;">     / \\</span></span>
<span class="line"><span style="color:#24292e;">    2   6</span></span>
<span class="line"><span style="color:#24292e;">   / \\ / \\</span></span>
<span class="line"><span style="color:#24292e;">  1  3 5  7</span></span></code></pre></div></li></ul><h5 id="_4-二叉搜索树-binary-search-tree-bst" tabindex="-1">4. 二叉搜索树（Binary Search Tree, BST） <a class="header-anchor" href="#_4-二叉搜索树-binary-search-tree-bst" aria-label="Permalink to &quot;4. 二叉搜索树（Binary Search Tree, BST）&quot;">​</a></h5><ul><li><p><strong>定义</strong>: 对于每个节点，其左子树的所有节点值小于该节点值，右子树的所有节点值大于该节点值。</p></li><li><p><strong>特点</strong>: 支持高效的查找、插入和删除操作，平均时间复杂度为 (O(\\log n))。</p></li><li><p><strong>示例图</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">4</span></span>
<span class="line"><span style="color:#e1e4e8;">     / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    2   6</span></span>
<span class="line"><span style="color:#e1e4e8;">   / \\ / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  1  3 5  7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">4</span></span>
<span class="line"><span style="color:#24292e;">     / \\</span></span>
<span class="line"><span style="color:#24292e;">    2   6</span></span>
<span class="line"><span style="color:#24292e;">   / \\ / \\</span></span>
<span class="line"><span style="color:#24292e;">  1  3 5  7</span></span></code></pre></div></li></ul><h5 id="_5-完美二叉树-perfect-binary-tree" tabindex="-1">5. 完美二叉树（Perfect Binary Tree） <a class="header-anchor" href="#_5-完美二叉树-perfect-binary-tree" aria-label="Permalink to &quot;5. 完美二叉树（Perfect Binary Tree）&quot;">​</a></h5><ul><li><strong>定义</strong>: 所有内部节点都有两个子节点，且所有叶子节点在同一层。</li><li><strong>特点</strong>: 是满二叉树的一种特殊形式。</li><li><strong>示例图</strong>:<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1</span></span>
<span class="line"><span style="color:#e1e4e8;">     / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    2   3</span></span>
<span class="line"><span style="color:#e1e4e8;">   / \\ / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  4  5 6  7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1</span></span>
<span class="line"><span style="color:#24292e;">     / \\</span></span>
<span class="line"><span style="color:#24292e;">    2   3</span></span>
<span class="line"><span style="color:#24292e;">   / \\ / \\</span></span>
<span class="line"><span style="color:#24292e;">  4  5 6  7</span></span></code></pre></div></li></ul><h5 id="_6-退化二叉树-degenerate-binary-tree-或-skewed-binary-tree" tabindex="-1">6. 退化二叉树（Degenerate Binary Tree 或 Skewed Binary Tree） <a class="header-anchor" href="#_6-退化二叉树-degenerate-binary-tree-或-skewed-binary-tree" aria-label="Permalink to &quot;6. 退化二叉树（Degenerate Binary Tree 或 Skewed Binary Tree）&quot;">​</a></h5><ul><li><strong>定义</strong>: 每个节点只有一个子节点（要么左子节点，要么右子节点）。</li><li><strong>特点</strong>: 退化为链表，时间复杂度为 (O(n))。</li><li><strong>示例图</strong>:<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1</span></span>
<span class="line"><span style="color:#e1e4e8;">   \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    2</span></span>
<span class="line"><span style="color:#e1e4e8;">     \\</span></span>
<span class="line"><span style="color:#e1e4e8;">      3</span></span>
<span class="line"><span style="color:#e1e4e8;">       \\</span></span>
<span class="line"><span style="color:#e1e4e8;">        4</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1</span></span>
<span class="line"><span style="color:#24292e;">   \\</span></span>
<span class="line"><span style="color:#24292e;">    2</span></span>
<span class="line"><span style="color:#24292e;">     \\</span></span>
<span class="line"><span style="color:#24292e;">      3</span></span>
<span class="line"><span style="color:#24292e;">       \\</span></span>
<span class="line"><span style="color:#24292e;">        4</span></span></code></pre></div></li></ul><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>不同类型的二叉树在不同场景下具有不同的优势和应用：</p><ul><li><strong>满二叉树</strong>: 结构简单，但不常见于实际应用中。</li><li><strong>完全二叉树</strong>: 常用于实现堆（Heap），如二叉堆（Binary Heap）。</li><li><strong>平衡二叉树</strong>: 用于实现高效的查找和排序算法，如 AVL 树和红黑树（Red-Black Tree）。</li><li><strong>二叉搜索树</strong>: 广泛应用于数据库和文件系统中，用于实现高效的数据查找。</li><li><strong>完美二叉树</strong>: 理论上很重要，但实际应用中较少见。</li><li><strong>退化二叉树</strong>: 需要避免，因为它会退化为线性结构，导致性能下降。</li></ul><p>掌握这些二叉树的分类及其特点，对于选择合适的数据结构以优化算法性能至关重要。</p>`,21),o=[p];function r(t,i,c,d,g,y){return a(),e("div",null,o)}const b=s(l,[["render",r]]);export{u as __pageData,b as default};
