---
title: 基本用法
order: 1
---

```jsx
import { 
  Map,
  Base,
  TrafficLayer,
} from 'rc-bmap';

const { Point, Path } = Base;

class App extends React.Component {
  render() {
    return (
      <div style={{ height: 400}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
          zoom={13}
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <TrafficLayer />
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
