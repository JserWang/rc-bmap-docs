---
order: 2
title: 设置拖拽
---

`Marker`提供了`dragging`属性，设置是否可拖拽。

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
          <Marker dragging>
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
