import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { setLogin, setLogout } from "../store/authSlice"
import { addUser, removeUser } from "../store/userSlice"
import { NETFLIX_LOGO } from "../utils"
import { setGptTabFalse, toggleClick } from "../store/gptSlice"
import lang, { SUPPORTED_LANGUAGE } from "../utils/languageConstants"
import { changeLanguage } from "../store/configSlice"

function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLoggedIn = useSelector(store => store.auth.isLoggedIn)
    const userItems = useSelector(store => store.user.items)
    const isGPTTabOpen = useSelector(store => store.gpt.isGPTtab)
    const currentLanguage = useSelector(store => store.config.currLanguage)

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

    const handleGptClick = () => {
        dispatch(toggleClick())
    }

    const handleLanguageChange = (e) => {
        // console.log(e.target.value)
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div className="absolute flex justify-between px-8 py-2 bg-gradient-to-b h-20 from-black w-screen z-50">
            <div>
                <img className="w-44 cursor-pointer"
                    src={NETFLIX_LOGO}
                    onClick={() => dispatch(setGptTabFalse())}
                    alt="netflixLogo" />
            </div>

            <div className="flex items-center gap-3">

                <select onChange={handleLanguageChange} className="m-2 p-1 px-2 rounded-md bg-red-600 text-white ">
                    {
                        SUPPORTED_LANGUAGE.map((lang) => (
                            <option className="" key={lang.id} value={lang.langId}>
                                {lang.name}
                            </option>
                        ))
                    }
                </select>

                {
                    isLoggedIn &&
                    <div className="flex py-2 items-center gap-6">
                        <button className="text-white bg-red-600 p-1 px-2 rounded-lg hover:opacity-90" onClick={handleGptClick}>
                            {
                                isGPTTabOpen
                                    ? lang[currentLanguage].homePageButton
                                    : lang[currentLanguage].gptSearchButton
                            }
                        </button>
                        <img src={userItems?.photoURL} alt="profilePic" />
                        <p
                            className="font-bold text-xl text-red-600 cursor-pointer"
                            onClick={handleSignOut} >
                            {lang[currentLanguage].signOutButton}
                        </p>
                    </div>
                }
            </div>


        </div>
    )
}

export default Header