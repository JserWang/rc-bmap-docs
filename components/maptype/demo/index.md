---
title: 示例
---

```jsx
import { 
  Map,
  Base,
  MapType,
  Constants,
} from 'rc-bmap';

const { CONTROL_ANCHOR, MAP_TYPE } = Constants;
const { Point } = Base;

const mapTypes = [MAP_TYPE.NORMAL, MAP_TYPE.HYBRID];
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
          <MapType mapTypes={mapTypes} />
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