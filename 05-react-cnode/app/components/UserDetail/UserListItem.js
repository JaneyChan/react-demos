import React from 'react';
import { Link } from 'react-router';
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


class UserListItem extends React.Component {
  render() {
    const topic = this.props.topic;

    return (
      <div style={styles.listBox}>
        <img style={styles.listAvatar} src={topic.author.avatar_url} />
        <Link style={styles.listTitle} to={`/`}>{topic.title}</Link>
        <span>{Time(topic.last_reply_at)}</span>
      </div>
    );
  }
}

export default UserListItem;