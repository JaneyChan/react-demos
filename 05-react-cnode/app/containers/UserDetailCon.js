import { connect } from 'react-redux';
import { getUserDetail } from '../actions';
import UserDetail from '../components/UserDetail';

const UserDetailCon = connect(
  (state, ownProps) => ({
    loginname: state.getIn(['userDetail', 'userInfo', 'loginname']),
    avatarUrl: state.getIn(['userDetail', 'userInfo', 'avatar_url']),
    score: state.getIn(['userDetail', 'userInfo', 'score']),
    createAt: state.getIn(['userDetail', 'userInfo', 'create_at']),
    recentTopics: state.getIn(['userDetail', 'userInfo', 'recent_topics']),
    recentReplies: state.getIn(['userDetail', 'userInfo', 'recent_replies']),
  }),

  (dispatch, ownProps) => ({
     getUserDetail: () => {
        dispatch(getUserDetail(ownProps.username))
    }
  }),

)(UserDetail);

export default UserDetailCon;