import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Parse from 'parse'

const H3 = styled.h3` color: white; `;

const API = {
	uri: "https://parseapi.back4app.com/",
	applicationID: process.env.REACT_APP_GQL_APP_ID ?? "",
	key: process.env.REACT_APP_GQL_JS_KEY ?? "",
};
Parse.serverURL = API.uri;
Parse.initialize(API.applicationID, API.key);

const ParseTest = () => {
	const [result, setResult] = useState<string>("")

	useEffect(() => {
		const install = new Parse.Installation();

		install.set("deviceType", navigator.userAgent);
		install.save().then(resp => {
			console.log("Created Install Object", resp);
			setResult("New object created with objectId: " + resp.id);
		}, err => {
			console.log("Error creating Install Object", err);
			setResult("Failed to create new object, with error code: " + err.message);
		});
	}, []);
	
	
	return (
		<H3>{result}</H3>
	);
}

export default ParseTest;