import { useParams } from "react-router-dom"
import { NETFLIX_BG_IMAGE, TMDB_CDN_IMG, YOUTUBE_SEARCH_VIDEO_URL } from "../utils/constants"
import { useSelector } from "react-redux"
import Shimmer from "./Shimmer"
import useFetchMovieDetailsByID from "../hooks/useFetchMovieDetailsByID"
import MovieList from "./secondaryVideoContainer/MovieList"
// import Header from "./Header"


function MovieDetails() {

	const currMovieDetails = useSelector(store => store.movies.currMovieDetails)
	const currMovieTrailer = useSelector(store => store.movies.currMovieTrailer)
	const currRecommendedMovies = useSelector(store => store.movies.recommendedMovies)

	const { id } = useParams()

	useFetchMovieDetailsByID(id)

	if (!currMovieDetails) return <Shimmer />

	return (
		<div className="flex flex-col md:text-white text-black w-screen md:h-screen gap-3">
			<div>
				{/* <Header /> */}
			</div>

			{/* Background video fixed */}
			{
				currMovieTrailer ? (
					<div className="w-screen md:h-screen absolute md:fixed -z-10">
						<iframe
							className="w-full h-60 md:h-auto md:aspect-video"
							src={YOUTUBE_SEARCH_VIDEO_URL + currMovieTrailer.key +
								'?&autoplay=1&mute=1&loop=1&controls=1&showinfo=0'}
							title="YouTube video player"

						>
						</iframe>
					</div>
				)
					: (
						<div className="w-screen h-screen fixed -z-10 ">
							<div className="absolute top-20 left-20">
								<p className="font-bold text-white text-4xl">Trailer Not Available</p>
							</div>
							<img
								className="w-full h-screen object-cover"
								alt="netflixbg"
								src={NETFLIX_BG_IMAGE}
							>
							</img>
						</div>
					)
			}

			<div className="flex flex-col md:flex-row gap-4 p-5 md:h-screen">
				<div className="w-full md:w-1/2 flex flex-col">
					<p className="text-2xl md:text-4xl font-bold mt-2 pt-52 md:pt-20 mb-5">
						{currMovieDetails?.original_title}
					</p>
					{/* <p className="text-md">{currMovieDetails?.overview}</p> */}
					<img className="md:w-40 w-32 rounded-md md:mb-14"
						src={TMDB_CDN_IMG + currMovieDetails.poster_path}
						alt="movieimg" />
				</div>
			</div>

			<div className="md:mt-10">
				{
					currRecommendedMovies &&
					<MovieList title={"Recommended Movies"} movies={currRecommendedMovies} />
				}
			</div>

		</div>

	)
}

export default MovieDetails

