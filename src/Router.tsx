import { Routes, Route } from "react-router-dom";
import { Home }from "./Home";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/signin" element={<SignIn/>}/>
			<Route path="/signup" element={<SignUp/>}/>
		</Routes>
	)
}