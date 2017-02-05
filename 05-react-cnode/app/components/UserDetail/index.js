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

  render() {
    return(
      <div style={styles.box}>
        <SectionBox sectionTitle="主页">
          <UserInfo
            loginname="JaneChan"
            avatar="http://www.qqpk.cn/Article/UploadFiles/201202/20120212114848399.jpg"
            score="235"
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