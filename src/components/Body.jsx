import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import MovieDetails from "./MovieDetails"
import ErrorRoute from "./ErrorRoute"

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
            path: '/browse/movie/:id',
            element: <MovieDetails />
        },
        {
            path: '*',
            element: <ErrorRoute />
        }
    ])

    // const appRouter = createBrowserRouter([
    //     {
    //         path: '/',
    //         element: <Login />
    //     },
    //     {
    //         path: '/browse',
    //         element: <Browse />,
    //         children: [
    //             {
    //                 path: 'movie/:id',
    //                 element: <MovieDetails />
    //             }
    //         ]
    //     },
    // ])

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