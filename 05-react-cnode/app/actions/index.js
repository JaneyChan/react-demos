import { 
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  SWITCH_PAGINATION,
  USER_DETAIL_FETCH_DATA_SUCCESS,
} from '../constants/actionTypes';

/* 获取数据列表 */
export const getThenShow = (index = 1, tab = "") => (dispatch) => {

  dispatch({
    type: SWITCH_PAGINATION,
    payload: { pageIndex: index, tab: tab }
  })

  const url = `https://cnodejs.org/api/v1/topics?limit=10&mdrender=false&page=${index}&tab=${tab}`;
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // 获取数据成功
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: { list: data.data },
      });
    })
    .catch(() => dispatch({ type: FETCH_DATA_FAIL }));
};

/* 获取用户详情页 */
export const getUserDetail = (username) => (dispatch) => {
  const url = `https://cnodejs.org/api/v1/user/${username}`
  fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      dispatch({
        type: USER_DETAIL_FETCH_DATA_SUCCESS,
        payload: { userInfo: data.data },
      })
    })
    .catch(() => dispatch({ type: FETCH_DATA_FAIL }));
};