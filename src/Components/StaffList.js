import React from 'react';
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';
import StaffActivity from './StaffActivity';

import { Link, Route } from 'react-router-dom';

class StaffList extends React.Component {
	state = {
		staffs: [],
	};
	componentDidMount() {
		axios.get('https://bikeshop-backend.herokuapp.com/users').then((res) => {
			this.setState({
				staffs: res.data,
			});
			console.log(this.state.bikes);
		});
	}

	render() {
		return (
			<>
				<ReactBootstrap.CardDeck>
					<ReactBootstrap.Container className='mt-2'>
						<Route exact path='/admin-bike/staff'>
							<ReactBootstrap.Table striped bordered hover variant='dark'>
								<thead>
									<tr>
										<th>Name</th>
										<th>Username</th>
										<th>Status</th>
										<th>Role</th>
									</tr>
								</thead>
								<tbody>
									{this.state.staffs.map((staff) => {
										return (
											<>
												<tr>
													<td>{staff.name}</td>
													<td>{staff.username}</td>
													<td>{staff.status}</td>
													<td>{staff.role}</td>
													<td>
														<Link to={staff._id}>
															<ReactBootstrap.Button variant='secondary'>
																View Activity
															</ReactBootstrap.Button>
														</Link>
													</td>
												</tr>

												{/* <StaffActivity key={staff._id} staff={staff} /> */}
											</>
										);
									})}
								</tbody>
							</ReactBootstrap.Table>
						</Route>
					</ReactBootstrap.Container>
				</ReactBootstrap.CardDeck>
			</>
		);
	}
}
export default StaffList;
