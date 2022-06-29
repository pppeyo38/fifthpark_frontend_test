import { memo, ReactNode, FC, useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

type Props = {
  path: string;
	element: ReactNode
};

export const PrivateRoute: FC<Props> = memo((props) => {
  const { path, element } = props;
	const {currentUser} = useContext(AuthContext);

  return currentUser ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/signin" />
  );
});