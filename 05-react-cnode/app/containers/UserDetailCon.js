import { connect } from 'react-redux';
import { getUserDetail } from '../actions';
import UserDetail from '../components/UserDetail';

const UserDetailCon = connect(
  (state, ownProps) => ({
    user: state.getIn(['userDetail', 'userInfo']),
  }),

  (dispatch, ownProps) => ({
     getUserDetail: () => {
        dispatch(getUserDetail(ownProps.username))
    }
  }),

)(UserDetail);

export default UserDetailCon;