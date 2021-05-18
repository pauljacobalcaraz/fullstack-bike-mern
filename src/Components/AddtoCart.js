import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Account from './Account';
import { connect } from 'react-redux';

class AddToCart extends React.Component {
	state = {
		show: false, //modal for registration
		date: '',
		redirect: false,
	};
	totalAmount = this.state.price * this.state.qty;

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
			qty: this.props.qty,
		});
	}

	handleClose = () => {
		this.setState({
			show: false,
		});
	};
	handleShow = () => {
		if (this.props.qtyInput > this.props.bike.stocks) {
			alert('Insuficient Stock');
		} else {
			this.setState({
				show: true,
			});
		}
	};

	saveCartbtn = () => {
		let salesData = {
			brand: this.props.bike.brand,
			name: this.props.bike.name,
			model: this.props.bike.model,
			image: this.props.bike.image,
			description: this.props.bike.description,
			category: this.props.bike.category,
			price: this.props.bike.price,
			quantity: this.props.qtyInput,
			date: this.state.date,
			soldBy: this.props.logingAcc,
		};
		let bikeStockUpdate = {
			stocks: this.props.bike.stocks - this.props.qtyInput,
		};
		this.setState({
			redirect: true,
		});
		// console.log(this.props.bike._id);
		axios
			.post('https://bikeshop-backend.herokuapp.com/sales/', salesData)
			.then((res) => {});
		axios
			.put(
				'https://bikeshop-backend.herokuapp.com/staff-bike/' +
					this.props.bike._id,
				bikeStockUpdate
			)
			.then((res) => {
				alert('Success');
				this.props.displayBikesHandler();
			});
	};

	// const Quantity= this.props.qty,
	render() {
		console.log(this.props.logingAcc);
		return (
			<>
				{this.state.redirect && <Redirect to='/staff-bike' />}
				{this.props.logingAcc}
				<ReactBootstrap.Button
					variant='outline-dark'
					className='my-2'
					onClick={this.handleShow}
				>
					Add To Cart
				</ReactBootstrap.Button>{' '}
				<ReactBootstrap.Modal
					size='lg'
					show={this.state.show}
					onHide={this.handleClose}
					backdrop='static'
					keyboard={false}
				>
					<ReactBootstrap.Modal.Header closeButton>
						<ReactBootstrap.Modal.Title>Review Item</ReactBootstrap.Modal.Title>
					</ReactBootstrap.Modal.Header>
					<ReactBootstrap.Modal.Body>
						{/* <div className='container col-12'> */}
						<ReactBootstrap.Container className='mt-2'>
							<ReactBootstrap.Card>
								<ReactBootstrap.Row>
									<ReactBootstrap.Container className=' col-md-5'>
										<ReactBootstrap.Card.Img
											variant='top'
											src={this.props.bike.image}
											className='col-12'
										/>
									</ReactBootstrap.Container>
									<ReactBootstrap.Container className=' col-md-5'>
										<ReactBootstrap.Card.Title>
											<h3>{this.props.bike.name}</h3>
											{this.props.bike.brand}
										</ReactBootstrap.Card.Title>

										<ReactBootstrap.Card.Title>
											<small>
												<ReactBootstrap.Badge variant='dark'>
													{this.props.bike.model}
												</ReactBootstrap.Badge>
											</small>
											<small className='ml-1'>
												<ReactBootstrap.Badge variant='dark'>
													{this.props.bike.category}
												</ReactBootstrap.Badge>
											</small>
											<small className='ml-1'>
												<ReactBootstrap.Badge variant='dark'>
													Date: {this.state.date}
												</ReactBootstrap.Badge>
											</small>
											<small>
												<ReactBootstrap.Badge variant='dark'>
													Php {this.props.bike.price}
												</ReactBootstrap.Badge>
											</small>
											<small className='ml-1'>
												<ReactBootstrap.Badge variant='dark'>
													Qty:{this.props.qtyInput}
												</ReactBootstrap.Badge>
											</small>
											<br />
											Total Amount:
											<ReactBootstrap.Badge variant='dark'>
												{this.props.bike.price * this.props.qtyInput}
											</ReactBootstrap.Badge>
										</ReactBootstrap.Card.Title>
									</ReactBootstrap.Container>
								</ReactBootstrap.Row>
							</ReactBootstrap.Card>
						</ReactBootstrap.Container>
					</ReactBootstrap.Modal.Body>
					<ReactBootstrap.Modal.Footer>
						<ReactBootstrap.Button
							variant='secondary'
							onClick={this.handleClose}
						>
							Close
						</ReactBootstrap.Button>

						<ReactBootstrap.Button variant='primary' onClick={this.saveCartbtn}>
							Confirm
						</ReactBootstrap.Button>
					</ReactBootstrap.Modal.Footer>
				</ReactBootstrap.Modal>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		logingAcc: state.logingAcc,
	};
};

export default connect(mapStateToProps)(AddToCart);
