import { handleActions } from 'redux-actions';
import { userState } from '../constants/models';

const userDetail = handleActions({
  
  USER_DETAIL_FETCH_DATA_SUCCESS: (state, { payload }) => (
    state.merge({
      userDetail: payload.userDetail,
    })
  ),

}, userState);

export default userDetail;
