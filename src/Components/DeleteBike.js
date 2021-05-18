import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';

class DeleteBike extends React.Component {
	state = {
		show: false, //modal for registration

		id: this.props.bike._id,
		brand: this.props.bike.brand,
		name: this.props.bike.name,
		model: this.props.bike.model,
		image: this.props.bike.image,
		description: this.props.bike.description,
		category: this.props.bike.category,
		price: this.props.bike.price,
		stocks: this.props.bike.stocks,
		// date: Date().toLocaleString(),
		date: '',
		EditedBy: 'Jacob',

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

	deleteBikebtn = () => {
		axios
			.delete(
				'https://bikeshop-backend.herokuapp.com/admin-bike/' + this.state.id
			)
			.then((res) => {
				alert(res.data.name + ' has been deleted!');
				this.setState({
					redirect: true,
				});
				this.props.displayBikesHandler();
			});
	};

	render() {
		return (
			<>
				{this.state.redirect && <Redirect to='/admin-bike' />}
				<ReactBootstrap.Button
					variant='outline-dark'
					className='my-2'
					onClick={this.handleShow}
				>
					Delete
				</ReactBootstrap.Button>{' '}
				<ReactBootstrap.Modal
					size='lg'
					show={this.state.show}
					onHide={this.handleClose}
					backdrop='static'
					keyboard={false}
				>
					<ReactBootstrap.Modal.Header closeButton>
						<ReactBootstrap.Modal.Title>
							Are you sure to delete this Item
						</ReactBootstrap.Modal.Title>
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
										<ReactBootstrap.Container>
											<small>
												<p>{this.props.bike.description}</p>
											</small>
										</ReactBootstrap.Container>
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
													{this.props.bike.price}
												</ReactBootstrap.Badge>
											</small>
											<small className='ml-1'>
												<ReactBootstrap.Badge variant='dark'>
													{this.props.bike.stocks} pieces available
												</ReactBootstrap.Badge>
											</small>
											<small>
												<ReactBootstrap.Badge variant='dark'>
													Date acquired:{this.props.bike.date}
												</ReactBootstrap.Badge>
											</small>
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

						<ReactBootstrap.Button
							variant='primary'
							onClick={this.deleteBikebtn}
						>
							Delete
						</ReactBootstrap.Button>
					</ReactBootstrap.Modal.Footer>
				</ReactBootstrap.Modal>
			</>
		);
	}
}

export default DeleteBike;
