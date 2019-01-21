---
title: 示例
---

```jsx
import { 
  Map,
  Base,
  Panorama,
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
          <Panorama anchor={CONTROL_ANCHOR.TOP_LEFT} />
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