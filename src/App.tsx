import React,{useState, Suspense} from 'react'
import styled from 'styled-components'
import { Form, Formik, FormikHelpers } from 'formik'

import { QuerySelect } from './Form/QuerySelect';
import { logInQuery, getAllPostsQuery, submitPostQuery, LogInOperation, GetPostsOperation, SubmitPostOperation, LogInResponse } from './queries/queries';
import AutoSave from './Form/Autosave';
import { QueryRenderer, GraphQLTaggedNode } from 'react-relay';
import { RelayEnvironmentProvider, preloadQuery, usePreloadedQuery } from "react-relay/hooks";
import { graphql } from 'babel-plugin-relay/macro'
import { relayEnvironment } from './relayEnvironment';
import { Fetch } from './Fetch';
import ReactJson from 'react-json-view';
import { PreloadedQuery } from 'react-relay/lib/relay-experimental/EntryPointTypes';
import { OperationType, commitMutation, MutationParameters } from 'relay-runtime';
import PostList from './Form/PostList';
import { LogIn, LogInState } from './Form/LogIn';

const StyledForm = styled(Form)`
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
`;

interface FormState {
	query:number;
};
const initialValues:FormState = {
	query: 1,
};

interface InnerProps {
	query: PreloadedQuery<GetPostsOperation, any>
}
const Inner = (props:InnerProps) => {
	const data = usePreloadedQuery(getAllPostsQuery, props.query);
	console.log(data);
	return (
		<ReactJson
			src={data.posts}
			theme="isotope"
			enableClipboard={false}
		/>
	);
}

const preloadedQuery = preloadQuery<GetPostsOperation>(relayEnvironment, getAllPostsQuery, { /* vars */ });


const App = () => {
	const [sessionToken, setSessionToken] = useState("");
	const [loginInvalid, setLoginInvalid] = useState(false);

	const handleLogIn = (values: LogInState, form: FormikHelpers<LogInState>) => {
		commitMutation<LogInOperation>(relayEnvironment, {
			mutation: logInQuery,
			variables: values,
			onCompleted: (response, errors) => {
				setSessionToken(response.sessionToken);
				form.setSubmitting(false);
				form.resetForm();
				setLoginInvalid(false);
			},
			onError: (err) => {
				console.log(err);
				form.setSubmitting(false);
				setLoginInvalid(true);
			}
		});

	}
	
	const handleSubmit = (values:FormState, form:FormikHelpers<FormState>) => {
		// setQuery(queries[values.query].query);
		form.setSubmitting(false);
	}
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
			{sessionToken ?
				null : 
				<LogIn onSubmit={handleLogIn} isInvalid={loginInvalid} />
			}
			<PostList />
		</>
	);
}

export default App;
