---
title: 在Marker中添加文本标签
order: 2
---

```jsx
import { Map, Label, Base, Marker } from 'rc-bmap';

const { Content } = Label;

const { Point, Size } = Base;

const style = {
  color: 'red',
  fontSize: '12px',
  height: '20px',
  lineHeight: '20px',
  fontFamily: '微软雅黑',
};

class App extends React.Component {
  render() {
    return (
      <div style={{ height: 400 }}>
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
    );
  }
}

ReactDOM.render(<App/>, mountNode)

```
