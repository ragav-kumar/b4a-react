import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { useFormikContext } from 'formik'
import debounce from 'just-debounce-it';

const Wrap = styled.div`
	font-size: 11px;
	color: gray;
`;

interface AutoSaveProps {
	debounceMs:number
	hideOutput:boolean
}
/**
 * Adds an autosubmit feature to a Formik form
 */
const AutoSave = ({ debounceMs, hideOutput }:AutoSaveProps) => {
	const formik = useFormikContext();
	const [lastSaved, setLastSaved] = useState<string|null>(null);
	const debouncedSubmit = useCallback(
		debounce(
			() => formik.submitForm().then(() => setLastSaved(new Date().toISOString())),
			debounceMs
		),
		[debounceMs, formik.submitForm]
	);

	useEffect(() => {
		debouncedSubmit();
	}, [debouncedSubmit, formik.values]);

	return (
		<>
			{hideOutput ? null :
				<Wrap>
					{!!formik.isSubmitting
						? 'saving...'
						: lastSaved !== null
							? `Last Saved: ${lastSaved}`
							: null
					}
				</Wrap>
			}
		</>
	);
};

export default AutoSave;