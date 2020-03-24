import React,{useState, useEffect} from 'react'
import ReactJson from 'react-json-view'

const API = {
	uri: process.env.REACT_APP_GQL_URI    ?? "",
	applicationID: process.env.REACT_APP_GQL_APP_ID ?? "",
	key: process.env.REACT_APP_GQL_JS_KEY ?? "",
};
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN ?? "";

async function fetchGraphQL(query:string, variables:object) {
	console.log(API, GITHUB_TOKEN);
	const response = await fetch(`${API.uri}`, {
		method: 'POST',
		headers: {
			'X-Parse-Application-Id': API.applicationID,
			'X-Parse-Javascript-Key': API.key,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query:query, variables }),
	});
	return await response.json();
}

interface FetchProps {
	query:string
};
const Fetch = ({ query }: FetchProps) => {
	const [fetchData, setFetchData] = useState({});
	
	useEffect(() => {
		console.log(query);
		fetchGraphQL(query, {}).then(
			response => setFetchData(response.data)
		).catch(
			err => console.error(err)
		);
	}, [query]);
	
	return (
		<>
		{fetchData ? 
			<ReactJson
				src={fetchData}
				theme="isotope"
				enableClipboard={false}
			/> :
			<div>No response from server</div>
		}
		</>
	);
	
}

export {
	Fetch
}