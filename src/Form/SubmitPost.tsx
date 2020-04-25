import React, { useEffect, useState } from 'react'
import { Environment } from 'react-relay';
import { createLoggedInEnvironment } from '../relayEnvironment';
import { PostForm, PostFormState } from './PostForm';
import { FormikHelpers } from 'formik';

interface SubmitPostProps {
	sessionToken: string;
	onSubmit: (
		values: PostFormState,
		form: FormikHelpers<PostFormState>
	) => void;
}
export const SubmitPost = ({sessionToken, onSubmit}: SubmitPostProps) => {
	const [environment, setEnvironment] = useState<Environment>();
	useEffect(() => {
		setEnvironment(createLoggedInEnvironment(sessionToken));
	}, [sessionToken]);
	
	if (environment) {
		return <PostForm onSubmit={onSubmit} />;
	} else {
		return null;
	}
}
