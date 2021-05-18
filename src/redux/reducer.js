const initialState = {
	logingAcc: '',
	// [
	// 	{
	// 		username: '',
	// 	},
	// ],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_USERNAME':
			let logUser = action.payload;
			/* 	console.log(action.payload);
			let userCopy = [...state.logingAcc];
			userCopy.push(logUser); */
			// console.log(state);
			return {
				...state,
				logingAcc: logUser,
			};

		default:
			return state;
	}
};

export default reducer;
