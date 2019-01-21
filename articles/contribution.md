---
category: Article
title: 贡献指北
order: 6
---

### Issue

若你在使用过程中，遇到任何关于组件的问题，都可以通过[issue](https://github.com/jser-club/rc-bmap/issues)与我们进行讨论，只要看到会及时与你进行交流。

### PR

若你对**rc-bmap**有更好的想法，想动手实现时，可以通过`PR`的方法参与进来与我们互动，我们会第一时间进行code review.

### 本地开发

clone 源码工程到本地：
``` bash
git clone https://github.com/jser-club/rc-bmap.git
```

与`demo`结合的最佳实践：

1. 将**demo**工程**clone**至本地。
  ``` bash
  git clone https://github.com/jser-club/rc-bmap-demo.git
  ```
2. 安装**demo**工程所需依赖。
  ``` bash
  cd 你刚clone的工程目录
  yarn install
  ```
3. 进入**rc-bmap**工程的目录，执行
  ``` bash
  yarn link
  ```
4. 进入**rc-bmap-dmeo**工程目录执行
  ``` bash
  yarn link rc-bmap
  ```
5. 修改完**rc-bmap**的源码后，在**rc-bmap**工程执行
  ``` bash
  yarn run build
  ```
  如果在windows系统下
  ```bash
  yarn run build_win
  ```
6. 在**demo**重新点击按钮运行，即可看到最新修改后的效果

### core与components的分离

为了后续更高的扩展性，在**1.0.0**版本中，将`core`（百度地图类的封装）与`components`(React相关组件)抽离成了两部分，
如果你想基于**rc-bmap**进行腾讯地图、高德地图的扩展，换对应的`core`即可实现。若你想对`bmap`进行`vue`版本的开发，
你可以继续使用`core`替换`components`部分为`vue`即可。
