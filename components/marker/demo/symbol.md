---
order: 7
title: 矢量图标
---

通过`Marker.Symbol`设置`Marker`显示矢量图标样式。

这里需要**注意**：`Symbol`会覆盖`Icon`，`Symbol`支持设置的属性如下：

| 属性  | 类型 | 说明 |
|-------|-----|------|-----|
| anchor | `Size` | 符号的位置偏移值 |
| fillColor | `String` | 设置矢量图标的填充颜色。支持颜色常量字符串、十六进制、RGB、RGBA等格式 |
| fillOpacity | `Number`  | 设置矢量图标填充透明度,范围0~1 |
| scale | `Number`  | 设置矢量图标的缩放比例 |
| rotation | `Number`  | 设置矢量图标的旋转角度,参数为角度 |
| strokeColor | `String`  | 设置矢量图标的线填充颜色,支持颜色常量字符串、十六进制、RGB、RGBA等格式 | 
| strokeOpacity | `Number` | 设置矢量图标线的透明度,opacity范围0~1 | 
| strokeWeight | `Number` | 旋设置线宽。如果此属性没有指定，则线宽跟scale数值相同 | 

```jsx
import { 
  Map,
  Base,
  Marker,
  Constants,
} from 'rc-bmap';

const { Symbol } = Marker;
const { Point } = Base;
const { SYMBOL_SHAPE_TYPE } = Constants;

class App extends React.Component {
  render() {
    return (
      <div style={{ height: 400}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={12}
          scrollWheelZoom
          mapClick={false}
        >
          <Point name="center" lng="116.400244" lat="39.92556" />
          <Marker>
            <Point lng="116.404" lat="39.915" />
            <Symbol
              path={SYMBOL_SHAPE_TYPE.FORWARD_CLOSED_ARROW}
              scale={5}
              fillColor="red"
              strokeWeight={1}
              fillOpacity={0.8}
            />
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
