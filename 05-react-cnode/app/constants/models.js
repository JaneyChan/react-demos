import Immutable from 'immutable';

export const pageState = Immutable.fromJS({
  tab: '',
  pageIndex: 1,
  list: [],
});

export const userState = Immutable.fromJS({
  userDetail: '',
});