---
title: 加载过渡样式
order: 6
---
`Map`提供了地图加载前的过度样式，可以通过`Map.PlaceHolder`进行设置，将想要设置的样式作为`PlaceHolder`的子组件即可。

`PlaceHolder` 还提供了默认样式，若想使用默认样式，则使`PlaceHolder`的`children`为空即可，即：`<PlaceHolder />`。

```jsx
import { Map } from 'rc-bmap';

const loadingStyle = {
  position: 'relative',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const { PlaceHolder } = Map;

const App = () => (
  <div style={{ height: 400 }}>
    <Map
      ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
      center="重庆"
      zoom={12}
    >
      <PlaceHolder>
        <div style={loadingStyle}>玩命加载中...</div>
      </PlaceHolder>
    </Map>
  </div>
);
ReactDOM.render(
  <App/>,
  mountNode
)
```
