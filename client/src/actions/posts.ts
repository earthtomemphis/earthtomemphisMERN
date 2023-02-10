import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Post {
	id: string;
	title: string;
	body: string;
}

export interface GetPostsAction {
	type: ActionTypes.getPosts;
	payload: Post[];
}

const url = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<Post[]>(url);

		dispatch<GetPostsAction>({
			type: ActionTypes.getPosts,
			payload: response.data,
		});
	};
};
