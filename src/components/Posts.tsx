import { useEffect, useState } from "react";

type Post = {
	id: number;
	title: string;
	body: string;
}

export const Posts = () => {
	const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, []);

	return (
		<>
			<section className="sectionPosts">
				<h3>POSTS</h3>
				<ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
			</section>
		</>
	)
}