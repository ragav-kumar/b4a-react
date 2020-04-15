import { graphql } from 'babel-plugin-relay/macro';
import { OperationType, MutationParameters } from 'relay-runtime';
// Attempt to log in the user
export const logInQuery = graphql`
	mutation queries_LogInMutation($username:String!, $password:String!) {
		logIn(fields:{
			username: $username
			password: $password
		}){
			id,
			username,
			sessionToken
		}
	}
`;
// OperationType for logInQuery
export interface LogInOperation extends MutationParameters {
	variables: {
		username: string;
		password: string;
	};
	response: {
		id: string;
		username: string;
		sessionToken: string;
	};
}
// Retrieve all posts in system
export const getAllPostsQuery = graphql`
	query queries_GetAllPostsQuery {
		posts {
			count,
			results {
				createdAt,
				content,
				likes,
				showComments
			}
		}
	}
`;
// OperationType for getAllPostsQuery
export interface GetPostsOperation extends OperationType {
	variables: {
		//No inputs
	};
	response: {
		posts: {
			count: Number;
			results: {
				[index: number]: {
					createdAt: Date;
					content: String;
					likes: Number;
					showComments: Boolean;
				}
			}
		}
	};
}
// Submit a new post, return id of new post
export const submitPostQuery = graphql`
	mutation queries_submitPostMutation(
		$content:String,
		$likes:Float,
		$tags:[Any],
		$showComments:Boolean
	) {
		createPost(fields: {
			content: $content,
			likes: $likes,
			tags: $tags,
			showComments: $showComments
		}) {
			id
		}
	}
`;
//OperationType for submitPostQuery
export interface SubmitPostOperation extends OperationType {
	variables: {
		content: String;
		likes: Number;
		tags: [String];
		showComments: Boolean;
	};
	response: {
		id: String;
	};
}