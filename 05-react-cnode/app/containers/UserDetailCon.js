import { connect } from 'react-redux';
import { getUserDetail } from '../actions';
import UserDetail from '../components/UserDetail';

const UserDetailCon = connect(
  (state, ownProps) => ({
    // userDetail: state.getIn(['userDetail', 'list']),
  }),

  (dispatch, ownProps) => ({
     getUserDetail: () => {
        dispatch(getUserDetail(ownProps.username))
    }
  }),

)(UserDetail);

export default UserDetailCon;