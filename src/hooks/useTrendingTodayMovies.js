import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TMDB_API_OPTIONS, TRENDING_TODAY_MOVIES } from "../utils/constants"
import { addTrendingTodayMovies } from "../store/movieSlice"

export default function useTrendingToday() {

    const dispatch = useDispatch()
    const trendingToday = useSelector(store => store.movies.trendingToday)
    
    useEffect(() => {
        const getTrendingMovies = async () => {
            const data = await fetch(
                TRENDING_TODAY_MOVIES,
                TMDB_API_OPTIONS)
            const json = await data.json()
            dispatch(addTrendingTodayMovies(json.results))
        }

        !trendingToday && getTrendingMovies()

    }, [dispatch, trendingToday])
}
