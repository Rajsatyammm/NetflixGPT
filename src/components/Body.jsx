import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from '../store/userSlice'
import { setLogin, setLogout } from "../store/authSlice"


function Body() {

    const dispatch = useDispatch()

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        },
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // signed in
                const { uid, email, displayName } = user
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                dispatch(setLogin())
            } else { 
                // signed out
                dispatch(removeUser())
                dispatch(setLogout())
            }
        })
    }, [dispatch])

    return (
        <div>
            <RouterProvider router={appRouter}>
                <Login />
                <Browse />
            </RouterProvider>
        </div>
    )
}

export default Body