import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class RegForm extends React.Component {
	state = {
		show: false, //modal for registration

		name: '',
		username: '',
		password: '',
		status: 'Active', // Active or Deactivated account
		role: 'Staff', // Admin or Staff
		date: '',
		confirmPass: '',
		errorpass: 'Password did not match',

		errorMessage: '',

		redirect: false,
	};
	componentDidMount() {
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		const today = new Date();
		const month = today.getMonth();
		const date = today.getDate();
		const year = today.getFullYear();
		// console.log(monthNames[month] + ' ' + date + ', ' + year);
		this.setState({
			date: monthNames[month] + ' ' + date + ', ' + year,
		});
	}

	handleClose = () => {
		this.setState({
			show: false,
		});
	};
	handleShow = () => {
		this.setState({
			show: true,
		});
	};

	register = () => {
		if (this.state.password === this.state.confirmPass) {
			axios
				.post('https://bikeshop-backend.herokuapp.com/register', this.state)
				.then((res) => {
					/* if (res.data.username === this.state.username) {
					this.setState({
						errorMessage: 'Already Taken',
					});
					return;
				} */
					alert('Wait for approval');
					this.setState({
						show: false,
					});
				});
		} else {
			alert(this.state.errorpass);
		}
		/* let username = this.state.username;
		axios.post('http://localhost:8080/register', username).then((res) => {
			if (res.data.username === username) {
				this.setState({
					errorMessage: 'Already Taken',
					show: false,
				});
				return;
			} else if (this.state.password === this.state.confirmPass) {
				axios.post('http://localhost:8080/register', this.state).then((res) => {
					alert('Wait for approval');
					this.setState({
						show: false,
					});
				});
			} else {
				alert(this.state.errorpass);
			}
		}); */
	};
	/* 	});
	}; */

	render() {
		return (
			<>
				{/* {this.state.redirect && <Redirect to='/' />} */}
				{/* {this.state.redirect && <Redirect to='/admin-bike' />} */}
				<ReactBootstrap.Button
					variant='outline-light'
					onClick={this.handleShow}
				>
					Register
				</ReactBootstrap.Button>{' '}
				<ReactBootstrap.Modal
					show={this.state.show}
					onHide={this.handleClose}
					backdrop='static'
					keyboard={false}
				>
					<ReactBootstrap.Modal.Header closeButton>
						<ReactBootstrap.Modal.Title>
							Register Account
						</ReactBootstrap.Modal.Title>
					</ReactBootstrap.Modal.Header>
					<ReactBootstrap.Modal.Body>
						{/* <div className='container col-12'> */}
						<ReactBootstrap.Form>
							<ReactBootstrap.Form.Group>
								<ReactBootstrap.Form.Label>Name</ReactBootstrap.Form.Label>
								<ReactBootstrap.Form.Control
									type='text'
									placeholder='Name'
									value={this.state.name}
									onChange={(e) => this.setState({ name: e.target.value })}
								/>
							</ReactBootstrap.Form.Group>
							<ReactBootstrap.Form.Group>
								<ReactBootstrap.Form.Label>
									User Name {this.state.errorMessage}
								</ReactBootstrap.Form.Label>
								<ReactBootstrap.Form.Control
									type='text'
									placeholder='User name'
									value={this.state.username}
									onChange={(e) => this.setState({ username: e.target.value })}
								/>
							</ReactBootstrap.Form.Group>
							<ReactBootstrap.Form.Group>
								<ReactBootstrap.Form.Label>Password</ReactBootstrap.Form.Label>
								<ReactBootstrap.Form.Control
									type='text'
									placeholder='Password'
									value={this.state.password}
									onChange={(e) => this.setState({ password: e.target.value })}
								/>
							</ReactBootstrap.Form.Group>
							<ReactBootstrap.Form.Group>
								<ReactBootstrap.Form.Label>
									Confirm Password
								</ReactBootstrap.Form.Label>
								<ReactBootstrap.Form.Control
									type='text'
									placeholder='Confirm Password'
									value={this.state.confirmPass}
									onChange={(e) =>
										this.setState({ confirmPass: e.target.value })
									}
								/>
							</ReactBootstrap.Form.Group>
						</ReactBootstrap.Form>
					</ReactBootstrap.Modal.Body>
					<ReactBootstrap.Modal.Footer>
						<ReactBootstrap.Button
							variant='secondary'
							onClick={this.handleClose}
						>
							Close
						</ReactBootstrap.Button>
						<ReactBootstrap.Button variant='primary' onClick={this.register}>
							Register
						</ReactBootstrap.Button>
					</ReactBootstrap.Modal.Footer>
				</ReactBootstrap.Modal>
			</>
		);
	}
}

export default RegForm;
