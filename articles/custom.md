---
title: 自定义控件与覆盖物
order: 2
---

### 何时需要自定义控件或自定义覆盖物

1. 当你需要与其他UI组件库结合的时候。
2. 当百度提供的默认样式没办法满足业务使用需求时。

### 如何封装一个自定义控件

**rc-bmap**为使用者提供了`CustomControl`与`CustomOverlay`两个高阶组件，引入后，通过**装饰器**包装导出，即可在`Map`中使用，在被包装的组件中，你可以通过`props.map`拿到当前组件所在的地图实例。

在线的示例请访问 [Demo](https://jsfiddle.net/ioslh/h4u8mdng/25/)。

```jsx

import React, { Component } from 'react';
import { CustomControl } from 'rc-bmap';
import styles from './index.css';

@CustomControl
class ZoomControl extends Component {
  handleZoomIn = () => {
    this.props.map.zoomIn();
  }

  handleZoomOut = () => {
    this.props.map.zoomOut();
  }

  render() {
    return (
      <div className={styles.zoomContainer}>
        <div className={styles.zoomWrapper} onClick={this.handleZoomIn}>
          +
        </div>
        <div className={styles.line} />
        <div className={styles.zoomWrapper} onClick={this.handleZoomOut}>
          -
        </div>
      </div>
    );
  }
}

export default ZoomControl;

```

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Base,
  Constants,
} from 'rc-bmap';
import ZoomControl from './ZoomControl';

const { Point, Size } = Base;
const { CONTROL_ANCHOR } = Constants;

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
          <ZoomControl anchor={CONTROL_ANCHOR.BOTTOM_RIGHT}>
            <Size name="offset" width="10" height="20" />
          </ZoomControl>
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

自定义覆盖物与自定义控件同理，将`CustomControl`替换为`CustomOverlay`即可。