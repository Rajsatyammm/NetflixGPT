import { useState, useRef } from "react"
import Header from "./Header"
import { validate } from "../utils/validate"

function Login() {

	const [isSignInForm, setIsSignInFrom] = useState(true)
	const [errorMessage, setErrorMessage] = useState(null)

	const email = useRef(null)
	const password = useRef(null)

	function changeHandler() {
		setIsSignInFrom(!isSignInForm)
	}

	function submitFormHandler() {
		const result = validate(email?.current?.value, password?.current?.value)
		setErrorMessage(result)
	}

	return (
		<div>
			<Header />

			<div className="absolute">
				<img
					className="object-cover"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="background-img" />
			</div>

			<form
				onSubmit={(e) => e.preventDefault()}
				className="absolute flex flex-col bg-black w-5/12 h-auto px-14 gap-4 mx-auto right-0 left-0 my-36 text-white bg-opacity-80 rounded-md">
				<h1 className="text-3xl font-bold mt-8">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>

				{
					!isSignInForm &&
					<input
						type="text"
						placeholder="Full Name"
						className="p-2 mt-2 w-full rounded-md bg-[#333]"
					/>
				}

				<input
					type="text"
					ref={email}
					placeholder="Email Address"
					className="p-2 mt-2 w-full rounded-md bg-[#333]"
				/>

				<input
					type="password"
					ref={password}
					placeholder="Password"
					className="mt-2 p-2 w-full rounded-md bg-[#333]"
				/>

				<p className="text-red-600 font-bold">{errorMessage}</p>

				<button
					className="p-4 mt-4 bg-red-600 w-full rounded-md"
					onClick={submitFormHandler}>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>

				<div
					className="w-full mb-5"
					onClick={changeHandler}>
					{isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign In now"}
				</div>

			</form>

		</div>
	)
}

export default Login