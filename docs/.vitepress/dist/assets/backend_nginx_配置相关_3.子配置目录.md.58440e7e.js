import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.01edc906.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"backend/nginx/配置相关/3.子配置目录.md","filePath":"backend/nginx/配置相关/3.子配置目录.md"}'),p={name:"backend/nginx/配置相关/3.子配置目录.md"},o=l(`<h2 id="子配置文件目录" tabindex="-1">子配置文件目录 <a class="header-anchor" href="#子配置文件目录" aria-label="Permalink to &quot;子配置文件目录&quot;">​</a></h2><p>个人自定义的网站配置文件可以放在该目录下，命名为<code>xxx.conf</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">server_name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">xxxx.com</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">网站根路径</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">主页文件名</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">error_page</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/404.html</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/404.html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#9ECBFF;">页面所在路径</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">server_name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">xxxx.com</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">网站根路径</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">index</span><span style="color:#24292E;"> </span><span style="color:#032F62;">主页文件名</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">error_page</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">404</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/404.html</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/404.html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">404</span><span style="color:#032F62;">页面所在路径</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="举个例子" tabindex="-1">举个例子 <a class="header-anchor" href="#举个例子" aria-label="Permalink to &quot;举个例子&quot;">​</a></h2><h3 id="_1-启动nginx容器" tabindex="-1">1.启动nginx容器 <a class="header-anchor" href="#_1-启动nginx容器" aria-label="Permalink to &quot;1.启动nginx容器&quot;">​</a></h3><p>docker下启动nginx容器，将nginx配置及网站相关文件挂载出来，方便在宿主机内修改</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 创建容器卷nginx01-config 用于同步配置文件</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">volume</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx01-config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动容器 docker-nginx01下放置了index.html和404.html</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-P</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx01</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">8001</span><span style="color:#9ECBFF;">:80</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx01-config:/etc/nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/docker-nginx01:/usr/share/nginx/html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 创建容器卷nginx01-config 用于同步配置文件</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">volume</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx01-config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动容器 docker-nginx01下放置了index.html和404.html</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-P</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx01</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8001</span><span style="color:#032F62;">:80</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx01-config:/etc/nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/docker-nginx01:/usr/share/nginx/html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 查看具名挂载容器卷</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">volume</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">inspect</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nignx01-config</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 查看具名挂载容器卷</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">volume</span><span style="color:#24292E;"> </span><span style="color:#032F62;">inspect</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nignx01-config</span></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/lijing-2008/PicGo/img/20220111194855.png" alt=""></p><h3 id="_2-修改配置文件" tabindex="-1">2.修改配置文件 <a class="header-anchor" href="#_2-修改配置文件" aria-label="Permalink to &quot;2.修改配置文件&quot;">​</a></h3><p>进入配置文件挂载目录，新增自定义配置<code>lj.conf</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># lj.conf</span></span>
<span class="line"><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">server_name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/share/nginx/html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">error_page</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/404.html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/404.html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/share/nginx/html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># lj.conf</span></span>
<span class="line"><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">server_name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/share/nginx/html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">index</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">error_page</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">404</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/404.html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/404.html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/share/nginx/html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_3-配置网站文件" tabindex="-1">3.配置网站文件 <a class="header-anchor" href="#_3-配置网站文件" aria-label="Permalink to &quot;3.配置网站文件&quot;">​</a></h3><p>宿主机内的网站文件目录包含<code>index.html</code>和<code>404.html</code>两个文件 <img src="https://cdn.jsdelivr.net/gh/lijing-2008/PicGo/img/20220111195322.png" alt=""></p><h3 id="_4-重启nginx容器" tabindex="-1">4.重启nginx容器 <a class="header-anchor" href="#_4-重启nginx容器" aria-label="Permalink to &quot;4.重启nginx容器&quot;">​</a></h3><p>修改完配置文件之后需要重启nginx才能生效</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx01</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx01</span></span></code></pre></div><h3 id="_5-测试" tabindex="-1">5.测试 <a class="header-anchor" href="#_5-测试" aria-label="Permalink to &quot;5.测试&quot;">​</a></h3><p>通过nginx日志进行测试 首先要进入容器，监测日志，直接使用</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">attach</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx01</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">attach</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx01</span></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/lijing-2008/PicGo/img/20220111200152.png" alt=""> 访问主页<code>index.html</code>成功，文件大小46字节，与宿主机内网站主页文件一致 访问<code>/hello.html</code>，找不到文件报错，返回404页面，文件大小2498字节，与宿主机内404文件大小一致</p><h3 id="_6-验证成功" tabindex="-1">6.验证成功！ <a class="header-anchor" href="#_6-验证成功" aria-label="Permalink to &quot;6.验证成功！&quot;">​</a></h3>`,22),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{h as __pageData,g as default};
