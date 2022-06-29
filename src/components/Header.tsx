import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import styled from "styled-components";

export const Header = () => {
	const {currentUser} = useContext(AuthContext)

	return (
		<HeaderWrap>
			<HeaderTitle>Fifth-park</HeaderTitle>
			<UserIcon>{currentUser?.email}</UserIcon>
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

const UserIcon = styled.h3`
	margin: 0;
	color: #333;
	font-size: 1rem;
`;