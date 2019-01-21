---
title: Bounds
order: 3
---

`Bounds`表示创建一个包含所有给定点坐标的矩形区域。

`Bounds`包含2个属性`ne`、`sw`，`ne`表示矩形区域的东北角经纬度，`sw`表示矩形区域的西南角经纬度。

`Bounds`应包含两个`Point`作为子组件。

```jsx
import { Map, Base, Ground } from 'rc-bmap';

const { Point, Bounds } = Base;

class App extends React.Component {

  render() {
    return (
      <div style={{ height: '400px'}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
          zoom={11}
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Ground
            imageURL="http://lbsyun.baidu.com/jsdemo/img/si-huan.png"
            opacity={1}
            displayOnMinLevel={10}
            displayOnMaxLevel={14}
          >
            <Bounds>
              <Point name="sw" lng="116.295" lat="39.837" />
              <Point name="ne" lng="116.475" lat="39.976" />
            </Bounds>
          </Ground>
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