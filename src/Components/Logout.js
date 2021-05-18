import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import { Link, Route, Redirect } from 'react-router-dom';

class Logout extends React.Component {
	state = {
		show: false, //modal for registration

		name: '',
		username: '',
		password: '',
		status: 'Deactivated', // Active or Deactivated account
		role: 'Admin', // Admin or Staff
		date: '',
		confirmPass: '',

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

	logout = () => {
		this.setState({
			redirect: true,
			show: false,
		});
		// axios.post('http://localhost:8080/log', this.props.forLogout);
	};

	render() {
		return (
			<>
				{this.state.redirect && <Redirect to='/' />}

				<ReactBootstrap.Button
					variant='outline-light'
					onClick={this.handleShow}
				>
					Logout
				</ReactBootstrap.Button>

				<ReactBootstrap.Modal
					show={this.state.show}
					onHide={this.handleClose}
					backdrop='static'
					keyboard={false}
				>
					<ReactBootstrap.Modal.Body>
						Logout confirmation
					</ReactBootstrap.Modal.Body>
					<ReactBootstrap.Modal.Footer>
						<ReactBootstrap.Button
							variant='secondary'
							onClick={this.handleClose}
						>
							Cancel
						</ReactBootstrap.Button>
						<ReactBootstrap.Button variant='primary' onClick={this.logout}>
							Logout
						</ReactBootstrap.Button>
					</ReactBootstrap.Modal.Footer>
				</ReactBootstrap.Modal>
			</>
		);
	}
}

export default Logout;
