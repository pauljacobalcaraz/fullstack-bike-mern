import React from 'react';
import { Route, Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';

class LandingPage extends React.Component {
	state = {
		sales: [],
		DsiplaySold: [],
	};
	componentDidMount() {
		this.setState({
			sales: this.props.sale,
		});
	}

	render() {
		return (
			<>
				<ReactBootstrap.Card className='m-md-5 col-md-10 border-0'>
					<ReactBootstrap.Card.Body as='h6'>
						<ReactBootstrap.Card.Text>
							<ReactBootstrap.Row>
								<ReactBootstrap.Container className='clearfix'>
									<ReactBootstrap.Col xs={12} md={4} className=' float-md-left'>
										<ReactBootstrap.Card.Title as='h5'>
											{this.state.sales.brand}
										</ReactBootstrap.Card.Title>
										<ReactBootstrap.Card.Img
											src={this.state.sales.image}
											roundedCircle
										/>
										<ReactBootstrap.Card.Title>
											{this.state.sales.name}
										</ReactBootstrap.Card.Title>
									</ReactBootstrap.Col>
									<ReactBootstrap.Col xs={12} md={8} className=' float-md-left'>
										<ReactBootstrap.Container className='col-12 my-4 ml-3'></ReactBootstrap.Container>
										<ReactBootstrap.Container>
											<ReactBootstrap.Container className='col-12'>
												<p>
													<p as='h1'>{this.state.sales.model}</p>
													<p>
														{this.state.sales.category}
														<br />
													</p>
													<p>{this.state.sales.price}</p>
												</p>
											</ReactBootstrap.Container>

											<ReactBootstrap.Accordion
												defaultActiveKey='0'
												className='mx-n3'
												as={ReactBootstrap.Card.Body}
											>
												<ReactBootstrap.Card>
													<ReactBootstrap.Accordion.Toggle
														as={ReactBootstrap.Card.Header}
														eventKey='1'
														className='text-center'
													>
														View Description
													</ReactBootstrap.Accordion.Toggle>
													<ReactBootstrap.Accordion.Collapse eventKey='1'>
														<ReactBootstrap.Card.Body className='text-justify'>
															{this.state.sales.description}
														</ReactBootstrap.Card.Body>
													</ReactBootstrap.Accordion.Collapse>
												</ReactBootstrap.Card>
											</ReactBootstrap.Accordion>
										</ReactBootstrap.Container>
									</ReactBootstrap.Col>
								</ReactBootstrap.Container>
							</ReactBootstrap.Row>
						</ReactBootstrap.Card.Text>
					</ReactBootstrap.Card.Body>
					<hr className='border-dark my-4' />
				</ReactBootstrap.Card>
			</>
		);
	}
}
export default LandingPage;
