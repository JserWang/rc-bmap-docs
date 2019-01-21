---
order: 6
title: 右键菜单
---

通过`Marker.ContextMenu`为`Marker`绑定右键菜单，其用法与`Map`一致。

```jsx
import { 
  Map,
  Base,
  Marker,
  Constants,
} from 'rc-bmap';

const { Point, Size } = Base;
const { CONTEXT_MENU_ICON } = Constants;
const { ContextMenu } = Marker;
const MenuItem = ContextMenu.Item;

class App extends React.Component {
  state = {
    dragging: false,
  }

  handleEnableDragging = () => {
    this.setState({
      dragging: true,
    });
  }

  handleDisableDragging = () => {
    this.setState({
      dragging: false,
    });
  }

  render() {
    const { dragging } = this.state;
    return (
      <div style={{ height: 400}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={12}
          scrollWheelZoom
          mapClick={false}
        >
          <Point name="center" lng="116.400244" lat="39.92556" />
          <Marker dragging={dragging}>
            <Point lng="116.404" lat="39.915" />
            <ContextMenu>
              <MenuItem
                disabled={dragging}
                text="设置可拖拽"
                onClick={this.handleEnableDragging}
              />
              <MenuItem
                disabled={!dragging}
                text="取消可拖拽"
                onClick={this.handleDisableDragging}
              />
            </ContextMenu>
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
