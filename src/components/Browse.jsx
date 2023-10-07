// import { useSelector } from "react-redux"
import { useSelector } from "react-redux"
import { useNowPlayingMovies, useTopRatedMovies, usePopularMovies, useUpcomingMovies } from "../hooks"
import GPTPage from "./GPTPage"
import Header from "./Header"
import MainVideoContainer from "./MainVideoContainer"
import SecondaryVideoContainer from "./SecondaryVideoContainer"
// import { useMemo } from "react"


function Browse() {

	const isGPTTabOpen = useSelector(store => store.gpt.isGPTtab)

	useNowPlayingMovies()
	usePopularMovies()
	useTopRatedMovies()
	useUpcomingMovies()

	return (
		<div className="h-auto">
			<Header />
			{
				!isGPTTabOpen
					? <div>
						<MainVideoContainer />
						<SecondaryVideoContainer />
					</div>
					: <GPTPage />
			}


		</div>
	)
}

export default Browse