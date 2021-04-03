const bcrypt = require("bcryptjs");

export default function (
	state = {
		loggedIn: false,
		username: "",
		password: "",
		email: "",
		redirect: "",
	},
	action
) {
	if (action.type === "LOG_IN") {
		// If username, password match db, set username, password, email so that we can display more information on the nav bar
		console.log(action.username, action.password, action.auth);
		if (bcrypt.compareSync(action.password, action.auth.password)) {
			return {
				...state,
				loggedIn: true,
				username: action.username,
				password: action.password,
				email: action.auth.email,
				redirect: "/",
			};
		}
		return {
			...state,
		};
	}

	if (action.type === "REGISTER") {
		return state;
	}
	return state;
}
