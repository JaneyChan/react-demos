import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import FilterLink from '../components/FilterLink'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FooterContainers = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink)

export default FooterContainers
