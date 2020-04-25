import React from 'react'
import {Formik, Field, FormikHelpers} from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'
import Modal from "react-bootstrap/Modal"
import { LogInState } from './UserDisplay';
import { StyledForm } from '../Common'

const InvalidMessage = styled.div`
	grid-area: second;
	color: red;
	font-size: 12px;
	text-align: center;
`;
const ModalHeader = styled(Modal.Header)`
	background-color: #070707;
	color: white;
`;
const ModalBody = styled(Modal.Body)`
	background-color: #070707;
	color: white;
`;



const loginSchema = Yup.object().shape<LogInState>({
	username: Yup.string().required('Required'),
	password: Yup.string().required("Required"),
});
const initialValues:LogInState = {
	username: "",
	password: "",
}
interface LogInProps {
	onSubmit: (
		values: LogInState,
		form: FormikHelpers<LogInState>
	) => void;
	isInvalid: Boolean;
	isLoggedIn: Boolean;
	show: Boolean;
	onHide: () => void;
}
export const LogInForm = ({onSubmit, isInvalid, isLoggedIn, show, onHide}:LogInProps) => (
	<Modal show={show} onHide={onHide}>
		<ModalHeader closeButton>
			<Modal.Title>Log In</Modal.Title>
		</ModalHeader>
		<ModalBody>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={loginSchema}
			>
				{() => (
					<>{isLoggedIn ? null : 
					<StyledForm>
						<label>
							<span>Username</span>
							<Field
								name="username"
								as="input"
							/>
						</label>
						<label>
							<span>Password</span>
							<Field
								name="password"
								as="input"
								type="password"
							/>
						</label>
						{isInvalid ?
							<label>
								<InvalidMessage>Invalid Username / Password</InvalidMessage>
							</label>
							: null
						}
						<label>
							<Field
								name="submit"
								as="input"
								type="submit"
								value="Log in"
							/>
						</label>
					</StyledForm>
					}</>
				)}
			</Formik>
		</ModalBody>
	</Modal>
)