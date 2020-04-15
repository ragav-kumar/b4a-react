import React from 'react'
import {Field} from 'formik'

interface QuerySelectProps {
	name: string;
	queries: {
		[val: string]: string;
	};
};
/**
 * Holdover from when I was just implementing a dropdown of queries
 */
const QuerySelect = ({ name,queries }:QuerySelectProps) => {
	const items:JSX.Element[] = [];
	for (const val in queries) {
		if (queries.hasOwnProperty(val)) {
			const label = queries[val];
			items.push(
				<option key={val} value={val}>{label}</option>
			);
		}
	}
	return (
		<Field name={name} as="select">
			{items}
		</Field>
	);
}

export { QuerySelect };