import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { signin, signup } from "../actions/auth";
import {
	Grid,
	Container,
	Paper,
	Avatar,
	Typography,
	Button,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import authenticationStyles from "./styles";
import UserForm from "./UserForm";

const initialData = { firstName: "", lastName: "", email: "", password: "" };

const Authentication = () => {
	const classes = authenticationStyles();
	const [isSignedUp, setSignUp] = useState(false);
	const [data, setData] = useState(initialData);
	const dispatch = useDispatch();

	const handleSubmitForm = (e) => {
		e.preventDefault();

		if (isSignedUp) {
			// dispatch(signup(data, history));
		} else {
			// dispatch(signin(data, history));
		}
	};

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const switchMode = () => {
		setSignUp((prevSignUp) => !prevSignUp);
	};

	return (
		<Container component="main" maxWidth="xs">
			<Paper className={classes.paper} elevation={5}>
				<Avatar className={classes.avatar}>
					<LockIcon />
				</Avatar>
				<Typography variant="h5">
					{isSignedUp ? "Sign Up" : "Sign In"}
				</Typography>
				<form className={classes.form} onSubmit={handleSubmitForm}>
					<Grid container spacing={2}>
						{isSignedUp ? (
							<>
								<UserForm
									name="firstName"
									label="First Name"
									handleChange={handleChange}
									autoFocus
									half
								/>
								<UserForm
									name="lastName"
									label="Last Name"
									handleChange={handleChange}
									half
								/>
							</>
						) : null}
						<UserForm
							name="email"
							label="Email Address"
							handleChange={handleChange}
							type="email"
						/>
						<UserForm
							name="password"
							label="Password"
							handleChange={handleChange}
							type="password"
						/>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}>
						{isSignedUp ? "Sign Up" : "Sign In"}
					</Button>
					<Grid item>
						<Button onClick={switchMode}>
							{isSignedUp
								? "Already have an account? Click here to Sign In"
								: "Don't have an account? Sign up!"}
						</Button>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Authentication;
