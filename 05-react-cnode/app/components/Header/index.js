import React from 'react';
import { Link } from 'react-router';

const styles = {
  header: {
    backgroundColor: '#444',
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
  },
  inner: {
    maxWidth: '800px',
    boxSizing: 'borderBox',
    margin: '0 auto',
    padding: '15px 5px',
  },
  logo: {
    display: 'inline',
    paddingRight: '30px',
  },
  link: {
    color: '#fff',
    fontSize: '16px',
    marginRight: '20px',
    cursor: 'pointer',
  },
};

class Inner extends React.Component {
  render() {
    return(
      <div style={styles.inner}>
        <span style={styles.logo}>
          <img src="../assets/cnodejs_light.svg" style={{height: 25}} />
        </span>
        <Link style={styles.link} to="/">全部</Link>
        <Link style={styles.link} to="/good">精华</Link>
        <Link style={styles.link} to="/share">分享</Link>
        <Link style={styles.link} to="/job">工作</Link>
      </div>
    );
  }
}

export default class Header extends React.Component {
  render() {
    return(
      <div>
        <header style={styles.header}>
          <Inner />
        </header>
        {this.props.children}
      </div>
    );
  }
};
