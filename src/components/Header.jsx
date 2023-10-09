import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
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

    const [smallDevice, setSmallDevice] = useState(false);

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
            // console.log("SignOut Success")
        } catch (e) {
            // console.log("Error occured while signout")
        }
    }

    const handleGptClick = () => {
        setSmallDevice(false)
        dispatch(toggleClick())
    }

    const handleLanguageChange = (e) => {
        // console.log(e.target.value)
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div className="z-40">
            {/* for large devices */}
            <div className="hidden md:visible absolute md:flex flex-col md:flex-row md:justify-between py-2 h-20 bg-black w-screen z-20">

                {/* Netflix Logo */}
                <div className="">
                    <img className="w-28 md:w-44 cursor-pointer"
                        src={NETFLIX_LOGO}
                        onClick={() => dispatch(setGptTabFalse())}
                        alt="netflixLogo" />
                </div>

                {/* right button */}
                <div className="flex justify-end md:items-center gap-3">

                    <select onChange={handleLanguageChange}
                        className="h-auto p-1 w-20 md:w-24 md:h-8 md:m-2 md:px-2 rounded-md bg-red-600 text-white cursor-pointer">
                        {
                            SUPPORTED_LANGUAGE.map((lang) => (
                                <option className="text-sm" key={lang.id} value={lang.langId}>
                                    {lang.name}
                                </option>
                            ))
                        }
                    </select>

                    {
                        isLoggedIn &&
                        <div className="flex py-2 items-center gap-6">
                            <button className="text-white bg-red-600 p-1 px-2 rounded-lg hover:opacity-90 text-xs md:text-md w-20 h-8 md:w-auto" onClick={handleGptClick}>
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


            {/* for small devices */}
            <div className="md:hidden relative bg-black">
                <div className="flex justify-between ">
                    <img className="w-28 md:w-44 cursor-pointer"
                        src={NETFLIX_LOGO}
                        onClick={() => dispatch(setGptTabFalse())}
                        alt="netflixLogo" />

                    <div className="flex gap-3 items-center">
                        <select onChange={handleLanguageChange}
                            className="h-8 p-1 w-20 md:w-24 md:h-8 md:m-2 md:px-2 rounded-md bg-red-600 text-white ">
                            {
                                SUPPORTED_LANGUAGE.map((lang) => (
                                    <option className="text-sm" key={lang.id} value={lang.langId}>
                                        {lang.name}
                                    </option>
                                ))
                            }
                        </select>
                        {
                            isLoggedIn &&
                            <img className="rounded-full bg-white w-10 mx-2" onClick={() => setSmallDevice(!smallDevice)} src={userItems?.photoURL} alt="profilePic" />
                        }

                    </div>
                </div>

                {
                    smallDevice &&
                    <div className="flex absolute w-screen h-14  bg-black bg-opacity-90 z-50">
                        <div className="flex flex-row-reverse mx-2 w-full gap-3">
                            {
                                isLoggedIn &&
                                <div className="flex py-2 items-center gap-6">
                                    <button className="text-white bg-red-600 p-1 px-2 rounded-lg hover:opacity-90 text-xs md:text-md w-20 h-8 md:w-auto" onClick={handleGptClick}>
                                        {
                                            isGPTTabOpen
                                                ? lang[currentLanguage].homePageButton
                                                : lang[currentLanguage].gptSearchButton
                                        }
                                    </button>

                                    <p
                                        className="md:font-bold text-md md:text-xl text-white p-1 rounded-md bg-red-600 cursor-pointer"
                                        onClick={handleSignOut} >
                                        {lang[currentLanguage].signOutButton}
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>


    )
}

export default Header