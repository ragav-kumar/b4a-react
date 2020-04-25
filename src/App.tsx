import React,{useState} from 'react'
import { FormikHelpers } from 'formik'
import styled from 'styled-components'

import { logInQuery, LogInOperation, SubmitPostOperation, submitPostQuery, getAllPostsQuery } from './queries/queries';
import { loggedOutEnvironment, createLoggedInEnvironment } from './relayEnvironment';
import { commitMutation, Environment } from 'relay-runtime';
import { SubmitPost } from './Form/SubmitPost';
import { AppContext } from './Context';
import { UserDisplay, LogInState } from './User/UserDisplay';
import { PostFormState } from './Form/PostForm';
import { QueryRenderer } from 'react-relay';
import ReactJson from 'react-json-view';

const Wrap = styled.div`
	height: 100vh;
	background-color: black;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;
/**
 * Displayed area. Setup to try to simulate a mobile viewport.
 */
const Viewport = styled.div`
	width: 100%;
	max-width: 480px;
	height: 100%;
	max-height: 853px;
	border: 3px double white;
	overflow-y: scroll;
	position: relative;
`;

const Wrapper = ({children}: any) => (
	<Wrap>
		<Viewport>
			{children}
		</Viewport>
	</Wrap>
)

const App = () => {
	// Session token needs to be sent as a header on any logged-in operation
	const [sessionToken, setSessionToken] = useState<string>("");
	const [username, setUsername] = useState<string>("");
	// Used to display error message on failed login
	const [loginInvalid, setLoginInvalid] = useState<boolean>(false);
	const [loggedInEnv, setLoggedInEnv] = useState<Environment|null>(null);
	// Flipping this flag triggers a post list refresh
	const [updatePostList, setUpdatePostList] = useState<boolean>(false);

	const handleLogIn = (values: LogInState, form: FormikHelpers<LogInState>) => {
		commitMutation<LogInOperation>(loggedOutEnvironment, {
			mutation: logInQuery,
			variables: values,
			onCompleted: (response, errors) => {

				console.log(response);
				
				setSessionToken(response.logIn.sessionToken);
				setLoggedInEnv(createLoggedInEnvironment(response.logIn.sessionToken));
				setUsername(response.logIn.username);
				form.setSubmitting(false);
			},
			onError: (err) => {
				console.log(err);
				form.setSubmitting(false);
				setLoginInvalid(true);
			}
		});
	}
	const handleSubmitPost = (
		values: PostFormState,
		form: FormikHelpers<PostFormState>
	) => {
		if (loggedInEnv) { // ensure loggedInEnv is not null
			commitMutation<SubmitPostOperation>(loggedInEnv, {
				mutation: submitPostQuery,
				variables: { // need to mess with form state to make it fit
					content: values.content,
					likes: values.likes === "" ? 0 : values.likes,
					showComments: values.showComments,
					tags: ["UserSubmitted"],
				},
				onCompleted: (response, errors) => {
					console.log(response);
					alert("Post submitted!");
					// to trigger re-fetch
					setUpdatePostList(!updatePostList);
					form.setSubmitting(false);
					form.resetForm();
				},
				onError: (err) => {
					alert("Failed to submit post: Login is not valid!");
					console.log(err);
					form.setSubmitting(false);
				}
			});
		}
	}
	return (
		<AppContext.Provider
			value={{
				username: username,
				loggedInEnvironment: loggedInEnv,
			}}
		>
			<Wrapper>
				<UserDisplay
					handleLogin={handleLogIn}
					isInvalid={loginInvalid}
				/>
				{!!sessionToken.length ? 
					<SubmitPost
						sessionToken={sessionToken}
						onSubmit={handleSubmitPost}
					/>
					: null
				}
				<QueryRenderer
					environment={loggedOutEnvironment}
					query={getAllPostsQuery}
					variables={{
						isUpdate: updatePostList,
					}}
					render={({ props }: { props: any }) => (
						<ReactJson
							src={props}
							theme="isotope"
							enableClipboard={false}
						/>
					)}
				/>
			</Wrapper>
		</AppContext.Provider>
	);
}

export default App;
