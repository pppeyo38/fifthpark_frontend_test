import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Posts } from "./components/Posts";

import { AuthProvider } from "./providers/AuthProvider";

export const Home = () => {
  return (
    <>
    <AuthProvider>
      <Header />
      <Form />
      <Posts />
    </AuthProvider>
    </>
  );
};