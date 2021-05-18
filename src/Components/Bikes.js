import React from 'react';
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';
import Bike from './Bike';
import AddBike from './AddBike';
import BikeStaff from './BikeStaff';
import LandingPage from './LandingPage';
import { Link, Route } from 'react-router-dom';

class Bikes extends React.Component {
	state = {
		bikes: [],
		bikesCopy: [],
	};
	componentDidMount() {
		axios.get('https://bikeshop-backend.herokuapp.com/bikes').then((res) => {
			this.setState({
				bikes: res.data,
				bikesCopy: res.data,
			});
			// console.log(this.state.bikes);
		});
	}

	displayBikesHandler = () => {
		axios.get('http://localhost:8080/bikes').then((res) => {
			this.setState({
				bikesCopy: res.data,
			});
		});
	};
	render() {
		return (
			<>
				<ReactBootstrap.Container>
					<AddBike displayBikesHandler={this.displayBikesHandler} />
				</ReactBootstrap.Container>
				<ReactBootstrap.CardDeck>
					{this.state.bikesCopy.map((bike) => {
						return (
							<>
								<Bike
									key={bike._id + bike}
									bike={bike}
									displayBikesHandler={this.displayBikesHandler}
								/>
								<BikeStaff
									key={bike._id}
									bike={bike}
									displayBikesHandler={this.displayBikesHandler}
								/>
							</>
						);
					})}
					<ReactBootstrap.Container className='mt-2 p-0'>
						<Route exact path='/'>
							{this.state.bikesCopy.map((bike) => {
								return (
									<>
										<LandingPage key={bike._id} bike={bike} />
									</>
								);
							})}
						</Route>

						<Route exact path='/new-bikes'>
							<h1>New Bikes</h1>
							{this.state.bikesCopy.map((bike) => {
								return (
									<>
										<LandingPage key={bike._id + bike._id} bike={bike} />
									</>
								);
							})}
						</Route>
					</ReactBootstrap.Container>
				</ReactBootstrap.CardDeck>
			</>
		);
	}
}
export default Bikes;
