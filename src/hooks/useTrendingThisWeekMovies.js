import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TMDB_API_OPTIONS, TRENDING_THIS_WEEK_MOVIES } from "../utils/constants"
import { addTrendingThisWeekMovies } from "../store/movieSlice"

export default function useTrendingThisWeekMovies() {

    const dispatch = useDispatch()
    const trendingThisWeek = useSelector(store => store.movies.trendingThisWeek)
    
    useEffect(() => {
        const getTrendingMovies = async () => {
            const data = await fetch(
                TRENDING_THIS_WEEK_MOVIES,
                TMDB_API_OPTIONS)
            const json = await data.json()
            dispatch(addTrendingThisWeekMovies(json.results))
        }

        !trendingThisWeek && getTrendingMovies()

    }, [dispatch, trendingThisWeek])
}
