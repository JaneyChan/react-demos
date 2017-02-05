import React from 'react';
import UserListItem from './UserListItem';

// const UserTopics = (list) => (
//   <div>
//     {list.map(
//       (ele, index) => {
//         return <UserListItem item={ele} key={index} />
//       })
//     }
//   </div>
// )

const UserTopics = () => (
  <div>
    <UserListItem />
    <UserListItem />
    <UserListItem />
    <UserListItem />
  </div>
);

export default UserTopics;
