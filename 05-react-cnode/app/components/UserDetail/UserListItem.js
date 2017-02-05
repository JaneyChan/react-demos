import React from 'react';
import Time from '../Time';

const styles = {
  listBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #f0f0f0',
  },
  listAvatar: {
    width: '30px',
		height: '30px',
    borderRadius: '3px',
    marginRight: '10px'
  },
  listTitle: {
		flex: 1
	},
}


const UserListItem = () => (
  <div style={styles.listBox}>
    <img style={styles.listAvatar} src={'http://www.qqpk.cn/Article/UploadFiles/201202/20120212114848399.jpg'} />
    <span>{'我的标题'}</span>
    <span>{'2016-10-01'}</span>
  </div>
);

export default UserListItem;