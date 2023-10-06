import { useState, useRef } from "react"
import Header from "./Header"
import { validate } from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from "react-redux"
import { addUser } from "../store/userSlice"
import { NETFLIX_BG_IMAGE } from "../utils/constants"

function Login() {

	const [isSignInForm, setIsSignInFrom] = useState(true)
	const [errorMessage, setErrorMessage] = useState(null)

	const name = useRef(null)
	const email = useRef(null)
	const password = useRef(null)
	const dispatch = useDispatch()

	function changeHandler() {
		setIsSignInFrom(!isSignInForm)
	}

	// Creating User (SignUp)
	async function createUser(auth, email, password) {
		try {
			const response = await createUserWithEmailAndPassword(auth, email, password)
			const user = response.user

			await updateProfile(user, {
				displayName: name.current.value,
				photoURL: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
			})

			const { uid, email, displayName, photoURL } = auth.currentUser
			dispatch(addUser({
				uid: uid, email: email,
				displayName: displayName, photoURL: photoURL
			}))

		} catch (e) {
			console.log(e.message)
			setErrorMessage(e.code + e.message)
		}

	}

	// Sign Up User
	async function signInUser(auth, email, password) {
		try {
			const response = await signInWithEmailAndPassword(auth, email, password);
			const user = response.user;
			console.log(user)
		} catch (e) {
			setErrorMessage(e.code + " - " + e.message)
		}
	}


	function submitFormHandler() {
		const message = validate(email.current.value, password.current.value)
		setErrorMessage(message)

		if (message || !email.current.value || !password.current.value) return

		// sign in sign up logic
		if (!isSignInForm) {
			// Sign Up logic
			createUser(auth, email.current.value, password.current.value)
		}

		else {
			// Sign in logic
			signInUser(auth, email.current.value, password.current.value)
		}
	}


	return (
		<div>
			<Header />

			<div className="absolute">
				<img
					className="object-cover"
					src={NETFLIX_BG_IMAGE}
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
						ref={name}
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
					className="w-full mb-5 cursor-pointer"
					onClick={changeHandler}>
					{isSignInForm ? `New to Netflix? Sign up now` : `Already registered? Sign In now`}
				</div>

			</form>

		</div>
	)
}

export default Login