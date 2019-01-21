---
title: 示例
---

在地图的左上、右上分别展示完整、缩略样式的缩放平移控件。

若想设置控件类型，可以通过`type`属性设置缩放控件的类型，其中所包含`type`已在`Constants`中的`NAVIGATION_CONTROL_TYPE`中提供。

```jsx
import { 
  Map,
  Base,
  Navigation,
  Constants,
} from 'rc-bmap';

const { CONTROL_ANCHOR, NAVIGATION_CONTROL_TYPE } = Constants;
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
          <Navigation />
          <Navigation
            anchor={CONTROL_ANCHOR.TOP_RIGHT}
            type={NAVIGATION_CONTROL_TYPE.SMALL}
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