export default function (
	state = {
		loggedIn: false,
	},
	action
) {
	if (action.type === "LOG_IN") {
		return state;
	}
	return state;
}
