---
title: 获取当前位置信息
order: 2
---

```jsx
import { Button } from 'antd';
import { 
  Map,
  BMapUtil,
  Base,
} from 'rc-bmap';

const { Point } = Base;

class App extends React.Component {
  handleClick = () => {
    BMapUtil.getCurrentPosition().then((res) => {
      console.log('position:', res);
    })
  }

  render() {
    return (
      <div style={{ height: 360}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          name="myMap"
          zoom={13}
        >
          <Point name="center" lng="116.404" lat="39.915" />
        </Map>
        <Button type='primary' onClick={this.handleClick}>获取当前位置信息</Button>
      </div>
    )
  }
};

ReactDOM.render(
  <App/>,
  mountNode
)
```
