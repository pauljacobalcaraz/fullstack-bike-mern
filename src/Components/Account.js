import React from 'react';

class Account extends React.Component {
	state = {
		name: this.props.username,
	};
	/* componentDidMount() {
		this.setState({
			name: this.props.name,
		});
		console.log(this.state.name);
	} */
	render() {
		return (
			<>
				{/* {this.state.name !== '' ? (
					<div>
						<h1>1</h1>
					</div>
				) : (
					''
				)} */}
				<h1>{this.state.name}</h1>
			</>
		);
	}
}

export default Account;
