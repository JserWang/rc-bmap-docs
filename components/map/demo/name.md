---
title: 实例别名
order: 4
---

当你想为地图组件起个别名，后续在其他类、方法中使用时，可以通过`name`属性进行设置。
[点我试试]()

```jsx
import { Map, Base } from 'rc-bmap';

const { Point } = Base;

class App extends React.Component {
  handleMapMounted() {
    // 在地图加载完成后，即可通过window[name]取得对应地图实例
    console.log(window.myFirstMap);
  }

  render() {
    return (
      <div style={{ height: '400px'}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          name="myFirstMap"
          mounted={this.handleMapMounted}
          zoom={11}
        >
          <Point name="center" lng="116.404" lat="39.915" />
        </Map>
      </div>
    )
  }
};

ReactDOM.render(
  <App/>,
  mountNode
)
```

