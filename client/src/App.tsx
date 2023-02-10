import React from 'react';
import { connect } from 'react-redux';
import { getPosts, Post } from './actions';
import { StoreState } from './reducers';

interface AppProps {
	posts: Post[];
	getPosts: Function;
}

class _App extends React.Component<AppProps> {
	constructor(props: AppProps) {
		super(props);
	}

	componentDidMount(): void {
		this.props.getPosts();
	}

	renderList(): JSX.Element[] {
		return this.props.posts.map((post: Post) => {
			return <div key={post.id}>{post.title}</div>;
		});
	}

	render(): React.ReactNode {
		return <div>{this.renderList()}</div>;
	}
}

const mapStateToProps = ({ posts }: StoreState): { posts: Post[] } => {
	return { posts };
};

export const App = connect(mapStateToProps, { getPosts })(_App);
