import { handleActions } from 'redux-actions';
import { userState } from '../constants/models';

const userDetail = handleActions({
  
  USER_DETAIL_FETCH_DATA_SUCCESS: (state, { payload }) => (
    state.merge({
      list: payload.list,
    })
  ),

}, userState);

export default userDetail;
