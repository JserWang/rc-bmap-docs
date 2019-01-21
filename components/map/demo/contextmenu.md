---
title: 右键菜单
order: 7
---

通过`Map.ContextMenu`可为地图绑定右键菜单，其中，`MenuItem`所提供的属性见：[右键菜单]()

```jsx
import { Map, Base, Constants } from 'rc-bmap';

const { Point, Events } = Base;
const { CONTEXT_MENU_ICON } = Constants;
const { ContextMenu } = Map;
const MenuItem = ContextMenu.Item;

class App extends React.Component {

  handleZoomInClick = () => {
    window.mapInstance.zoomIn();
  }

  handleZoomOutClick = () => {
    window.mapInstance.zoomOut();
  }

  render() {
    return (
      <div style={{ height: 400 }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          name="mapInstance"
          zoom={11}
          scrollWheelZoom // 设置滚轮缩放
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <ContextMenu>
            <MenuItem
              text="放大"
              iconUrl={CONTEXT_MENU_ICON.ZOOM_IN}
              separator
              onClick={this.handleZoomInClick}
            />
            <MenuItem
              disabled
              iconUrl={CONTEXT_MENU_ICON.ZOOM_OUT}
              text="缩小"
              onClick={this.handleZoomOutClick}
            />
          </ContextMenu>
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  mountNode
)
```
