// import { useSelector } from "react-redux"
import { useNowPlayingMovies, useTopRatedMovies, usePopularMovies, useUpcomingMovies } from "../hooks"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"


function Browse() {

	useNowPlayingMovies()
	usePopularMovies()
	useTopRatedMovies()
	useUpcomingMovies()

	return (
		<div className="h-auto">
			<Header />
			<MainContainer />
			<SecondaryContainer />

		</div>
	)
}

export default Browse