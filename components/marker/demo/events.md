---
order: 8
title: 事件绑定
---

```jsx
import { 
  Map,
  Base,
  Marker,
} from 'rc-bmap';

const { Point, Size, Events } = Base;

class App extends React.Component {
  handleMarkerClick = () => {
    console.log('marker click');
  }

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
            <Events
              click={this.handleMarkerClick}
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