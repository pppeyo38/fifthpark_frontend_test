import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import styled from "styled-components";

type AccountData = {
	email: string;
	password: string;
}

const initialData: AccountData = {
	email: '',
	password: '',
}

export const SignUp = () => {
	const [ data, setData ] = useState<AccountData>(initialData);
	const navigate = useNavigate();

	const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
    setData((prev) => ({ ...prev, email: value }));
	}
	const onChangePw = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
    setData((prev) => ({ ...prev, password: value }));
	}

	const SignUp = async () => {
		await createUserWithEmailAndPassword(auth, data.email, data.password);
		console.log("登録しました");
		navigate("/");
	}


	return(
		<>
			<SignUpPage>
				<SignUpFormCard>
					<h2>SignUp</h2>
					<Labels>
						Eメール
						<input type="text" name="email" value={data.email} onChange={onChangeEmail} />
					</Labels>
					<Labels>
						パスワード
						<input type="password" name="password" value={data.password} onChange={onChangePw} />
					</Labels>
					<ButtonsWrap>
						<Button type="submit" onClick={SignUp}>SignUp</Button>
						<Link to="/signin">SignIn</Link>
					</ButtonsWrap>
				</SignUpFormCard>
			</SignUpPage>
		</>
	)
}

const SignUpPage =styled.section`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SignUpFormCard = styled.div`
	margin: 0 0 1rem 0;
	padding: 2rem;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125);

	h2 {
		color: #333;
		font-size: 1.5em;
		margin-bottom: 12px;
	}
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

const ButtonsWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 10px;

	a {
		margin-left: 15px;
		color: #5686CD;
		font-weight: bold;
		text-decoration: none;
	}
`;

const Button = styled.button`
	width: 100px;
	padding: 8px;
	color: #fefefe;
	font-size: 1em;
	font-weight: bold;
	border: none;
	border-radius: 25px;
	background: #5686CD;
`;