import { Environment, Network, RecordSource, Store, FetchFunction } from "relay-runtime";

const API = {
	uri: process.env.REACT_APP_GQL_URI ?? "",
	applicationID: process.env.REACT_APP_GQL_APP_ID ?? "",
	key: process.env.REACT_APP_GQL_JS_KEY ?? "",
};

const fetchQuery: FetchFunction = async (params, variables) => {
	console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
	const headers: HeadersInit = {
		'X-Parse-Application-Id': API.applicationID,
		'X-Parse-Javascript-Key': API.key,
		'Content-Type': 'application/json',
	};
	if (params.metadata.hasOwnProperty("sessionToken")) {
		headers["X-Parse-Session-Token"] = String(params.metadata.sessionToken);
	}
	const response = await fetch(API.uri, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify({ query: params.text, variables }),
	});
	return await response.json();
}

export const relayEnvironment = new Environment({
	network: Network.create(fetchQuery),
	store: new Store(new RecordSource()),
});