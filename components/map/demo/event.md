---
title: 绑定事件
order: 8
---

**rc-bmap**提供的任何组件，都可通过`Base.Events`进行事件绑定，详见：[事件绑定]()

```jsx
import { Map, Base } from 'rc-bmap';

const { Point, Events } = Base;

class App extends React.Component {
  handleMapClick = () => {
    console.log('map click');
  }
  
  handleMapDblClick = () => {
    console.log('map double click');
  }

  render() {
    return <div style={{ height: '400px'}}>
      <Map
        ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
        zoom={11}
      >
        <Point name="center" lng="116.404" lat="39.915" />
        <Events
          click={this.handleMapClick}
          dblclick={this.handleMapDblClick}
        />
      </Map>
    </div>
  }
}

ReactDOM.render(
  <App/>,
  mountNode
)
```
