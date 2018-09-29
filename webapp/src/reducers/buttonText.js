const initialState = "Find Your Gif"

const buttonText = (state = initialState, action) => {
	switch (action.type) {
		case "START_REQUEST":
			return "Wait...";
		case "RECIEVE_DATA":
			return initialState;
		default:
			return state;
	}
}

export default buttonText;