import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.01edc906.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{"author":"coder-li","tags":"nginx随机主页模块 nginx/modules/random_index_module","aliases":"随机主页"},"headers":[],"relativePath":"backend/nginx/基础知识/2.随机主页模块.md","filePath":"backend/nginx/基础知识/2.随机主页模块.md"}'),p={name:"backend/nginx/基础知识/2.随机主页模块.md"},o=l(`<p>通过设置server块中的主页location配置</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#lj.conf</span></span>
<span class="line"><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">server_name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/share/nginx/html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">#index index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">random_index</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">on</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/nginx_status</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">stub_status</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">allow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">error_page</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/404.html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/404.html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/share/nginx/html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#lj.conf</span></span>
<span class="line"><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">server_name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/share/nginx/html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">#index index.html;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">random_index</span><span style="color:#24292E;"> </span><span style="color:#032F62;">on</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/nginx_status</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">stub_status</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">allow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">error_page</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">404</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/404.html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/404.html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/share/nginx/html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>如上，将index配置行注释，新增<code>random_index on</code>，代表的是主页为<code>/usr/share/nginx/html</code>路径下的一个随机html文件</p><p>===注意=== 隐藏的html文件不会被随机到，如<code>.xxx.html</code>，以<code>.</code>开头的文件</p>`,4),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{_ as __pageData,h as default};
