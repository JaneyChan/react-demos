import { connect } from 'react-redux';
import List from '../components/List';
import { getThenShow } from '../actions';

const ListCon = connect(
  (state, ownProps) => ({
    list: state.getIn(['listPage', 'list']),
  }),

  (dispatch, ownProps) => ({
    getIndexData: () => {
      dispatch(getThenShow(ownProps.pageIndex, ownProps.tab));
    },
  }),

)(List);

export default ListCon;
