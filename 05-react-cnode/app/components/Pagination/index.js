import React from 'react';
import { Pagination } from 'antd';

const styles = {
  box: {
    // background: '#fff',
    borderRadius: '2px',
    padding: '15px 30px',
    marginBottom: '20px',
    boxShow: '0 1 2px rgba(0, 0, 0, .1)',
    display: 'flex',
    justifyContent: 'center',
  },
};

class Page extends React.Component {

  render() {
    return (
      <div style={styles.box}>
        <Pagination
          defaultCurrent={this.props.pageIndex}
          current={this.props.pageIndex}
          total={200}
          onChange={(index)=>this.props.onChange(index)}
        />
      </div>
    );
  }
}

export default Page;
