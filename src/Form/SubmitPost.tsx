import React, { useEffect, useState } from 'react'
import { Environment } from 'react-relay';
import { createLoggedInEnvironment } from '../relayEnvironment';

interface SubmitPostProps {
	sessionToken: string;
}
const SubmitPost = ({sessionToken}: SubmitPostProps) => {
	const [environment, setEnvironment] = useState<Environment>();
	useEffect(() => {
		setEnvironment(createLoggedInEnvironment(sessionToken));
	}, [sessionToken]);
	
	if (environment) {
		return (<p>TODO</p>);
	} else {
		return null;
	}
}

export default SubmitPost;