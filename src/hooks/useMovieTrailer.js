import { useEffect } from "react"
import { TMDB_API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addTrailerVideo } from '../store/movieSlice'


const useMovieTrailer = (movieId) => {
    
    const dispatch = useDispatch()
    const trailerVideo = useSelector(store => store.movies.trailerVideo)

    useEffect(() => {

        const getMovieVideo = async () => {
            
            // fetch video data on the basis of movie ID from TMDB API
            const response = await fetch(
                "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
                TMDB_API_OPTIONS
            )

            const data = await response.json()
            // console.log("movieId", data)

            // filter the data based on type === Trailer
            const filterData = data.results.filter((video) => video.type === "Trailer")

            // handling the case where no any trailer video is found
            const trailer = filterData.length != 0 ? filterData[0] : data.results[0];

            // setting the trailer video
            dispatch(addTrailerVideo(trailer))

            // console.log(filterData[0])
        }

        !trailerVideo && getMovieVideo()

    }, [dispatch, movieId, trailerVideo])
}

export default useMovieTrailer