import React from 'react';
import { Route } from 'react-router-dom';
import Bikes from './Bike';

class StaffActivity extends React.Component {
	StaffLink = `/admin-bike/${this.props.staff._id}`;

	render() {
		return <Route path={this.StaffLink}>as</Route>;
	}
}

export default StaffActivity;
