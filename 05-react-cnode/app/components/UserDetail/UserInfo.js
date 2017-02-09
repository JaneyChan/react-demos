import React from 'react';
import Time from '../Time';

const styles = {
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '3px', 
    marginRight: '10px',
  }
};

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
      注册时间：{Time(createAt)}
    </div>
  </div>
);

export default UserInfo;
