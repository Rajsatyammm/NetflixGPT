import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import MovieDetails from "./MovieDetails"

function Body() {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />,
        },
        {
            path: '/movie/:id',
            element: <MovieDetails />
        }
    ])

    return (
        <div>
            <RouterProvider router={appRouter}>
                <Login />
                <Outlet />
            </RouterProvider>
        </div>
    )
}

export default Body