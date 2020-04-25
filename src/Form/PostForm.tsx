import React from 'react'
import { FormikHelpers, Formik, Field } from 'formik'
import * as Yup from 'yup'
import { StyledForm } from '../Common';

export interface PostFormState {
	content: string;
	likes: number | ""; // Need to allow empty string otherwise it'll populate by default
	showComments: boolean;
}
const initialValues: PostFormState = {
	content: "",
	likes: "",
	showComments: false,
};

interface PostFormProps {
	onSubmit: (
		values: PostFormState,
		form: FormikHelpers<PostFormState>
	) => void;
}
const postFormSchema = Yup.object().shape<PostFormState>({
	content: Yup.string().required('Required'),
	likes: Yup.number().integer(),
	showComments: Yup.boolean(),
});

export const PostForm = (props: PostFormProps) => (
	<Formik
		initialValues={initialValues}
		onSubmit={props.onSubmit}
		validationSchema={postFormSchema}
	>
		{() => (
			<StyledForm>
				<label>
					<span>Content</span>
					<Field
						name="content"
						as="input"
					/>
				</label>
				<label>
					<span># of Likes</span>
					<Field
						name="likes"
						as="input"
						type="number"
					/>
				</label>
				<label>
					<span>Show Comments?</span>
					<Field
						name="showComments"
						as="input"
						type="checkbox"
					/>
				</label>
				<label>
					<Field
						name="submit"
						as="input"
						type="submit"
						value="Submit New Post"
					/>
				</label>
			</StyledForm>
		)}
	</Formik>
)
