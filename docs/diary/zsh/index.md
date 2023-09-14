### zsh启动速度优化

------

#### 查看启动时间

执行`\time zsh -i -c exit`命令可以查看 zsh 启动时间。

```bash
➜  blog git:(master) ✗ \time zsh -i -c exit
        0.87 real         0.55 user         0.33 sys
```

作为对比，使用`--no-rcs` 选项可以测试不加载 `.zshrc` 文件的启动时间，只要 0.01 秒。

```bash
➜  blog git:(master) ✗ \time zsh --no-rcs -i -c exit
        0.01 real         0.00 user         0.00 sys
```

所以优化的重点是 `.zshrc` 文件。

#### 时间消耗分析

在 `.zshrc` 首行插入 `zmodload zsh/zprof`，依次执行以下命令：

```bash
➜  blog git:(master) ✗ source ~/.zshrc
➜  blog git:(master) ✗ zsh
➜  blog git:(master) ✗ zprof
```

可以得到类似以下结果，耗时都按顺序排好了：

```bash
➜  blog git:(master) ✗ zprof
num  calls                time                       self            name
-----------------------------------------------------------------------------------
 1)    2         237.24   118.62   50.04%    126.66    63.33   26.72%  nvm
 2)    2          91.95    45.98   19.40%     91.95    45.98   19.40%  compaudit
 3)    1          85.32    85.32   18.00%     73.30    73.30   15.46%  nvm_ensure_version_installed
 4)    1         287.90   287.90   60.73%     50.66    50.66   10.69%  nvm_auto
 5)    1         142.46   142.46   30.05%     50.51    50.51   10.65%  compinit
 6)   20          29.06     1.45    6.13%     23.53     1.18    4.96%  _omz_source
 7)    1          22.30    22.30    4.70%     17.98    17.98    3.79%  nvm_die_on_prefix
 8)    1          12.02    12.02    2.54%     12.02    12.02    2.54%  nvm_is_version_installed
 9)    1           5.82     5.82    1.23%      5.82     5.82    1.23%  (anon)
10)    2           4.36     2.18    0.92%      4.36     2.18    0.92%  up-line-or-beginning-search
11)    1           4.07     4.07    0.86%      4.07     4.07    0.86%  nvm_grep
12)    1           2.97     2.97    0.63%      2.97     2.97    0.63%  omz_termsupport_cwd
13)    1           2.96     2.96    0.62%      2.96     2.96    0.62%  nvm_has
14)    1           2.13     2.13    0.45%      2.13     2.13    0.45%  test-ls-args
15)    1           1.32     1.32    0.28%      1.32     1.32    0.28%  regexp-replace
16)    1           1.07     1.07    0.23%      1.07     1.07    0.23%  zrecompile
17)    1           0.83     0.83    0.18%      0.83     0.83    0.18%  colors
18)    1           0.62     0.62    0.13%      0.62     0.62    0.13%  is-at-least
19)    3           0.40     0.13    0.08%      0.40     0.13    0.08%  add-zsh-hook
20)    4           4.32     1.08    0.91%      0.25     0.06    0.05%  nvm_npmrc_bad_news_bears
21)    2           0.18     0.09    0.04%      0.18     0.09    0.04%  compdef
22)    1           0.14     0.14    0.03%      0.10     0.10    0.02%  omz_termsupport_preexec
23)    2           0.09     0.04    0.02%      0.09     0.04    0.02%  title
24)    3           0.07     0.02    0.01%      0.07     0.02    0.01%  is_theme
25)    1           0.06     0.06    0.01%      0.06     0.06    0.01%  zle-line-init
26)    1           0.05     0.05    0.01%      0.05     0.05    0.01%  zle-line-finish
27)    2           0.03     0.02    0.01%      0.03     0.02    0.01%  env_default
28)    1           0.08     0.08    0.02%      0.03     0.03    0.01%  omz_termsupport_precmd
29)    1         287.92   287.92   60.73%      0.03     0.03    0.01%  nvm_process_parameters
30)    1           0.02     0.02    0.00%      0.02     0.02    0.00%  bashcompinit
31)    1           0.01     0.01    0.00%      0.01     0.01    0.00%  nvm_is_zsh

-----------------------------------------------------------------------------------
```

#### 问题解决

通过分析可以看出 nvm 命令的加载非常耗时，80% 的精力解决这 20% 的问题就够了。

一通搜索后得知加速 nvm 的加载主要有两种办法：

- 懒加载，使用 node 命令的时候才加载 nvm

```bash
lazy_load_nvm() {
  unset -f node
  export NVM_DIR=~/.nvm
  [[ -s "$NVM_DIR/nvm.sh" ]] && source "$NVM_DIR/nvm.sh"
}

node() {
  lazy_load_nvm
  node $@
}
```

- 使用默认 node 版本 + –no-use 选项

```bash
# Add default node to path
export PATH=$HOME/.nvm/versions/node/v16.12.0/bin:$PATH
 
# load nvm
export NVM_DIR="$HOME/.nvm"
[[ -s "$NVM_DIR/nvm.sh" ]] && source "$NVM_DIR/nvm.sh" --no-use
```

使用的第一种方案，**瞬间 zsh 启动速度提高了 30%左右**，而且 node、nvm 命令都还能正常使用！打开新 terminal tab 页感受已经好很多。

```
➜  blog git:(master) ✗ \time zsh -i -c exit
        0.51 real         0.38 user         0.14 sys
```

#### 其他问题优化

我继续使用`zprof`分析启动时间， `command-not-found` 是比较耗时的，在`.zshrc`文件中禁用它

#### 粘贴延迟问题

`zsh`在`autosuggestions`插件开启的状态下，粘贴大量的内容的时候会卡顿得一个字符一个字符粘贴。

在`.zshrc`文件中添加以下内容:

```bash
# This speeds up pasting w/ autosuggest
# https://github.com/zsh-users/zsh-autosuggestions/issues/238
pasteinit() {
  OLD_SELF_INSERT=${${(s.:.)widgets[self-insert]}[2,3]}
  zle -N self-insert url-quote-magic # I wonder if you'd need `.url-quote-magic`?
}

pastefinish() {
  zle -N self-insert $OLD_SELF_INSERT
}
zstyle :bracketed-paste-magic paste-init pasteinit
zstyle :bracketed-paste-magic paste-finish pastefinish
```

使配置生效

```bash
source ~/.zshrc
```



