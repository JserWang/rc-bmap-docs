---
title: 基本用法
order: 1
---

```jsx
import { 
  Map,
  Base,
  TileLayer,
} from 'rc-bmap';

const { Point } = Base;

class App extends React.Component {
  getTilesUrl = (tileCoord, zoom) => {
    const { x, y } = tileCoord;
    // 根据当前坐标，选取合适的瓦片图
    return `http://lbsyun.baidu.com/jsdemo/demo/tiles/${zoom}/tile${x}_${y}.png`;
  }

  render() {
    return (
      <div style={{ height: 400}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
          zoom={16}
        >
          <Point name="center" lng="116.332782" lat="40.007978" />
          <TileLayer 
            getTilesUrl={this.getTilesUrl}
            transparentPng
          />
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
