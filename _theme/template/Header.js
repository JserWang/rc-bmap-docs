import React from 'react';
import { Link } from 'react-router';
import { Icon } from 'antd';

export default function Header(props) {
  const route = props.route;
  let path = '';
  if (route && route.path) {
    path = route.path;
  }
  return <header id="header">
    <div className="header-inner">
      <h2>React&百度地图</h2>
      <ul>
        <li><Link to="/"><Icon type="home"/><span>首页</span></Link></li>
        <li><Link className={path.indexOf('articles') === -1 ? '' : 'current'} to="/articles/start"><Icon type="bulb"/><span>快速开始</span></Link></li>
        <li><Link className={path.indexOf('components') === -1 ? '' : 'current'} to="/components/about"><Icon type="appstore-o"/><span>组件文档</span></Link></li>
        <li><a href="https://github.com/JserWang/rc-bmap" target="_blank"><Icon type="github"/><span>GitHub</span></a></li>
        <li><a href="http://jser.wang/bmap/examples" target="_blank"><span>示例</span></a></li>
      </ul>
    </div>
  </header>;
}
