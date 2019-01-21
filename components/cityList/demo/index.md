---
title: 示例
---

```jsx
import { 
  Map,
  Base,
  CityList,
  Constants,
} from 'rc-bmap';

const { CONTROL_ANCHOR } = Constants;
const { Point, Size, Events } = Base;

class App extends React.Component {
  onChangeBefore = () => {
    console.log('onChangeBefore');
  }

  onChangeAfter = () => {
    console.log('onChangeAfter');
  }

  onChangeSuccess = () => {
    console.log('onChangeSuccess');
  }

  render() {
    return (
      <div style={{ height: 400}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={11}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <CityList anchor={CONTROL_ANCHOR.TOP_LEFT}>
            <Size name="offset" width="10" height="20" />
            <Events
              onChangeBefore={this.onChangeBefore} 
              onChangeAfter={this.onChangeAfter}
              onChangeSuccess={this.onChangeSuccess}
            />
          </CityList>
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