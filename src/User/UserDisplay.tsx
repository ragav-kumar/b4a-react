import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../Context';
import styled from 'styled-components';
import { FormikHelpers } from 'formik';
import { LogInForm } from './LogInForm';

export interface LogInState {
	username: string;
	password: string;
}

interface UserDisplayProps {
	handleLogin: (
		values: LogInState,
		form: FormikHelpers<LogInState>
	) => void,
	isInvalid: boolean;
}

const Wrap = styled.div`
	background-color: #333;
	width: 100%;
	padding: 5%;
	font-size: 20px;
	text-align: center;
	cursor: ${({loggedIn}: {loggedIn: boolean}) => (loggedIn ? "default" : "pointer")};
`;

export const UserDisplay = ({ handleLogin, isInvalid }: UserDisplayProps) => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const context = useContext(AppContext);
	const loggedIn: boolean = !!context.username.length;
	useEffect(() => {
		if (!!context.username.length) {
			setShowModal(false);
		}
	}, [context]);

	
	return (
		<Wrap loggedIn={loggedIn} onClick={!loggedIn ? () => setShowModal(true) : () => {}}>
			{loggedIn ? `Welcome, ${context.username}` : "Welcome, User. Click here to log in."}
			<LogInForm
				onSubmit={handleLogin}
				isInvalid={isInvalid}
				isLoggedIn={loggedIn}
				show={showModal}
				onHide={() => setShowModal(false)}
			/>
		</Wrap>
	)
}
