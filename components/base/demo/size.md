---
title: Size
order: 2
---

`Size`表示一个矩形区域的大小。

`Size`与`Point`用法类似，它也包含3个属性，`name`、`width`、`height`。

`width`、`height`分别为宽高值。

`name`属性用于标识这个`size`对应的属性名，它常用在控件中标识`offset`属性。

```jsx
import { Map, Base, Navigation } from 'rc-bmap';

const { Point, Size } = Base;

class App extends React.Component {

  render() {
    return (
      <div style={{ height: '400px'}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={14}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Navigation>
            <Size name="offset" width="100" height="20" />
          </Navigation>
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