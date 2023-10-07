import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { POPULAR_MOVIES, TMDB_API_OPTIONS } from "../utils/constants"
import { addPopularMovies } from "../store/movieSlice"

export default function usePopularMovies() {

    const dispatch = useDispatch()

    useEffect(() => {
        const getPopularMovies = async () => {
            const data = await fetch(
                POPULAR_MOVIES,
                TMDB_API_OPTIONS)
            const json = await data.json()
            dispatch(addPopularMovies(json.results))
        }

        getPopularMovies()

    }, [dispatch])
}
