import { Routes, Route } from "react-router-dom";
import { Home }from "./Home";
import { SignIn } from "./SignIn";

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/login" element={<SignIn/>}/>
		</Routes>
	)
}