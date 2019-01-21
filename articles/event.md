---
category: Article
title: 事件绑定
order: 5
---

**rc-bmap**为所有组件提供了通用的事件绑定逻辑，可通过`Base.Events`绑定任何百度提供的事件，如我们为地图绑定单击事件、双击事件：

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Constants,
  CityList,
  Base,
} from 'rc-bmap';

const { Events } = Base;

class Example extends React.Component {
  handleMapClick = () => {
    console.log('map click');
  }

  handleMapDblClick = () => {
    console.log('map double click');
  }

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={14}
          center="北京市"
          scrollWheelZoom
        >
          <Events 
            click={this.handleMapClick}
            dblclick={this.handleMapClick}
          />
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

tips: 事件名称，同[百度所提供](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html)的事件名。