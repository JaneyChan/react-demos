import { connect } from 'react-redux';
import TopicList from '../components/Topics/TopicList';
import { getThenShow } from '../actions';

const ListCon = connect(
  (state, ownProps) => ({
    list: state.getIn(['toptics', 'list']),
  }),

  (dispatch, ownProps) => ({
    getIndexData: () => {
      dispatch(getThenShow(ownProps.pageIndex, ownProps.tab));
    },
  }),

)(TopicList);

export default ListCon;
