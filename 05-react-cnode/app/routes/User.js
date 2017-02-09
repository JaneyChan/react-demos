import React from 'react';
import UserDetailCon from '../containers/UserDetailCon';
import Content from '../components/Content'

export default class User extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		document.title = `@${this.props.params.name}`
	}

	render() {
		let username = this.props.params.name;
		return (
			<div>
				<UserDetailCon username={username} />
			</div>
		)
	}
}
