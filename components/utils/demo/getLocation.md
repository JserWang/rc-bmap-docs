---
title: 对指定坐标点解析，返回地址信息
order: 4
---

`BMapUtil.getLocation(point)`接收一个参数，`BPoint`类型的坐标点。

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
    BMapUtil.getLocation(BMapUtil.BPoint({lng: 116.404, lat: 39.915})).then((res) => {
      console.log('res:', res);
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
        <Button type='primary' onClick={this.handleClick}>获取解析结果</Button>
      </div>
    )
  }
};

ReactDOM.render(
  <App/>,
  mountNode
)
```
