import React from 'react';
import { Route, Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import EditBike from './EditBike';
import DeleteBike from './DeleteBike';
import AddToCart from './AddtoCart';

class ViewMoreBikeDetails extends React.Component {
	state = {
		show: false, //modal for registration};

		id: this.props.bike.uuid,
		brand: this.props.bike.brand,
		name: this.props.bike.name,
		model: this.props.bike.model,
		image: this.props.bike.image,
		description: this.props.bike.description,
		category: this.props.bike.category,
		price: this.props.bike.price,
		stocks: this.props.bike.stocks,
		date: this.props.bike.date,
		EditedBy: 'Jacob',
		qty: '',
	};
	BikeLinkStaff = `/staff-bike/${this.props.bike._id}`;
	BikeLinkAdmin = `/admin-bike/${this.props.bike._id}`;
	render() {
		return (
			<>
				<ReactBootstrap.Container className='mt-2'>
					<ReactBootstrap.Card>
						<ReactBootstrap.Row>
							<ReactBootstrap.Container className=' col-md-5'>
								<ReactBootstrap.Card.Img
									variant='top'
									src={this.state.image}
									className='col-12'
								/>
							</ReactBootstrap.Container>
							<ReactBootstrap.Container className=' col-md-5'>
								<ReactBootstrap.Card.Title>
									<h3>{this.state.name}</h3>
									{this.state.brand}
								</ReactBootstrap.Card.Title>

								<ReactBootstrap.Card.Title>
									<small>
										<ReactBootstrap.Badge variant='dark'>
											{this.state.model}
										</ReactBootstrap.Badge>
									</small>
									<small className='ml-1'>
										<ReactBootstrap.Badge variant='dark'>
											{this.state.category}
										</ReactBootstrap.Badge>
									</small>
									<small className='ml-1'>
										<ReactBootstrap.Badge variant='dark'>
											{this.state.price}
										</ReactBootstrap.Badge>
									</small>
									<small className='ml-1'>
										<ReactBootstrap.Badge variant='dark'>
											{this.state.stocks} pieces available
										</ReactBootstrap.Badge>
									</small>
									<small className='ml-1'>
										<ReactBootstrap.Badge variant='dark'>
											Date acquired:{this.state.date}
										</ReactBootstrap.Badge>
									</small>
								</ReactBootstrap.Card.Title>
								<ReactBootstrap.Modal.Footer>
									<Route exact path={this.BikeLinkAdmin}>
										<EditBike
											key={this.state._id}
											bike={this.props.bike}
											displayBikesHandler={this.props.displayBikesHandler}
										/>
										<DeleteBike
											key={this.props.bike._id1}
											bike={this.props.bike}
											displayBikesHandler={this.props.displayBikesHandler}
										/>
									</Route>
									<Route exact path={this.BikeLinkStaff}>
										<ReactBootstrap.Form.Label>
											Quantity
										</ReactBootstrap.Form.Label>
										<ReactBootstrap.Form.Control
											type='number'
											placeholder='Quantity'
											value={this.state.qty}
											onChange={(e) => {
												this.setState({ qty: e.target.value });
											}}
										/>
										<AddToCart
											key={this.props.bike._id}
											bike={this.props.bike}
											qtyInput={this.state.qty}
											displayBikesHandler={this.props.displayBikesHandler}
										/>
									</Route>
								</ReactBootstrap.Modal.Footer>
							</ReactBootstrap.Container>
						</ReactBootstrap.Row>
						<ReactBootstrap.Container className='Col-12'>
							<small>
								<p>{this.state.description}</p>
							</small>
						</ReactBootstrap.Container>
					</ReactBootstrap.Card>
				</ReactBootstrap.Container>
				) ;
			</>
		);
	}
}
export default ViewMoreBikeDetails;
