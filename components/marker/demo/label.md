---
order: 4
title: 设置文本标签
---

这里关于`Label`的详细用法可见[Label]()。

```jsx
import { 
  Map,
  Base,
  Marker,
  Label,
} from 'rc-bmap';

const { Point, Size } = Base;
const { Content } = Label;

class App extends React.Component {
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
            <Point lng="116.400244" lat="39.92556" />
            <Label>
              <Size name="offset" width="20" height="-10" />
              <Content>
                我是文字标注哦
              </Content>
            </Label>
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
