---
category: Article
title: 原生BMap对象
order: 4
---

**rc-bmap** 基于百度地图封装，当组件没有办法满足于你当下的需求，需要取得百度原生对象调用方法时，**任何rc-bmap所提供的组件**你都可以通过`ref.instance` 取得对应组件所对应的实例对象。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Constants,
  CityList,
  Base,
} from 'rc-bmap';

const { CONTROL_ANCHOR } = Constants;
const { Size, Point } = Base;

class Example extends React.Component {
  getCityListRef = (ref) => {
    if (ref) {
      // 这里可以取得cityList的百度对象
      this.cityList = ref.instance;
    }
  }

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={14}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <CityList ref={this.getCityListRef} anchor={CONTROL_ANCHOR.TOP_LEFT}>
            <Size name="offset" width="10" height="20" />
          </CityList>
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