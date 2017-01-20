import { connect } from 'react-redux';
import Page from '../components/Page';
import { getThenShow } from '../actions';

const SwitchPageCon = connect(
  (state, ownProps) => ({
    pageIndex: state.getIn(['listPage', 'pageIndex']),
    tab: state.getIn(['listPage', 'tab']),
  }),

  (dispatch, ownProps) => ({
    onChange: (index) => {
      dispatch(getThenShow(index, ownProps.tab));
    },
  }),

)(Page);

export default SwitchPageCon;
