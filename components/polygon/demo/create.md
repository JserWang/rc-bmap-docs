---
title: 基本用法
order: 1
---

```jsx
import { 
  Map,
  Base,
  Polygon,
} from 'rc-bmap';

const { Point, Path } = Base;

const points = [
  {
    lng: 116.387112,
    lat: 39.920977,
  }, {
    lng: 116.385243,
    lat: 39.913063,
  },
  {
    lng: 116.394226,
    lat: 39.917988,
  },
  {
    lng: 116.401772,
    lat: 39.921364,
  },
  {
    lng: 116.41248,
    lat: 39.927893,
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
          <Polygon
            strokeColor="blue"
            strokeWeight={2}
            strokeOpacity={0.5}
          >
            <Path>
              {
                points.map((item, index) => (
                  <Point key={index} lng={item.lng} lat={item.lat} />
                ))
              }
            </Path>
          </Polygon>
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
