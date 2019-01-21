---
order: 5
title: 设置Icon
---

可通过`Marker.Icon`设置自定义图片，`Icon`支持配置属性如下：

| 属性  | 类型 | 默认取值 | 说明 |
|-------|-----|------|-----|
| imageUrl | `String` | 图标的地址 |
| anchor | `Size` | 图标的定位点相对于图标左上角的偏移值 |
| size | `Size` | 图标可视区域的大小 |
| imageOffset | `Size` | 图标所用的图片相对于可视区域的偏移值，此功能的作用等同于CSS中的`background-position`属性 |
| imageSize | `Size` | 图标所用的图片的大小，此功能的作用等同于CSS中的`background-size`属性。可用于实现高清屏的高清效果 |
| infoWindowAnchor | `Size` | 信息窗口开启位置相对于图标左上角的偏移值 |

tips: `Icon`中的Size均通过`Size`指定`name`属性作为`Icon`子组件传入。

```jsx
import { 
  Map,
  Base,
  Marker,
} from 'rc-bmap';

const { Point, Size } = Base;
const { Icon } = Marker;

class App extends React.Component {
  render() {
    return (
      <div style={{ height: 400}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={12}
          scrollWheelZoom
        >
          <Point name="center" lng="116.400244" lat="39.92556" />
          <Marker>
            <Point lng="116.404" lat="39.915" />
            <Icon
              imageUrl="http://lbsyun.baidu.com/jsdemo/img/fox.gif"
            >
              <Size width="300" height="157" />
            </Icon>
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
