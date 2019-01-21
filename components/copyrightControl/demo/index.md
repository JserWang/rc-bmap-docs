---
title: 示例
---

```jsx
import { 
  Map,
  Base,
  CopyrightControl,
  Constants,
} from 'rc-bmap';

const { CONTROL_ANCHOR } = Constants;
const { Point } = Base;
const { Copyright } = CopyrightControl;

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
          <CopyrightControl
            anchor={CONTROL_ANCHOR.TOP_RIGHT}
          >
            <Copyright>
              <a href="#">这是第一版权控件</a>
            </Copyright>
            <Copyright>
              <a href="#">我是自定义版权控件</a>
            </Copyright>
          </CopyrightControl>
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