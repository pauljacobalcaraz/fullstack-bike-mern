import React from 'react';
import { Route, Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';

class LandingPage extends React.Component {
	render() {
		return (
			<>
				<ReactBootstrap.Card className='m-md-5 col-md-12 border-0 row-12 pt-5 pb-5'>
					<ReactBootstrap.Card.Body as='h6'>
						<ReactBootstrap.Card.Text>
							<ReactBootstrap.Row>
								<ReactBootstrap.Container className='clearfix'>
									<ReactBootstrap.Col xs={12} md={4} className=' float-md-left'>
										<ReactBootstrap.Card.Title as='h5'>
											{this.props.bike.brand}
										</ReactBootstrap.Card.Title>
										<ReactBootstrap.Card.Img
											src={this.props.bike.image}
											roundedCircle
										/>
									</ReactBootstrap.Col>
									<ReactBootstrap.Col xs={12} md={8} className=' float-md-left'>
										{/* <ReactBootstrap.Container className='col-12 my-4 ml-3'>
											<Route exact path='/new-bikes'>
												<ReactBootstrap.Card.Title as='h1'>
													{this.props.bike.date}
												</ReactBootstrap.Card.Title>
											</Route>
										</ReactBootstrap.Container> */}
										<ReactBootstrap.Container>
											<ReactBootstrap.Container className='col-12'>
												<p>
													<ReactBootstrap.Card.Title>
														{this.props.bike.name}
													</ReactBootstrap.Card.Title>
													<p as='h1'>{this.props.bike.model}</p>
													<p>
														{this.props.bike.category}
														<br />
													</p>
													<p>{this.props.bike.price}</p>
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
															{this.props.bike.description}
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
