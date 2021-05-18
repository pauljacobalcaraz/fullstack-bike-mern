import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
	state = {
		show: false, //modal for registration

		username: '',
		password: '',
		date: Date().toLocaleString(),
		user: '',
		redirect: false,
		LogRole: '',
		name: '',
	};

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

	forLogout = {
		username: this.state.username,
		password: this.state.password,
		date: this.state.date,
		action: 'Logout',
	};

	login = () => {
		let login = {
			username: this.state.username,
			password: this.state.password,
		};
		this.props.addUserName(this.state.username);

		axios
			.post('https://bikeshop-backend.herokuapp.com/login', login)
			.then((res) => {
				let log = {
					userId: res.data._id,
					name: res.data.name,
					date: this.state.date,
					action: 'Login',
				};
				this.setState({
					user: res.data,
				});
				if (res.data.error) {
					alert(res.data.error);
				} else {
					axios.post('http://localhost:8080/log', log).then((res) => {
						this.setState({
							redirect: true,
							login: log,
						});
						if (this.state.user.role === 'Staff') {
							this.setState({
								LogRole: this.state.redirect && <Redirect to='/staff-bike' />,
							});
							// return;
						}
						this.setState({
							LogRole: this.state.redirect && <Redirect to='/admin-bike/' />,
						});
					});
				}
			});
	};

	render() {
		return (
			<>
				{/* <AddToCart user={this.state.user} /> */}
				{/* <Account username={this.state.username} /> */}
				{this.state.LogRole}
				<ReactBootstrap.Button
					variant='outline-light'
					onClick={this.handleShow}
				>
					Login
				</ReactBootstrap.Button>{' '}
				<ReactBootstrap.Modal
					show={this.state.show}
					onHide={this.handleClose}
					backdrop='static'
					keyboard={false}
				>
					<ReactBootstrap.Modal.Header closeButton>
						<ReactBootstrap.Modal.Title>Login</ReactBootstrap.Modal.Title>
					</ReactBootstrap.Modal.Header>
					<ReactBootstrap.Modal.Body>
						{/* <div className='container col-12'> */}
						<ReactBootstrap.Form>
							<ReactBootstrap.Form.Group>
								<ReactBootstrap.Form.Label>UserName</ReactBootstrap.Form.Label>
								<ReactBootstrap.Form.Control
									type='text'
									placeholder='Userame'
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
						</ReactBootstrap.Form>
					</ReactBootstrap.Modal.Body>
					<ReactBootstrap.Modal.Footer>
						<ReactBootstrap.Button
							variant='secondary'
							onClick={this.handleClose}
						>
							Close
						</ReactBootstrap.Button>
						<ReactBootstrap.Button variant='primary' onClick={this.login}>
							Login
						</ReactBootstrap.Button>
						{/* <AddBike key={this.state.login.userId} login='name' />; */}
					</ReactBootstrap.Modal.Footer>
				</ReactBootstrap.Modal>
			</>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addUserName: (user) => dispatch({ type: 'ADD_USERNAME', payload: user }),
	};
};

export default connect(null, mapDispatchToProps)(LoginForm);
