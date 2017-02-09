import React from 'react';
import UserListItem from './UserListItem';

class UserTopics extends React.Component {
  render() {
    const topics = this.props.topics;
    if (!topics) {
      return (<div></div>);
    }
    return (
      <div>
        {
          topics.map((ele, index) => {
            return <UserListItem topic={ele.toJS()} key={index} />
          })
        }
      </div>
    );
  }
}

export default UserTopics;
