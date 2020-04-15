import React,{useState} from 'react'
import { FormikHelpers } from 'formik'

import { logInQuery, LogInOperation } from './queries/queries';
import { loggedOutEnvironment } from './relayEnvironment';
import { commitMutation } from 'relay-runtime';
import PostList from './Form/PostList';
import { LogIn, LogInState } from './Form/LogIn';
import SubmitPost from './Form/SubmitPost';

/* const StyledForm = styled(Form)`
	padding: 1em;
	color: white;
`;
const FetchWrap = styled.div`
	font-size: 12px;
	min-height: 20em;
	padding: 2em;
	border: 3px double white;
`;
const QueryDisplay = styled.pre`
	color: white;
	height: 20em;
	overflow-y: scroll;
	border: 1px solid white;
`;
const TwoColumns = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-items: baseline;
`; */

const App = () => {
	const [sessionToken, setSessionToken] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);
	const [loginInvalid, setLoginInvalid] = useState(false);

	const handleLogIn = (values: LogInState, form: FormikHelpers<LogInState>) => {
		commitMutation<LogInOperation>(loggedOutEnvironment, {
			mutation: logInQuery,
			variables: values,
			onCompleted: (response, errors) => {
				/* if (response.sessionToken?.length) {
					setSessionToken(response.sessionToken);
					setLoggedIn(true);
				} */
				console.log(response);
				setSessionToken(response.logIn.sessionToken);
				setLoggedIn(true);
				form.setSubmitting(false);
				// form.resetForm();
			},
			onError: (err) => {
				console.log(err);
				form.setSubmitting(false);
				setLoginInvalid(true);
			}
		});
	}
	
	/* const handleSubmit = (values:FormState, form:FormikHelpers<FormState>) => {
		// setQuery(queries[values.query].query);
		form.setSubmitting(false);
	} */
	return (
		<>
			{/* <Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				{({values}) => (
					<StyledForm>
						<h2>Result:</h2>
						<FetchWrap>
							<RelayEnvironmentProvider environment={relayEnvironment}>
								<Suspense fallback="Loading...">
									<Inner query={preloadedQuery} />
								</Suspense>
							</RelayEnvironmentProvider>
						</FetchWrap>
					</StyledForm>
				)}
			</Formik> */}
			<LogIn
				onSubmit={handleLogIn}
				isInvalid={loginInvalid}
				isLoggedIn={loggedIn}
			/>
			{loggedIn ? 
				<SubmitPost sessionToken={sessionToken} />
				: null
			}
			<PostList />
		</>
	);
}

export default App;
