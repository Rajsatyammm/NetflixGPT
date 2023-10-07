import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { POPULAR_MOVIES, TMDB_API_OPTIONS } from "../utils/constants"
import { addPopularMovies } from "../store/movieSlice"

export default function usePopularMovies() {

    const dispatch = useDispatch()
    const popularMovies = useSelector(store => store.movies.popularMovies)
    
    useEffect(() => {
        const getPopularMovies = async () => {
            const data = await fetch(
                POPULAR_MOVIES,
                TMDB_API_OPTIONS)
            const json = await data.json()
            dispatch(addPopularMovies(json.results))
        }

        !popularMovies && getPopularMovies()

    }, [dispatch, popularMovies])
}
