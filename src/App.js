import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Bikes from './Components/Bikes';
import { Route, Router } from 'react-router-dom';
import StaffList from './Components/StaffList';
import Sales from './Components/Sales';
import LoginForm from './Components/LoginForm';
import store from './redux/store';
import { Provider } from 'react-redux';

class App extends React.Component {
	state = { user: [] };

	// userLogHandler = (user) => {
	// 	this.setState({
	// 		user: this.pro,
	// 	});
	// };
	render() {
		return (
			<Provider store={store}>
				<>
					<NavBar />
					<Bikes />
					<Route exact path='/admin-bike/staff'>
						<StaffList />
					</Route>
					<Sales />
					{/* Sales' Route is at their Component */}
					{/* <LoginForm /> */}
					<LoginForm userLogHandler={this.userLogHandler} />
				</>
			</Provider>
		);
	}
}

export default App;
