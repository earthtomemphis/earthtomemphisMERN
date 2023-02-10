import { Post, Action, ActionTypes } from '../actions';

export const postsReducer = (state: Post[] = [], action: Action) => {
	switch (action.type) {
		case ActionTypes.getPosts:
			return action.payload;
		default:
			return state;
	}
};
