import React from 'react';
import ListItem from './TopicItem';

export default class TopicList extends React.Component {

  componentDidMount() {
    this.props.getIndexData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tab !== this.props.tab) {
      this.props.getIndexData();
    }
  }

  render() {
    const items = this.props.list;
    if (!items) {
      return (<div></div>);
    }
    
    return (
      <div>
        {
          items.map((ele, index) => {
            return <ListItem item={ele.toJS()} key={index} />
          })
        }
      </div>
    );
  }
}
