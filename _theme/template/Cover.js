import React from 'react';
import { Map, Base } from 'rc-bmap';
import { Link } from 'react-router';

const { Point } = Base;

export default function Cover() {
  return <div className="cover-wrapper">
    <div className="cover-map">
      <Map
        ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
        zoom={16}
      >
        <Point name="center" lng="116.332782" lat="40.007978" />
      </Map>
    </div>
    <div className="cover-content">
      <img width="240" src="https://bmap.jser-club.com/home.png" alt=""/>
      <h3>rc-bmap</h3>
      <div className="cover-link">
        <a className="github" href="https://github.com/JserWang/rc-bmap" target="_blank">GitHub</a>
        <Link className="start" to="/articles/start" >Get Started</Link>
      </div>
      <div className="slogan">
        Everything is component.
      </div>
    </div>
  </div>;
}
