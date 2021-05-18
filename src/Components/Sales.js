import React from 'react';
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';
import TopBikes from './TopBikes';
import { Route } from 'react-router';

class Sales extends React.Component {
	state = {
		sales: [],
		priceTotal: '',
	};
	componentDidMount() {
		axios.get('https://bikeshop-backend.herokuapp.com/sales').then((res) => {
			this.setState({
				sales: res.data,
			});
		});
	}

	render() {
		let totalPrice = this.state.sales.reduce(function (prev, cur) {
			return cur.price * cur.quantity + prev;
		}, 0);
		// let totalQty = this.state.sales.reduce(function (prev, cur) {
		// 	return cur.quantity * 1 + prev;
		// }, 0);

		return (
			<>
				<Route exact path='/admin-bike/sales'>
					<ReactBootstrap.CardDeck>
						<ReactBootstrap.Container className='mt-2'>
							<ReactBootstrap.Table striped bordered hover variant='dark'>
								<thead>
									<tr>
										<th>Seller</th>
										<th>Brand</th>
										<th>Name</th>
										<th>Sold By</th>
										<th>Model</th>
										<th>Price</th>
										<th>Quantity</th>
										<th>Amount</th>
									</tr>
								</thead>
								<tbody>
									{this.state.sales.map((sale) => {
										return (
											<>
												<tr>
													<td>{sale.soldBy}</td>
													<td>{sale.brand}</td>
													<td>{sale.name}</td>
													<td>{sale.soldBy}</td>
													<td>{sale.model}</td>
													<td>{sale.price}</td>
													<td>{sale.quantity}</td>
													<td>{sale.quantity * sale.price}</td>
												</tr>
											</>
										);
									})}
									<tr>
										<td colSpan='7 	'>Total Amount</td>

										<td>{totalPrice}</td>
									</tr>
								</tbody>
							</ReactBootstrap.Table>
						</ReactBootstrap.Container>
					</ReactBootstrap.CardDeck>
				</Route>
				<Route exact path='/top-bikes'>
					<h1>Top Bikes</h1>
					{this.state.sales.map((sale) => {
						return (
							<>
								<TopBikes key={sale._id} sale={sale} />
							</>
						);
					})}
				</Route>
			</>
		);
	}
}
export default Sales;
