import React from 'react'
import { getAllPostsQuery } from "../queries/queries";
import { QueryRenderer } from 'react-relay';
import { loggedOutEnvironment } from '../relayEnvironment';
import ReactJson from 'react-json-view';

/*interface TableProps {

}
const Table = (props:TableProps) => {
	const rows:JSX.Element[] = [];
	
	return (
		<table>
			<thead>
				<th>Created</th>
				<th>Content</th>
				<th>Likes</th>
				<th>Show Comments?</th>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	);
}*/

const PostList = () => (
	<QueryRenderer
		environment={loggedOutEnvironment}
		query={getAllPostsQuery}
		variables={{}}
		render={({props}:{props: any}) => (
			<ReactJson
				src={props}
				theme="isotope"
				enableClipboard={false}
			/>
		)}
	/>
)

export default PostList;