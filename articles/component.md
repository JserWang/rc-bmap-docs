---
title: 一切皆组件
order: 3
---

### 为什么一个简单的字面量值都要作为组件去处理？

在`React`的`render`函数中，如果使用字面量值，当状态发生改变，重新触发`render`函数时，会发生什么样的事情？

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Child extends Component {
  componentWillReceiveProps(newProps) {
    console.log('child component compare result: ',
      newProps.style === this.props.style, newProps.onClick === this.props.onClick);
  }

  render() {
    console.log('in child render');
    return (
      <div
        style={this.props.style}
        onClick={this.props.onClick}
      ></div>
    );
  }
}

class Example extends Component {
  state = {
  	number: 0
  }

  render() {
    return (
      <React.Fragment>
        <Child
          style={{width: 100, height: 100, backgroundColor: 'red'}}
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        />
        <div>{this.state.number}</div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);

```

上面的**Demo**，每次点击`div`时，看看控制台中的输出是什么？

每次`render`导致`onClick`中的匿名箭头函数被重新初始化，`style`中的字面量值被重新初始化。两次无意义的初始化造成了不必要的开销。

**当然，你可以说把字面量值放到`constructor`中或者`class`外部定义不就好了嘛。**

我们在这次`1.0.0`的升级中，**兼容**了两种写法，既可以通过字面量值传递，也可以通过[Base]()中提供的组件进行属性赋值。

但我还是推荐你通过`Base`来进行属性赋值，因为它使用了[PureComponent]()，如果用习惯了，它真的太好用了。