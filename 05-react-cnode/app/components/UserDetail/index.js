import React from 'react';
import SectionBox from './SectionBox';
import UserInfo from './UserInfo';
import UserTopics from './UserTopics';
import Time from '../Time';

const styles = {
  box: {
    margin: '20px auto',
    width: '800px',
  }
}

export default class UserDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserDetail();
  }

  render() {
    return(
      <div style={styles.box}>
        <SectionBox sectionTitle="主页">
          <UserInfo
            loginname={this.props.loginname}
            avatar={this.props.avatarUrl}
            score={this.props.score}
            createAt={this.props.createAt}/>
        </SectionBox>

        <SectionBox sectionTitle="最近创建的话题">
          <UserTopics topics={this.props.recentTopics} />
        </SectionBox>
        
        <SectionBox sectionTitle="最近参与的话题">
          <UserTopics topics={this.props.recentReplies} />
        </SectionBox>
      </div>
    );
  }
}