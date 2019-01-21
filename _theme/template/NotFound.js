import React from 'react';
import Layout from './Layout';

export default class NotFound extends React.Component {
  render() {
    return <Layout>
      <div id="notfound">
        <img src="https://bmap.jser-club.com/home.png" alt=""/>
        <div className="guide">
          You Got Lost
        </div>
      </div>
    </Layout>;
  }
}
