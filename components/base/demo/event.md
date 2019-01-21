---
title: Events
order: 5
---

`Events`组件中所有`props`都将透传给百度地图原生对象，通过`addEventListener`进行事件绑定，所以`props`的`name`为百度地图原生提供的事件名。

```jsx
import { Map, Base } from 'rc-bmap';

const { Point, Events } = Base;

class App extends React.Component {
  handleMapClick = () => {
    console.log('地图单击事件');
  }

  render() {
    return (
      <div style={{ height: '400px'}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={14}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Events click={this.handleMapClick} />
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