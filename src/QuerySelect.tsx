import React from 'react'
import {Field} from 'formik'
import { queries } from './queries';

interface QuerySelectProps {
	name: string,
};
const QuerySelect = ({name}:QuerySelectProps) => {
	const items:JSX.Element[] = [];
	for (const val in queries) {
		if (queries.hasOwnProperty(val)) {
			const label = queries[val].label;
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