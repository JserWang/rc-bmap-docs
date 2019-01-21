---
title: 示例
---

```jsx
import { 
  Map,
  Base,
  Geolocation,
} from 'rc-bmap';

const { Point, Events } = Base;

class App extends React.Component {
  handleLocationSuccess = (e) => {
    // 定位成功事件
    let address = '';
    address += e.addressComponent.province;
    address += e.addressComponent.city;
    address += e.addressComponent.district;
    address += e.addressComponent.street;
    address += e.addressComponent.streetNumber;
    alert(`当前定位地址为：${address}`);
  }

  handleLocationError = (e) => {
    // 定位失败事件
    alert(e.message);
  }

  render() {
    return (
      <div style={{ height: 400}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={11}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Geolocation>
            <Events 
              locationSuccess={this.handleLocationSuccess}
              locationError={this.handleLocationError}
            />
          </Geolocation>
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