import React from 'react';
import SwitchPageCon from '../containers/SwitchPageCon';
import Content from '../components/Content';
import TopicsListCon from '../containers/TopicsListCon';

export default class Index extends React.Component {

  componentDidMount() {
    document.title = 'CNode'
  }

  render() {
    const path = this.props.location.pathname;
    const tab = path.substr(1);
    return (
      <div>
        <Content>
          <TopicsListCon tab={tab} pageIndex={1} />
        </Content>
        <SwitchPageCon tab={tab} pageIndex={1} />
      </div>
    );
  }
}
