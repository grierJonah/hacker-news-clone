export default function (
	state = {
		loggedIn: false,
		username: "",
		password: "",
		email: "",
	},
	action
) {
	if (action.type === "LOG_IN") {
		// If username, password match db, set username, password, email so that we can display more information on the nav bar
		return state;
	}
	return state;
}
