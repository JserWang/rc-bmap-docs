---
title: 对指定的地址进行解析，返回坐标点
order: 3
---

`BMapUtil.getPoint(address, city)`接收两个参数，第一个为解析地址，第二个为城市名。

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
    BMapUtil.getPoint('天安门', '北京市').then((res) => {
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
