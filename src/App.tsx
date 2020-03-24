import React,{useState} from 'react'
import styled from 'styled-components'
import { Form, Formik, FormikHelpers } from 'formik'

import { Fetch } from "./Fetch";
import { QuerySelect } from './QuerySelect';
import { queries } from './queries';
import AutoSave from './Autosave';


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


const App = () => {
	const [query, setQuery] = useState<string>("");
	
	const handleSubmit = (values:FormState, form:FormikHelpers<FormState>) => {
		setQuery(queries[values.query].query);
		form.setSubmitting(false);
	}
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
		>
			{({values}) => (
				<StyledForm>
					<AutoSave debounceMs={300} hideOutput />
					<h2>Query:</h2>
					<TwoColumns>
						<QuerySelect name="query" />
						<p>Query cookbook <a target="_blank" rel="noopener noreferrer" href="https://www.back4app.com/docs/parse-graphql/graphql-getting-started">here</a>.</p>
					</TwoColumns>
					<QueryDisplay>
						{query}
					</QueryDisplay>
					<h2>Result:</h2>
					<FetchWrap>
						<Fetch query={query} />
					</FetchWrap>
				</StyledForm>
			)}
		</Formik>
	);
}

export default App;
