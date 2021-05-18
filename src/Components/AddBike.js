import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

class AddBike extends React.Component {
	state = {
		show: false, //modal for registration

		uuid: '',
		brand: '',
		name: '',
		model: '',
		image: '',
		description: '',
		category: '',
		price: '',
		stocks: '',
		// date: Date().toLocaleString(),
		date: '',
		addedBy: '',
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
			uuid: uuidv4(),
		});
	};

	addBikebtn = () => {
		axios
			.post('https://bikeshop-backend.herokuapp.com/bikes', this.state)
			.then((res) => {
				alert(this.state.name + ' was successfully added!');
				this.setState({
					show: false,

					brand: '',
					name: '',
					model: '',
					image: '',
					description: '',
					category: '',
					price: '',
					stocks: '',
					date: '',
					addedBy: '',
				});
				this.props.displayBikesHandler();
			});
	};

	render() {
		// console.log(this.state.addedBy);
		return (
			<>
				<Route exact path='/admin-bike'>
					<ReactBootstrap.Button
						variant='outline-dark'
						className='my-2'
						onClick={this.handleShow}
					>
						Add Bike
					</ReactBootstrap.Button>{' '}
				</Route>
				<ReactBootstrap.Modal
					size='lg'
					show={this.state.show}
					onHide={this.handleClose}
					backdrop='static'
					keyboard={false}
				>
					<ReactBootstrap.Modal.Header closeButton>
						<ReactBootstrap.Modal.Title>
							Add New Bike
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
							<ReactBootstrap.Form.Group className='col-md-4  pl-0 float-left'>
								<ReactBootstrap.Form.Label>Brand</ReactBootstrap.Form.Label>
								<ReactBootstrap.Form.Control
									type='text'
									placeholder='Brand'
									value={this.state.brand}
									onChange={(e) => this.setState({ brand: e.target.value })}
								/>
							</ReactBootstrap.Form.Group>
							<ReactBootstrap.Form.Group className='col-md-4  pl-0 float-left'>
								<ReactBootstrap.Form.Label>Model</ReactBootstrap.Form.Label>
								<ReactBootstrap.Form.Control
									type='text'
									placeholder='Model'
									value={this.state.model}
									onChange={(e) => this.setState({ model: e.target.value })}
								/>
							</ReactBootstrap.Form.Group>
							<ReactBootstrap.Form.Group className='col-md-4  pl-0 float-left'>
								<ReactBootstrap.Form.Label>Category</ReactBootstrap.Form.Label>
								<select
									className='custom-select'
									id='inputGroupSelect01'
									value={this.state.category}
									onChange={(e) => this.setState({ category: e.target.value })}
								>
									<option defaultValue>Choose</option>
									<option value='Road Bikes'>Road Bikes</option>
									<option value='Mountain Bikes'>Mountain Bikes</option>
									<option value='Gravel'>Gravel</option>
								</select>
							</ReactBootstrap.Form.Group>
							<ReactBootstrap.Form.Group>
								<ReactBootstrap.Form.Label>Image</ReactBootstrap.Form.Label>
								<ReactBootstrap.Form.Control
									type='text'
									placeholder='Image'
									value={this.state.image}
									onChange={(e) => this.setState({ image: e.target.value })}
								/>
							</ReactBootstrap.Form.Group>
							<ReactBootstrap.Form.Group>
								<ReactBootstrap.Form.Label>
									Description
								</ReactBootstrap.Form.Label>
								<ReactBootstrap.Form.Control
									type='text'
									placeholder='Description'
									value={this.state.description}
									onChange={(e) =>
										this.setState({ description: e.target.value })
									}
								/>
							</ReactBootstrap.Form.Group>
							<ReactBootstrap.Form.Group className='col-md-6  pl-0 float-left'>
								<ReactBootstrap.Form.Label>Price</ReactBootstrap.Form.Label>
								<ReactBootstrap.Form.Control
									type='number'
									placeholder='Price'
									value={this.state.price}
									onChange={(e) => this.setState({ price: e.target.value })}
								/>
							</ReactBootstrap.Form.Group>
							<ReactBootstrap.Form.Group className='col-md-6 pr-0 float-left'>
								<ReactBootstrap.Form.Label>Stocks</ReactBootstrap.Form.Label>
								<ReactBootstrap.Form.Control
									type='number'
									placeholder='Quantity'
									value={this.state.stocks}
									onChange={(e) => this.setState({ stocks: e.target.value })}
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

						<ReactBootstrap.Button variant='primary' onClick={this.addBikebtn}>
							Add Bike
						</ReactBootstrap.Button>
					</ReactBootstrap.Modal.Footer>
				</ReactBootstrap.Modal>
			</>
		);
	}
}

export default AddBike;
