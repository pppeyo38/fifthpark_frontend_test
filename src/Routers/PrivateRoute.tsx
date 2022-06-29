import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export const PrivateRoute = () => {
	const { currentUser } = useContext(AuthContext);

	return (
		<>
			{currentUser ? (
				<Outlet />
			) : (
				<Navigate to="/signin"/>
			)}
		</>
	)
};