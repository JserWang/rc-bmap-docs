---
category: Article
title: 快速开始
order: 1
---

[![npm version](https://badge.fury.io/js/rc-bmap.svg?_t=20170411)](https://www.npmjs.com/package/rc-bmap)
[![npm downloads](https://img.shields.io/npm/dm/rc-bmap.svg)](https://www.npmjs.com/package/rc-bmap)


> **rc-bmap** 是一个基于React封转的百度地图组件，在开始之前，希望您对[百度地图](http://lbsyun.baidu.com/index.php?title=jspopular3.0)以及[React](https://reactjs.org/docs/getting-started.html)有一定了解。

### 安装

```bash
yarn add rc-bmap # 或者：npm install --save rc-bmap
```

### 用法

```html
<div id="root"></div>
```

```css
#root {
  width: 600px;
  height: 400px;
}
```

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Base,
} from 'rc-bmap';

const { Point } = Base;

class Example extends Component {

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
          zoom={16}
        >
          <Point name="center" lng="116.332782" lat="40.007978" />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);

```

#### 关于ak
使用百度地图的前，请确保您已拥有一个`ak`，若您没有暂时还没有，可以[点击链接进行申请](http://lbsyun.baidu.com/apiconsole/key)。

### 更多

更多组件用法见[组件文档](/components/map)。
