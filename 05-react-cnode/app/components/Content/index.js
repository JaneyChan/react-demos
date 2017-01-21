import React from 'react';

const styles = {
  box: {
    backgroundColor: '#fff',
    borderRadius: '4px',
    margin: '20px auto 10px',
    width: '800px',
  },
};

class Content extends React.Component {
  render() {
    return (
      <div style={styles.box}>
        {this.props.children}
      </div>
    );
  }
}

export default Content;
