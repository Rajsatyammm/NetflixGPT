import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NOW_PLAYING_MOVIES, TMDB_API_OPTIONS } from "../utils/constants"
import { addNowPlayingMovies } from "../store/movieSlice"

export default function useNowPlayingMovies() {

    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)
    
    useEffect(() => {
        const getNowPlayingMovies = async () => {
            const data = await fetch(
                NOW_PLAYING_MOVIES,
                TMDB_API_OPTIONS)
            const json = await data.json()
            dispatch(addNowPlayingMovies(json.results))
        }

        !nowPlayingMovies && getNowPlayingMovies()

    }, [dispatch, nowPlayingMovies])
}
