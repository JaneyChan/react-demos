import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import { getThenShow } from '../actions';

const SwitchPageCon = connect(
  (state, ownProps) => ({
    pageIndex: state.getIn(['toptics', 'pageIndex']),
    tab: state.getIn(['toptics', 'tab']),
  }),

  (dispatch, ownProps) => ({
    onChange: (index) => {
      dispatch(getThenShow(index, ownProps.tab));
    },
  }),

)(Pagination);

export default SwitchPageCon;
