import { useEffect } from "react"
import { TMDB_API_OPTIONS, TOP_RATED_MOVIES } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../store/movieSlice"

const useTopRatedMovies = () => {

    const dispatch = useDispatch()
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies)
    
    useEffect(() => {
        const getTopRatedMovies = async () => {
            const response = await fetch(
                TOP_RATED_MOVIES,
                TMDB_API_OPTIONS
            )

            const json = await response.json()
            dispatch(addTopRatedMovies(json.results))
        }

        !topRatedMovies && getTopRatedMovies()
    }, [dispatch, topRatedMovies])
}

export default useTopRatedMovies