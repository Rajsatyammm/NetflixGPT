import { useParams } from "react-router-dom"
import { TMDB_CDN_IMG, YOUTUBE_SEARCH_VIDEO_URL } from "../utils/constants"
import { useSelector } from "react-redux"
import Shimmer from "./Shimmer"
import useFetchMovieDetailsByID from "../hooks/useFetchMovieDetailsByID"
// import Header from "./Header"


function MovieDetails() {

	const currMovieDetails = useSelector(store => store.movies.currMovieDetails)
	const currMovieTrailer = useSelector(store => store.movies.currMovieTrailer)

	const { id } = useParams()

	useFetchMovieDetailsByID(id)

	if (!currMovieDetails) return <Shimmer />

	return (
		<div className="flex flex-col w-screen h-full md:h-screen text-white bg-black gap-3 p-5 ">

			<div className="">
				{/* <Header /> */}
			</div>

			<div className="flex flex-col md:flex-row gap-4">
				<div className="w-full md:w-1/2 flex flex-col">
					<p className="text-4xl font-bold m-2">{currMovieDetails?.original_title}</p>
					<p className="text-md">{currMovieDetails?.overview}</p>
					<p className="font-bold">Popularity {currMovieDetails?.popularity}</p>
					<img className="w-40"
						src={TMDB_CDN_IMG + currMovieDetails.poster_path}
						alt="movieimg" />
				</div>

				<div className="w-full md:w-1/2">
					<iframe
						className="w-full h-52 md:h-96 rounded-md"
						src={YOUTUBE_SEARCH_VIDEO_URL + currMovieTrailer.key + '?&autoplay=0&mute=1&loop=1&controls=1&showinfo=1'}
						title="YouTube video player"

					>
					</iframe>
				</div>
			</div>

		</div>

	)
}

export default MovieDetails

