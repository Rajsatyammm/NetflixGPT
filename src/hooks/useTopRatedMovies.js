import { useEffect } from "react"
import { TMDB_API_OPTIONS, TOP_RATED_MOVIES } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../store/movieSlice"

const useTopRatedMovies = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getTopRatedMovies = async () => {
            const response = await fetch(
                TOP_RATED_MOVIES,
                TMDB_API_OPTIONS
            )

            const json = await response.json()
            dispatch(addTopRatedMovies(json.results))
        }

        getTopRatedMovies()
    }, [dispatch])
}

export default useTopRatedMovies