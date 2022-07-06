import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from "./firebase";
import styled from "styled-components";

type AccountData = {
	username: string;
	email: string;
	password: string;
}

const initialData: AccountData = {
	username: '',
	email: '',
	password: '',
}

export const SignUp = () => {
	const auth = getAuth(app);
	const [ data, setData ] = useState<AccountData>(initialData);
	const navigate = useNavigate();

	const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
    setData((prev) => ({ ...prev, username: value }));
	}

	const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
    setData((prev) => ({ ...prev, email: value }));
	}
	const onChangePw = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
    setData((prev) => ({ ...prev, password: value }));
	}

	const SignUp = async () => {
		await createUserWithEmailAndPassword(auth, data.email, data.password)
			.then(result => {
				navigate("/");
			})
			.catch(() => {
				alert("登録に失敗しました...");
			});
	}


	return(
		<>
			<SignUpPage>
				<SignUpFormCard>
					<h2>SignUp</h2>
					<Labels>
						ユーザー名
						<input type="text" name="userName" value={data.username} onChange={onChangeName} />
					</Labels>
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