import { useEffect } from "react"
import { TMDB_API_OPTIONS, UPCOMING_MOVIES } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../store/movieSlice"

const useUpcomingMovies = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getUpcomingMovies = async () => {
            const response = await fetch(
                UPCOMING_MOVIES,
                TMDB_API_OPTIONS
            )

            const json = await response.json()
            dispatch(addUpcomingMovies(json.results))
        }

        getUpcomingMovies()
    }, [dispatch])
}

export default useUpcomingMovies