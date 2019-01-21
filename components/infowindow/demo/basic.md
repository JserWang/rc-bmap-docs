---
title: 基本用法
order: 1
---

```jsx
import { 
  Map,
  Base,
  Marker,
  InfoWindow,
} from 'rc-bmap';

const { Point, Events } = Base;
const { Title, Content } = InfoWindow;

class App extends React.Component {
  state = {
    visible: false,
  }

  clickMarker = () => {
    this.setState({
      visible: true,
    });
  }

  closeInfoWindow = () => {
    console.log('in close');
  }

  render() {
    const {
      visible
    } = this.state;
    return (
      <div style={{ height: 380 }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={15}
          scrollWheelZoom
          mapClick={false}
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Marker>
            <Point lng="116.404" lat="39.915" />
            <Events click={this.clickMarker} />
          </Marker>
          <InfoWindow visible={visible}>
            <Point lng="116.404" lat="39.915" />
            <Title>海底捞王府井店</Title>
            <Content>
              地址：北京市东城区王府井大街88号乐天银泰百货八层
            </Content>
            <Events close={this.closeInfoWindow} />
          </InfoWindow>
        </Map>
        点击标注点，可查看由纯文本构成的简单型信息窗口
      </div>
    );
  }
};

ReactDOM.render(
  <App/>,
  mountNode
)
```
