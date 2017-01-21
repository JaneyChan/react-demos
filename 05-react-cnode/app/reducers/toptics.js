import { handleActions } from 'redux-actions';
import { pageState } from '../constants/models';

const listPage = handleActions({
  
  FETCH_DATA_SUCCESS: (state, { payload }) => (
    state.merge({
      list: payload.list,
    })
  ),

  SWITCH_PAGINATION: (state, { payload }) => (
    state.merge({
      pageIndex: payload.pageIndex,
      tab: payload.tab,
    })
  ),
}, pageState);

export default listPage;
