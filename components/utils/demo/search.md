---
title: 根据关键字查询位置信息
order: 1
---

`BMapUtil.search(keyword, location)`方法接收两个参数，第一个参数为关键字，第二个参数为搜索范围（当前地图实例、坐标点及城市名）。

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
    BMapUtil.search('望京', window.myMap).then((res) => {
      console.log('search res:', res);
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
        <Button type='primary' onClick={this.handleClick}>获取当前地图中望京相关查询记录</Button>
      </div>
    )
  }
};

ReactDOM.render(
  <App/>,
  mountNode
)
```
