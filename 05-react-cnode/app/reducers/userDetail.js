import { handleActions } from 'redux-actions';
import { userState } from '../constants/models';

const userDetail = handleActions({
  
  USER_DETAIL_FETCH_DATA_SUCCESS: (state, { payload }) => (
    state.merge({
      userInfo: payload.userInfo,
    })
  ),

}, userState);

export default userDetail;
