import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { setLogin, setLogout } from "../store/authSlice"
import { addUser, removeUser } from "../store/userSlice"
import { NETFLIX_LOGO } from "../utils"

function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLoggedIn = useSelector(store => store.auth.isLoggedIn)
    const userItems = useSelector(store => store.user.items)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // signed in
                const { uid, email, displayName } = user
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                dispatch(setLogin())
                navigate('/browse')
            } else {
                // signed out
                dispatch(removeUser())
                dispatch(setLogout())
                navigate('/')
            }
        })

        return () => {
            unsubscribe()
        }


    }, [dispatch, navigate])

    // Signout
    async function handleSignOut() {
        try {
            await signOut(auth)
            console.log("SignOut Success")
        } catch (e) {
            console.log("Error occured while signout")
        }
    }

    return (
        <div className="absolute flex justify-between px-8 py-2 bg-gradient-to-b from-black w-screen z-50">
            <div>
                <img
                    className="w-44"
                    src={NETFLIX_LOGO}
                    alt="netflixLogo" />
            </div>

            {
                isLoggedIn &&
                <div className="flex py-2">
                    <img src={userItems?.photoURL} alt="profilePic" />
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