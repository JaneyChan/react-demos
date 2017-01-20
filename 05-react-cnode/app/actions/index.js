import { FETCH_DATA_SUCCESS, FETCH_DATA_FAIL, SWITCH_PAGINATION } from '../constants/actionTypes';

/* 获取数据列表 */
export const getThenShow = (index = 1, tab = "") => (dispatch) => {

  dispatch({
    type: SWITCH_PAGINATION,
    payload: { pageIndex: index, tab: tab }
  })

  const url = `https://cnodejs.org/api/v1/topics?limit=20&mdrender=false&page=${index}&tab=${tab}`;
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

export default getThenShow;
