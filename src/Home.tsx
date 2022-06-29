import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Posts } from "./components/Posts";
import { Navigate } from "react-router-dom";

export const Home = () => {
  const {currentUser} = useContext(AuthContext);

  // ログインユーザーがいる場合のみHomeにアクセス
  return (
    <>
      {currentUser ? (
        <>
          <Header />
          <Form />
          <Posts />
        </>
      ) : (
        <Navigate to="/signin" />
      )}
    </>
  );
};