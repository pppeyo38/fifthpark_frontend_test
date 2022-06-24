import { useState, memo } from "react";
import axios from "axios";
import styled from "styled-components";

type Data = {
	title: string;
	body: string;
}

const initialData: Data = {
	title: '',
	body: '',
}

export const Form = memo(() => {
	console.log('form')

	const [ data, setData ] = useState<Data>(initialData);

	const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
    setData({ ...data, title: value });
	}
	const onChangeBody = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
    setData({ ...data, body: value });
	}

	const createPost = () => {
		axios.post('http://localhost:3000/posts', {
			title: data.title,
			body: data.body
		})
		.then((response) => {
			alert('投稿完了!')
		})
		.catch(error => alert('投稿失敗しました...'))
	}

	return (
		<>
			<FormSection>
				<h3>FORM</h3>
				<FormStyle>
					<Labels htmlFor="">
						TITLE
						<input type="text" name="title" value={data.title} onChange={onChangeTitle} />
					</Labels>
					<Labels htmlFor="">
						BODY
						<input type="text" name="body" value={data.body} onChange={onChangeBody} />
					</Labels>
					<Button type="submit" onClick={createPost}>CREATE</Button>
				</FormStyle>
			</FormSection>
		</>
	);
})

const FormSection = styled.section`
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

const FormStyle = styled.form`
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125);
	margin: 0 0 1rem 0;
	padding: 1rem;

`;

const Labels = styled.label`
	display: flex;
	flex-direction: column;
	gap: 4px;
	color: #333;
	font-size: 1.2em;
	font-weight: bold;

	input {
		width: 380px;
		margin-bottom: 10px;
		border: solid 1px #333;
    border-radius: 5px;
    padding: 6px;
	}
`;

const Button = styled.button`
	width: 100px;
	margin-top: 10px;
	padding: 8px;
	color: #fefefe;
	font-size: 1em;
	font-weight: bold;
	border: none;
	border-radius: 25px;
	background: #5686CD;
`;