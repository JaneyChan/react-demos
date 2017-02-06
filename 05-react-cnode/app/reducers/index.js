import { combineReducers } from 'redux-immutable';
import toptics from './toptics';
// import userDetail from './userDetail';

const reducer = combineReducers({
  toptics,
  // userDetail,
});

export default reducer;
