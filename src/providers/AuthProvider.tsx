import { User, getAuth } from "firebase/auth";
import { createContext, useEffect, useState, FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
	children: ReactNode;
}

// 現在ログインしているユーザーの存在確認、情報
type AuthContextProps = {
  currentUser: User | null | undefined;
  signInCheck: boolean;
};

// 他のコンポーネントからでも参照したいもの
const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  signInCheck: false,
});

const AuthProvider: FC<Props> = ({children}) => {
	const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined);
	const [signInCheck, setSignInCheck] = useState(false);

	// ログイン状態を確認する
  useEffect(() => {
    getAuth().onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
        setSignInCheck(true);
      } else {
        setSignInCheck(true);
      }
    });
  });

	if (signInCheck) {
    return (
      <AuthContext.Provider value={{ currentUser, signInCheck }}>
        {signInCheck && children}
      </AuthContext.Provider>
    );
  } else {
		// ログイン確認中
    return (
      <></>
    );
  }
}

export { AuthContext, AuthProvider };