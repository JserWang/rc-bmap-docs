---
title: 基本用法
order: 1
---

```jsx
import { 
  Map,
  Base,
  Boundary,
} from 'rc-bmap';

const { Point } = Base;

class App extends React.Component {
  render() {
    return (
      <div style={{ height: 400}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={5}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Boundary
            autoViewport
            name="朝阳区"
            strokeColor="#ff0000"
            strokeWeight={2}
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
