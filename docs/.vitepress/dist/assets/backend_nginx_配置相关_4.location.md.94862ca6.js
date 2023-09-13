import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.01edc906.js";const h=JSON.parse('{"title":"一、语法","description":"","frontmatter":{"author":"coder-li","tags":"nginx-location"},"headers":[],"relativePath":"backend/nginx/配置相关/4.location.md","filePath":"backend/nginx/配置相关/4.location.md"}'),p={name:"backend/nginx/配置相关/4.location.md"},o=l(`<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    	</span><span style="color:#B392F0;">server_name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">www.xxx.com</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    	</span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">      	  </span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/share/nginx/html/</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	      </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    	}</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">http</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    	</span><span style="color:#6F42C1;">server_name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">www.xxx.com</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    	</span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">      	  </span><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/share/nginx/html/</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	      </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    	}</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h1 id="一、语法" tabindex="-1">一、语法 <a class="header-anchor" href="#一、语法" aria-label="Permalink to &quot;一、语法&quot;">​</a></h1><p><img src="https://cdn.jsdelivr.net/gh/lijing-2008/PicGo/img/20220116172911.png" alt=""></p><ul><li><code>=</code>表示精确匹配<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/test</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  [configration]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;"># /test ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test/ not ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test1/ not ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test/1 not ok</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/test</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">  [configration]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;"># /test ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test/ not ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test1/ not ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test/1 not ok</span></span></code></pre></div></li><li><code>~</code>表示区分大小写的正则匹配<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">^/test</span><span style="color:#E1E4E8;">$ </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;"> [configration]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;"># /test ok</span></span>
<span class="line"><span style="color:#6A737D;"># /Test/ not ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test/ not ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test1 not ok</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">^/test</span><span style="color:#24292E;">$ </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;"> [configration]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;"># /test ok</span></span>
<span class="line"><span style="color:#6A737D;"># /Test/ not ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test/ not ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test1 not ok</span></span></code></pre></div></li><li><code>~*</code>不区分大小写的正则匹配<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~</span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">^/test</span><span style="color:#E1E4E8;">$ </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  [configration]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;"># /test ok</span></span>
<span class="line"><span style="color:#6A737D;"># /Test ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test/ not ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test1 not ok</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~</span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#032F62;">^/test</span><span style="color:#24292E;">$ </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">  [configration]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;"># /test ok</span></span>
<span class="line"><span style="color:#6A737D;"># /Test ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test/ not ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test1 not ok</span></span></code></pre></div></li><li><code>^~</code>表示uri以某个字符串开头<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">^~</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/test/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  [configration]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;"># /test ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test/1.html ok</span></span>
<span class="line"><span style="color:#6A737D;"># /tes/ not ok</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">^~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/test/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">  [configration]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;"># /test ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test/1.html ok</span></span>
<span class="line"><span style="color:#6A737D;"># /tes/ not ok</span></span></code></pre></div></li></ul><p>当不使用这些语法时，只写uri的时候，<code>/</code>表示通用匹配</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/test</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  [configration]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;"># /test ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test/1.html ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test1/ ok</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/test</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">  [configration]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;"># /test ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test/1.html ok</span></span>
<span class="line"><span style="color:#6A737D;"># /test1/ ok</span></span></code></pre></div><h1 id="二、匹配顺序" tabindex="-1">二、匹配顺序 <a class="header-anchor" href="#二、匹配顺序" aria-label="Permalink to &quot;二、匹配顺序&quot;">​</a></h1><p><code>location</code>的定义分为两种，前缀字符串(prefix string)和正则表达式(regular expression)</p><ul><li>检查使用前缀字符串的 locations，在使用前缀字符串的 locations 中选择最长匹配的，并将结果进行储存</li><li>如果符合带有 <code>=</code> 修饰符的 URI，则立刻停止匹配</li><li>如果符合带有 <code>^~</code> 修饰符的 URI，则也立刻停止匹配。</li><li>然后按照定义文件的顺序，检查正则表达式，匹配到就停止</li><li>当正则表达式匹配不到的时候，使用之前储存的前缀字符串</li></ul><blockquote><ol><li>在顺序上，前缀字符串顺序不重要，按照匹配长度来确定，正则表达式则按照定义顺序。</li><li>在优先级上，<code>=</code> 修饰符最高，<code>^~</code> 次之，再者是正则，最后是前缀字符串匹配</li></ol></blockquote><h1 id="三、root和alias" tabindex="-1">三、root和alias <a class="header-anchor" href="#三、root和alias" aria-label="Permalink to &quot;三、root和alias&quot;">​</a></h1><p><code>root</code>使用的是拼接<code>root+location</code>，<code>alias</code>是用<code>alias</code>替换<code>location</code>，</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/test/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/rootdir/</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;"># 当请求 /test/1.html的时候，/rootdir/test/1.html会返回</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/test1/{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">alias</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/aliasdir/</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;"># 当请求 /test1/2.html的时候，/rootdir/1.html会返回</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/test/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/rootdir/</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;"># 当请求 /test/1.html的时候，/rootdir/test/1.html会返回</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/test1/{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">alias</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/aliasdir/</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;"># 当请求 /test1/2.html的时候，/rootdir/1.html会返回</span></span></code></pre></div><p>==root可能更好用==</p>`,14),e=[o];function t(c,r,i,y,E,d){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{h as __pageData,g as default};
