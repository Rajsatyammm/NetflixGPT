import { useEffect } from "react"
import { addCurrMovieDetails, addCurrMovieTrailer } from "../store/movieSlice"
import { useDispatch } from "react-redux"
import { TMDB_API_OPTIONS } from "../utils/constants"

const useFetchMovieDetailsByID = async (id) => {

	const dispatch = useDispatch()

	useEffect(() => {

		const fetchMovieDetailsByID = async () => {

			// fetch data 
			const response = await
				fetch('https://api.themoviedb.org/3/movie/' + id,
					TMDB_API_OPTIONS)

			// response to json conversion
			const json = await response.json()
			
			// store the data to store
			dispatch(addCurrMovieDetails(json))

			// fetching movie trailer
			const res = await fetch(
				"https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
				TMDB_API_OPTIONS
			)

			// extract results from response.json()
			const { results } = await res.json()

			// extract all trailer videos
			const allTrailerVideos = results?.filter((movie) => movie?.type === "Trailer")

			// get first trailer of the movie
			const trailerVideo = allTrailerVideos[0]

			// set the first trailer video to store
			dispatch(addCurrMovieTrailer(trailerVideo))

		}

		fetchMovieDetailsByID()

	}, [id, dispatch])
}

export default useFetchMovieDetailsByID