import React from 'react';
import SectionBox from './SectionBox';
import UserInfo from './UserInfo';
import UserTopics from './UserTopics';

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
    console.log(this.props.getUserDetail());
  }

  render() {
    const user = this.props.userInfo;
    if (!user) {
      return (<div></div>);
    }
    
    return(
      <div style={styles.box}>
        <SectionBox sectionTitle="主页">
          <UserInfo
            loginname={user.loginname}
            avatar={user.avatar_url}
            score={user.score}
            createAt="2017-01-12"/>
        </SectionBox>

        <SectionBox sectionTitle="最近创建的话题">
          <UserTopics />
        </SectionBox>
        
        <SectionBox sectionTitle="最近创建的话题">
          <UserTopics />
        </SectionBox>
      </div>
    );
  }
}