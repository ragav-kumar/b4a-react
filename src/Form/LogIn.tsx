import React from 'react'
import {Formik, Form, Field, FormikHelpers} from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'

const StyledForm = styled(Form)`
	padding: 1em;
	color: white;
	max-width: 400px;
	> * {
		display: grid;
		grid-template-columns: [first] 8em [second] 1fr;
		
		align-items: center;
		span {
			grid-area: first;
			display: block;
			text-align: right;
			padding-right: 1em;
		}
		input {
			grid-area: second;
			margin-top: 5px;
			&[type=submit] {
				max-width: 8em;
			}
		}
	}
`;
const InvalidMessage = styled.div`
	grid-area: second;
	color: red;
	font-size: 12px;
	text-align: center;
`;


export interface LogInState {
	username: string;
	password: string;
}

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
	isInvalid: Boolean
}
export const LogIn = ({onSubmit, isInvalid}:LogInProps) => (
	<Formik
		initialValues={initialValues}
		onSubmit={onSubmit}
	>
		{() => (
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
		)}
	</Formik>
)