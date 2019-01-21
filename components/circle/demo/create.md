---
title: 基本用法
order: 1
---

```jsx
import { 
  Map,
  Base,
  Circle,
} from 'rc-bmap';

const { Point } = Base;

class App extends React.Component {
  render() {
    return (
      <div style={{ height: 400}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={15}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Circle
            strokeColor="blue"
            radius={500}
            strokeWeight={2}
            strokeOpacity={0.5}
          >
            <Point name="center" lng="116.404" lat="39.915" />
          </Circle>
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
