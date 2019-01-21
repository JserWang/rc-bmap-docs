---
title: Point
order: 1
---

`Point`是一个非常常见的组件，它包含3个属性，`name`、`lng`、`lat`。

`lng`、`lat`分别为经纬度值。

`name`属性用于标识这个`point`对应的属性名，也许这么说你会觉得抽象，举个最简单的例子，在百度地图中初始化示例对象时，构造函数中需要传递的`Point`类型的参数名，即为`name`的值：

```js
// 初始化Circle时，new Circle(center, radius, opts); 需要传递三个参数，所以此时，Point对应的name为`center`

// 引入
import { Circle, Base } from 'rc-bmap';
const { Point } = Base;

// 使用时：
<Point name="center" lng="" lat="" />

// 初始化Bounds时，new Bounds(sw, ne); 需要传递两个参数，所以此时应有两个`Point`，name分别为 sw、ne。


// 使用时：
<Point name="sw" lng="" lat="" />
<Point name="ne" lng="" lat="" />
```

```jsx
import { Map, Base, Circle } from 'rc-bmap';

const { Point } = Base;

class App extends React.Component {

  render() {
    return (
      <div style={{ height: '400px'}}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          name="myFirstMap"
          mounted={this.handleMapMounted}
          zoom={15}
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Circle
            strokeColor="blue"
            radius={500}
            strokeWeight={2}
            strokeOpacity={0.5}
          >
            <Point name="center" lng="116.404" lat="39.915" />
          </Circle>
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