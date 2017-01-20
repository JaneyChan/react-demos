import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component {

  componentDidMount() {
    this.props.getIndexData();
  }

  componentDidUpdate(prevProps) {
    console.log("prevProps.tab : " + prevProps.tab + ", this.props.tab: " + this.props.tab);
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
