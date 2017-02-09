import React from 'react';
import SwitchPageCon from '../containers/SwitchPageCon';
import TopicsListCon from '../containers/TopicsListCon';

const styles = {
  box: {
    backgroundColor: '#fff',
    borderRadius: '4px',
    margin: '20px auto',
    width: '800px',
  },
};

class Content extends React.Component {
  
  componentDidMount() {
    document.title = 'CNode'
  }

  render() {
    const path = this.props.location.pathname;
    const tab = path.substr(1);
    return (
      <div style={styles.box}>
        <TopicsListCon tab={tab} pageIndex={1} />
        <SwitchPageCon tab={tab} pageIndex={1} />
      </div>
    );
  }
}

export default Content;
