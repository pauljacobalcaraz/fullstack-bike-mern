import React from 'react';
import './color-pallet.css';
import * as ReactBootstrap from 'react-bootstrap';
import RegForm from './RegForm';
import LoginForm from './LoginForm';
import Logout from './Logout';
import { Link, Route } from 'react-router-dom';
import Account from './Account';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class NavBar extends React.Component {
	render() {
		return (
			<>
				<ReactBootstrap.Navbar
					collapseOnSelect
					expand='lg'
					variant='dark'
					className='bg-color-pallet1' // customized color
				>
					<ReactBootstrap.Navbar.Brand>Mr Bikes</ReactBootstrap.Navbar.Brand>
					<ReactBootstrap.Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<ReactBootstrap.Navbar.Collapse id='responsive-navbar-nav'>
						<ReactBootstrap.Nav className='mr-auto'>
							<Route exact path='/'>
								<Link to='/'>
									<ReactBootstrap.Nav.Link href='#bikes'>
										Home
									</ReactBootstrap.Nav.Link>
								</Link>
								<Link to='/new-bikes'>
									<ReactBootstrap.Nav.Link href='#bikes'>
										New Bike
									</ReactBootstrap.Nav.Link>
								</Link>
								<Link to='/top-bikes'>
									<ReactBootstrap.Nav.Link href='#bikes'>
										Top Bikes
									</ReactBootstrap.Nav.Link>
								</Link>
							</Route>
							<Route path='/new-bikes'>
								<Link to='/'>
									<ReactBootstrap.Nav.Link href='#bikes'>
										Home
									</ReactBootstrap.Nav.Link>
								</Link>
								<Link to='/new-bikes'>
									<ReactBootstrap.Nav.Link href='#bikes'>
										New Bike
									</ReactBootstrap.Nav.Link>
								</Link>
								<Link to='/top-bikes'>
									<ReactBootstrap.Nav.Link href='#bikes'>
										Top Bikes
									</ReactBootstrap.Nav.Link>
								</Link>
							</Route>

							<Route path='/top-bikes'>
								<Link to='/'>
									<ReactBootstrap.Nav.Link href='#bikes'>
										Home
									</ReactBootstrap.Nav.Link>
								</Link>
								<Link to='/new-bikes'>
									<ReactBootstrap.Nav.Link href='#bikes'>
										New Bike
									</ReactBootstrap.Nav.Link>
								</Link>
								<Link to='/top-bikes'>
									<ReactBootstrap.Nav.Link>Top Bike</ReactBootstrap.Nav.Link>
								</Link>
							</Route>
							<Route path='/admin-bike/'>
								<Link to='/admin-bike'>
									<ReactBootstrap.Nav.Link href='#bikes'>
										Home
									</ReactBootstrap.Nav.Link>
								</Link>

								<Link to='/admin-bike/sales'>
									<ReactBootstrap.Nav.Link href='#bikes'>
										Sales
									</ReactBootstrap.Nav.Link>
								</Link>
							</Route>
							<Route path='/staff-bike/'>
								<Link to='/staff-bike'>
									<ReactBootstrap.Nav.Link href='#bikes'>
										Home
									</ReactBootstrap.Nav.Link>
								</Link>
								{/* <Link to='/staff-bike/my-history'> */}
								{/* <Link to='/admin-bike/staff'>
									<ReactBootstrap.Nav.Link href='#bikes'>
										History
									</ReactBootstrap.Nav.Link>
								</Link> */}
							</Route>
						</ReactBootstrap.Nav>
						<ReactBootstrap.Nav>
							<Route exact path='/'>
								<ReactBootstrap.Nav.Link eventKey={2}>
									<RegForm />
								</ReactBootstrap.Nav.Link>
								<ReactBootstrap.Nav.Link eventKey={2}>
									<LoginForm />
								</ReactBootstrap.Nav.Link>
							</Route>
							<Route exact path='/new-bikes'>
								<ReactBootstrap.Nav.Link eventKey={2}>
									<RegForm />
								</ReactBootstrap.Nav.Link>
								<ReactBootstrap.Nav.Link eventKey={2}>
									<LoginForm />
								</ReactBootstrap.Nav.Link>
							</Route>
							<Route exact path='/top-bikes'>
								<ReactBootstrap.Nav.Link eventKey={2}>
									<RegForm />
								</ReactBootstrap.Nav.Link>
								<ReactBootstrap.Nav.Link eventKey={2}>
									<LoginForm />
								</ReactBootstrap.Nav.Link>
							</Route>
							<Route path='/admin-bike/'>
								<ReactBootstrap.Nav.Link eventKey={2}>
									<Logout />
								</ReactBootstrap.Nav.Link>
							</Route>
							<Route path='/staff-bike/'>
								<ReactBootstrap.Nav.Link eventKey={2}>
									<Logout />
								</ReactBootstrap.Nav.Link>
							</Route>
						</ReactBootstrap.Nav>
					</ReactBootstrap.Navbar.Collapse>
				</ReactBootstrap.Navbar>
			</>
		);
	}
}

export default NavBar;
