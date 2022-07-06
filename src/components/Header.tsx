import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "../firebase";
import { AuthContext } from "../providers/AuthProvider";
import styled from "styled-components";

export const Header = () => {
	const auth = getAuth(app);
	const {currentUser} = useContext(AuthContext);
	const navigate = useNavigate();

	const logout = () => {
		auth.signOut();
		navigate("/signin");
	}

	console.log(currentUser);

	return (
		<HeaderWrap>
			<HeaderTitle>Fifth-park</HeaderTitle>
			<UserWrap>
				<UserEmail>{currentUser?.email}</UserEmail>
				<p onClick={logout}>ログアウト</p>
			</UserWrap>
		</HeaderWrap>
	)
}

const HeaderWrap = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.5rem 2.8rem;
	margin-bottom: 50px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125);
`;

const HeaderTitle = styled.h1`
	margin: 0;
	color: #00A8A6;
	font-size: 2em;
`;

const UserWrap = styled.div`
	p {
		margin: 0;
		text-align: end;
		font-size: 0.8rem;
		color: #aaa;
	}
`;

const UserEmail = styled.h3`
	margin: 0;
	color: #333;
	font-size: 1rem;
`;