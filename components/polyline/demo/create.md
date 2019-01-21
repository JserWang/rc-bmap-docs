---
title: 基本用法
order: 1
---

```jsx
import { 
  Map,
  Base,
  Polyline,
} from 'rc-bmap';

const { Point, Path } = Base;

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
