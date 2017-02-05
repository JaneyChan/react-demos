import React from 'react';
import UserListItem from './UserListItem';

// const UserReplys = (list) => (
//   <div>
//     {list.map(
//       (ele, index) => {
//         return <UserListItem item={ele} key={index} />
//       })
//     }
//   </div>
// )

class UserTopics extends React.Component {
  render() {
    return(
      <div>
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
      </div>
    );   
  }
}

export default UserTopics;
