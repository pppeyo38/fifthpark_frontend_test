import { useEffect, useState, memo } from "react";
import axios from "axios";
import styled from "styled-components"

type Post = {
	id: number;
	title: string;
	body: string;
}

export const Posts = memo(() => {
	console.log('post')

	const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
			.then((response) => {
				console.log(response);
				setPosts(response.data);
			})
			.catch(error => alert('Error'))
  }, []);

	return (
		<>
			<PostsSection>
				<h3>POSTS</h3>
				<PostsList>
					{posts.map((post) => (
						<li key={post.id}>
							<h4>{post.title}</h4>
							<p>{post.body}</p>
						</li>
					))}
				</PostsList>
			</PostsSection>
		</>
	)
})

const PostsSection = styled.section`
	width: 90%;
	margin: 20px auto;
	display: flex;
	flex-direction: column;
	gap: 8px;

	h3 {
		color: #333;
		font-size: 1.5em;
		margin: 0;
		margin-bottom: 12px;
		padding: 0;
	}
`;

const PostsList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;

	li {
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125);
		margin: 0 0 1rem 0;
		padding: 1rem;

		h4 {
			color: #333;
			font-size: 1.2em;
			margin: 0;
			padding: 0;
		}
	}
`;