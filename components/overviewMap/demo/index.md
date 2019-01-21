---
title: 示例
---

```jsx
import { 
  Map,
  Base,
  OverviewMap,
  Constants,
} from 'rc-bmap';

const { CONTROL_ANCHOR } = Constants;
const { Point } = Base;

class App extends React.Component {
  render() {
    return (
      <div style={{ height: 400 }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={11}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <OverviewMap
            anchor={CONTROL_ANCHOR.BOTTOM_RIGHT}
            isOpen
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