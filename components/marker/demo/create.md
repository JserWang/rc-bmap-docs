---
order: 1
title: 基本用法
---

最简单的`Marker`仅需要一个`Point`即可显示在地图中。

```jsx
import { 
  Map,
  Base,
  Marker,
} from 'rc-bmap';

const { Point } = Base;

class App extends React.Component {
  render() {
    return (
      <div style={{ height: 400}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={11}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Marker>
            <Point lng="116.404" lat="39.915" />
          </Marker>
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
