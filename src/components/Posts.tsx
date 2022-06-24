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
    GetPost();
  }, []);

	const GetPost = () => {
		axios.get('http://localhost:3000/posts')
		.then((response) => {
			setPosts(response.data);
		})
		.catch(error => alert('Error'))
	}

	const deletePost = (id: number) => {
		axios.delete(`http://localhost:3000/posts/${id}`)
			.then((response) => {
				alert('投稿を削除しました');
				GetPost();
			})
			.catch(error => alert('削除に失敗しました'))
	}

	return (
		<>
			<PostsSection>
				<h3>POSTS</h3>
				{posts.map((post) => (
					<PostsList key={post.id}>
						<div>
							<li>
								<h4>{post.title}</h4>
								<p>{post.body}</p>
							</li>
						</div>
						<img src="../src/images/delete.png" alt="削除" onClick={() => deletePost(post.id)} />
					</PostsList>
				))}
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
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	list-style: none;
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

	img {
		width: 2.5%;
		object-fit: contain;
		margin-right: 30px;
	}
`;
