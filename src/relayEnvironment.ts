import { Environment, Network, RecordSource, Store, Variables, RequestParameters } from "relay-runtime";

const API = {
	uri: process.env.REACT_APP_GQL_URI ?? "",
	applicationID: process.env.REACT_APP_GQL_APP_ID ?? "",
	key: process.env.REACT_APP_GQL_JS_KEY ?? "",
};
const generateFetch = (sessionToken?: string) => {
	const headers: HeadersInit = {
		'X-Parse-Application-Id': API.applicationID,
		'X-Parse-Javascript-Key': API.key,
		'Content-Type': 'application/json',
	};
	if (sessionToken?.length) {
		headers["X-Parse-Session-Token"] = sessionToken;
	}
	return async (params:RequestParameters, variables:Variables) => {
		console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
		console.log("Headers:", headers);
		const response = await fetch(API.uri, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify({ query: params.text, variables }),
		});
		return await response.json();
	}
}
// Logged Out Environment
export const loggedOutEnvironment = new Environment({
	network: Network.create(generateFetch()),
	store: new Store(new RecordSource()),
});
// Create logged in environment using sessionToken
export function createLoggedInEnvironment(sessionToken:string):Environment {
	return new Environment({
		network: Network.create(generateFetch(sessionToken)),
		store: new Store(new RecordSource()),
	});
}
