import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Header() {

    const navigate = useNavigate()

    const isLoggedIn = useSelector(store => store.auth.isLoggedIn)

    async function handleSignOut() {
        try {
            await signOut(auth)
            console.log("SignOut Success")
            navigate('/')
        } catch (e) {
            console.log("Error occured while signout")
        }
    }

    return (
        <div className="absolute flex justify-between px-8 py-2 bg-gradient-to-b from-black w-screen z-10">
            <div>
                <img
                    className="w-44"
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="netflixLogo" />
            </div>

            {
                isLoggedIn &&
                <div className="flex py-2">
                    <p
                        className="font-bold text-xl text-red-600 cursor-pointer"
                        onClick={handleSignOut} >
                        Sign Out</p>
                </div>
            }
        </div>
    )
}

export default Header