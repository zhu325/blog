import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.7204edfa.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端小食堂/基本功/基础算法/二叉树遍历方法.md","filePath":"前端小食堂/基本功/基础算法/二叉树遍历方法.md"}'),p={name:"前端小食堂/基本功/基础算法/二叉树遍历方法.md"},o=l(`<h2 id="二叉树遍历方法及其-javascript-实现" tabindex="-1">二叉树遍历方法及其 JavaScript 实现 <a class="header-anchor" href="#二叉树遍历方法及其-javascript-实现" aria-label="Permalink to &quot;二叉树遍历方法及其 JavaScript 实现&quot;">​</a></h2><h4 id="_1-前序遍历-preorder-traversal" tabindex="-1">1. 前序遍历（Preorder Traversal） <a class="header-anchor" href="#_1-前序遍历-preorder-traversal" aria-label="Permalink to &quot;1. 前序遍历（Preorder Traversal）&quot;">​</a></h4><ul><li><p><strong>访问顺序</strong>: 根节点 -&gt; 左子树 -&gt; 右子树</p></li><li><p><strong>示例图</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1</span></span>
<span class="line"><span style="color:#e1e4e8;">     / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    2   3</span></span>
<span class="line"><span style="color:#e1e4e8;">   / \\ / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  4  5 6  7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1</span></span>
<span class="line"><span style="color:#24292e;">     / \\</span></span>
<span class="line"><span style="color:#24292e;">    2   3</span></span>
<span class="line"><span style="color:#24292e;">   / \\ / \\</span></span>
<span class="line"><span style="color:#24292e;">  4  5 6  7</span></span></code></pre></div></li><li><p><strong>JavaScript 实现</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TreeNode</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">preorderTraversal</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (node </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(node.value); </span><span style="color:#6A737D;">// 访问节点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">preorderTraversal</span><span style="color:#E1E4E8;">(node.left);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">preorderTraversal</span><span style="color:#E1E4E8;">(node.right);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TreeNode</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">root.left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TreeNode</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">root.right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TreeNode</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">root.left.left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TreeNode</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">root.left.right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TreeNode</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">root.right.left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TreeNode</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">root.right.right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TreeNode</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;前序遍历:&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">preorderTraversal</span><span style="color:#E1E4E8;">(root); </span><span style="color:#6A737D;">// 输出: 1, 2, 4, 5, 3, 6, 7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TreeNode</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">preorderTraversal</span><span style="color:#24292E;">(</span><span style="color:#E36209;">node</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (node </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(node.value); </span><span style="color:#6A737D;">// 访问节点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">preorderTraversal</span><span style="color:#24292E;">(node.left);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">preorderTraversal</span><span style="color:#24292E;">(node.right);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 示例</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">root</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TreeNode</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">root.left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TreeNode</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">root.right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TreeNode</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">root.left.left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TreeNode</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">root.left.right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TreeNode</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">root.right.left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TreeNode</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">root.right.right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TreeNode</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;前序遍历:&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">preorderTraversal</span><span style="color:#24292E;">(root); </span><span style="color:#6A737D;">// 输出: 1, 2, 4, 5, 3, 6, 7</span></span></code></pre></div></li></ul><h4 id="_2-中序遍历-inorder-traversal" tabindex="-1">2. 中序遍历（Inorder Traversal） <a class="header-anchor" href="#_2-中序遍历-inorder-traversal" aria-label="Permalink to &quot;2. 中序遍历（Inorder Traversal）&quot;">​</a></h4><ul><li><p><strong>访问顺序</strong>: 左子树 -&gt; 根节点 -&gt; 右子树</p></li><li><p><strong>示例图</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1</span></span>
<span class="line"><span style="color:#e1e4e8;">     / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    2   3</span></span>
<span class="line"><span style="color:#e1e4e8;">   / \\ / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  4  5 6  7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1</span></span>
<span class="line"><span style="color:#24292e;">     / \\</span></span>
<span class="line"><span style="color:#24292e;">    2   3</span></span>
<span class="line"><span style="color:#24292e;">   / \\ / \\</span></span>
<span class="line"><span style="color:#24292e;">  4  5 6  7</span></span></code></pre></div></li><li><p><strong>JavaScript 实现</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">inorderTraversal</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (node </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">inorderTraversal</span><span style="color:#E1E4E8;">(node.left);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(node.value); </span><span style="color:#6A737D;">// 访问节点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">inorderTraversal</span><span style="color:#E1E4E8;">(node.right);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;中序遍历:&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">inorderTraversal</span><span style="color:#E1E4E8;">(root); </span><span style="color:#6A737D;">// 输出: 4, 2, 5, 1, 6, 3, 7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">inorderTraversal</span><span style="color:#24292E;">(</span><span style="color:#E36209;">node</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (node </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">inorderTraversal</span><span style="color:#24292E;">(node.left);</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(node.value); </span><span style="color:#6A737D;">// 访问节点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">inorderTraversal</span><span style="color:#24292E;">(node.right);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;中序遍历:&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">inorderTraversal</span><span style="color:#24292E;">(root); </span><span style="color:#6A737D;">// 输出: 4, 2, 5, 1, 6, 3, 7</span></span></code></pre></div></li></ul><h4 id="_3-后序遍历-postorder-traversal" tabindex="-1">3. 后序遍历（Postorder Traversal） <a class="header-anchor" href="#_3-后序遍历-postorder-traversal" aria-label="Permalink to &quot;3. 后序遍历（Postorder Traversal）&quot;">​</a></h4><ul><li><p><strong>访问顺序</strong>: 左子树 -&gt; 右子树 -&gt; 根节点</p></li><li><p><strong>示例图</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1</span></span>
<span class="line"><span style="color:#e1e4e8;">     / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    2   3</span></span>
<span class="line"><span style="color:#e1e4e8;">   / \\ / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  4  5 6  7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1</span></span>
<span class="line"><span style="color:#24292e;">     / \\</span></span>
<span class="line"><span style="color:#24292e;">    2   3</span></span>
<span class="line"><span style="color:#24292e;">   / \\ / \\</span></span>
<span class="line"><span style="color:#24292e;">  4  5 6  7</span></span></code></pre></div></li><li><p><strong>JavaScript 实现</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">postorderTraversal</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (node </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">postorderTraversal</span><span style="color:#E1E4E8;">(node.left);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">postorderTraversal</span><span style="color:#E1E4E8;">(node.right);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(node.value); </span><span style="color:#6A737D;">// 访问节点</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;后序遍历:&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">postorderTraversal</span><span style="color:#E1E4E8;">(root); </span><span style="color:#6A737D;">// 输出: 4, 5, 2, 6, 7, 3, 1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">postorderTraversal</span><span style="color:#24292E;">(</span><span style="color:#E36209;">node</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (node </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">postorderTraversal</span><span style="color:#24292E;">(node.left);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">postorderTraversal</span><span style="color:#24292E;">(node.right);</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(node.value); </span><span style="color:#6A737D;">// 访问节点</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;后序遍历:&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">postorderTraversal</span><span style="color:#24292E;">(root); </span><span style="color:#6A737D;">// 输出: 4, 5, 2, 6, 7, 3, 1</span></span></code></pre></div></li></ul><h4 id="_4-层次遍历-level-order-traversal" tabindex="-1">4. 层次遍历（Level-order Traversal） <a class="header-anchor" href="#_4-层次遍历-level-order-traversal" aria-label="Permalink to &quot;4. 层次遍历（Level-order Traversal）&quot;">​</a></h4><ul><li><p><strong>访问顺序</strong>: 按层次从上到下，从左到右访问节点</p></li><li><p><strong>示例图</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1</span></span>
<span class="line"><span style="color:#e1e4e8;">     / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">    2   3</span></span>
<span class="line"><span style="color:#e1e4e8;">   / \\ / \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  4  5 6  7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1</span></span>
<span class="line"><span style="color:#24292e;">     / \\</span></span>
<span class="line"><span style="color:#24292e;">    2   3</span></span>
<span class="line"><span style="color:#24292e;">   / \\ / \\</span></span>
<span class="line"><span style="color:#24292e;">  4  5 6  7</span></span></code></pre></div></li><li><p><strong>JavaScript 实现</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">levelOrderTraversal</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">root</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (root </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">queue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(root);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (queue.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">node</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> queue.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(node.value); </span><span style="color:#6A737D;">// 访问节点</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (node.left </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(node.left);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (node.right </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(node.right);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;层次遍历:&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">levelOrderTraversal</span><span style="color:#E1E4E8;">(root); </span><span style="color:#6A737D;">// 输出: 1, 2, 3, 4, 5, 6, 7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">levelOrderTraversal</span><span style="color:#24292E;">(</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (root </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">queue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  queue.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(root);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (queue.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">node</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue.</span><span style="color:#6F42C1;">shift</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(node.value); </span><span style="color:#6A737D;">// 访问节点</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (node.left </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      queue.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(node.left);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (node.right </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      queue.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(node.right);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;层次遍历:&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">levelOrderTraversal</span><span style="color:#24292E;">(root); </span><span style="color:#6A737D;">// 输出: 1, 2, 3, 4, 5, 6, 7</span></span></code></pre></div></li></ul><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>通过上述 JavaScript 代码实现，我们可以清楚地看到不同遍历方法的实现细节和访问顺序：</p><ul><li><strong>前序遍历</strong>: 根节点 -&gt; 左子树 -&gt; 右子树</li><li><strong>中序遍历</strong>: 左子树 -&gt; 根节点 -&gt; 右子树</li><li><strong>后序遍历</strong>: 左子树 -&gt; 右子树 -&gt; 根节点</li><li><strong>层次遍历</strong>: 按层次从上到下，从左到右</li></ul><p>掌握这些遍历方法及其实现，对于解决实际问题和优化算法性能至关重要。</p>`,13),e=[o];function r(c,t,E,y,i,d){return n(),a("div",null,e)}const g=s(p,[["render",r]]);export{u as __pageData,g as default};
