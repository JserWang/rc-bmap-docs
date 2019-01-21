---
title: 折线符号
order: 3
---

可通过`Polyline.IconSequence`设置折线的`Polyline`，`Polyline.IconSequence`的属性为：

| 属性  | 类型 | 说明 |
|-------|-----|------|-----|
| symbol | `Symbol` | 符号样式 |
| offset | `String` | 符号相对于线起点的位置，取值可以是百分比也可以是像素位置，默认为"100%" |
| repeat | `String`  | 符号在线上重复显示的距离，可以是百分比也可以是距离值，同时设置repeat与offset时，以repeat为准 |

关于`Symbol`的用法，见[Marker中的Symbol]()。

```jsx
import { 
  Map,
  Base,
  Polyline,
  Constants,
} from 'rc-bmap';

const { SYMBOL_SHAPE_TYPE } = Constants;
const { Point, Path } = Base;
const { IconSequence } = Polyline;
const { Symbol } = IconSequence;

const points = [
  {
    lng: 116.399,
    lat: 39.910,
  },
  {
    lng: 116.405,
    lat: 39.920,
  },
  {
    lng: 116.425,
    lat: 39.900,
  },
];

class App extends React.Component {
  render() {
    return (
      <div style={{ height: 400}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={14}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Polyline
            strokeColor="#18a45b"
            strokeWeight={8}
            strokeOpacity={0.8}
            editing={false}
            clicking
          >
            <Path>
              {
                points.map((item, index) => (
                  <Point key={index} lng={item.lng} lat={item.lat} />
                ))
              }
            </Path>
            <IconSequence
              offset="10"
              repeat="30"
            >
              <Symbol
                path={SYMBOL_SHAPE_TYPE.BACKWARD_OPEN_ARROW}
                sclae={0.6}
                strokeColor="#fff"
                strokeWeight={2}
              />
            </IconSequence>
          </Polyline>
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
