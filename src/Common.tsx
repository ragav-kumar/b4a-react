import styled from 'styled-components'
import {Form} from 'formik'

export const StyledForm = styled(Form)`
	padding: 1em;
	max-width: 400px;
	> * {
		display: grid;
		grid-template-columns: [first] 8em [second] 1fr;
		
		align-items: center;
		span {
			grid-area: first;
			display: block;
			text-align: right;
			padding-right: 1em;
		}
		input {
			grid-area: second;
			margin-top: 5px;
			&[type=submit] {
				max-width: 8em;
			}
		}
	}
`;