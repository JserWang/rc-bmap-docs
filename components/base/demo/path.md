---
title: Path
order: 4
---

`Path`作为一个包裹`Point`的包裹容器提供使用，用于为`Polyline`、`Polygon`、`PointCollection`等覆盖物设置坐标集合。

```jsx
import { Map, Base, Polyline } from 'rc-bmap';

const { Point, Path } = Base;

const polylinePoints = [
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
      <div style={{ height: '400px'}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
          zoom={14}
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Polyline
            strokeColor="blue"
            strokeWeight={2}
            strokeOpacity={0.5}
          >
            <Path>
              {
                polylinePoints.map((item, index) => (
                  <Point key={index} lng={item.lng} lat={item.lat} />
                ))
              }
            </Path>
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