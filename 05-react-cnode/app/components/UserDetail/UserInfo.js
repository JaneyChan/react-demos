import React from 'react';
// import TIme from '../Time';

const styles = {
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '3px', 
    marginRight: '10px',
  }
};

// class UserInfo extends React.Component {
//   render() {
//     return(
//       <div>
//         <div style={{margin:'10px 0',display:'flex',alignItems:'center'}}>
//           <img src={this.props.avatar} style={styles.avatar} />
//           <span>{this.props.loginname}</span>
//         </div>
//         <div style={{margin: '10px 0'}}>
//           {this.props.score} 积分
//         </div>
//         <div>
//           注册时间：{this.props.createAt}
//         </div>
//       </div>
//     );
//   }
// }

const UserInfo = ({ avatar, loginname, score, createAt}) => (
  <div>
    <div style={{margin:'10px 0',display:'flex',alignItems:'center'}}>
      <img src={avatar} style={styles.avatar} />
      <span>{loginname}</span>
    </div>
    <div style={{margin: '10px 0'}}>
      {score} 积分
    </div>
    <div>
      注册时间：{createAt}
    </div>
  </div>
);

export default UserInfo;
