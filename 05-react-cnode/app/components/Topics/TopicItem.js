import React from 'react';
import { Link } from 'react-router';
import Time from '../Time';

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #eaeaea',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '3px',
    marginRight: '15px',
  },
  title: {
    flex: 1,
  },
};

class TopicItem extends React.Component {
  render() {
    return (
      <div style={styles.box}>
        <Link to={'/'}>
          <img
            style={styles.avatar}
            src={this.props.item.author.avatar_url}
            alt={this.props.item.author.avatar_url}
          />
        </Link>
        <Link style={styles.title} to={'/'}>
          {this.props.item.title}
        </Link>
        <span style={styles.lastReply}>
          {Time(this.props.item.last_reply_at)}
        </span>
      </div>
    );
  }
}

export default TopicItem;
