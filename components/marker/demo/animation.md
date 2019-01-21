---
order: 3
title: 设置动画
---

`Marker`可通过`animation`设置动画，其中`animation`的值来自于`Constants`中的`ANIMATION`。

```jsx
import { 
  Map,
  Base,
  Marker,
  Constants,
} from 'rc-bmap';

const { Point } = Base;
const { ANIMATION } = Constants;

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
          <Marker animation={ANIMATION.BOUNCE}>
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
