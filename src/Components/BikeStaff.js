import React from 'react';
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';

import ViewMoreBikeDetails from './ViewMoreBikeDetails';
import Account from './Account';

class BikeStaff extends React.Component {
	BikeLink = `/staff-bike/${this.props.bike._id}`;
	render() {
		return (
			<>
				<Route exact path='/staff-bike'>
					<ReactBootstrap.Container className='col-md-4 my-2'>
						<ReactBootstrap.Card border='dark' className='p-3 '>
							<ReactBootstrap.Card.Img
								variant='top'
								src={this.props.bike.image}
							/>
							<ReactBootstrap.Card.Body>
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
							</ReactBootstrap.Card.Body>
							<ReactBootstrap.Card.Footer>
								<Link to={this.BikeLink}>
									<ReactBootstrap.Button
										variant='outline-dark'
										className='col-12'
									>
										More
									</ReactBootstrap.Button>
								</Link>
							</ReactBootstrap.Card.Footer>
						</ReactBootstrap.Card>
					</ReactBootstrap.Container>
				</Route>

				<Route exact path={this.BikeLink}>
					<ViewMoreBikeDetails
						key={this.props.bike._id}
						bike={this.props.bike}
						displayBikesHandler={this.props.displayBikesHandler}
					/>
				</Route>
			</>
		);
	}
}

export default BikeStaff;
