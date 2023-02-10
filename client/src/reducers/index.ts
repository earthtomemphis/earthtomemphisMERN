import { combineReducers } from 'redux';
import { Post } from '../actions';
import { postsReducer } from './posts';

export interface StoreState {
	posts: Post[];
}

export const reducers = combineReducers({
	posts: postsReducer,
});
