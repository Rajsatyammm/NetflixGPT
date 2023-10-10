// import { useSelector } from "react-redux"
import { useSelector } from "react-redux"
import { useNowPlayingMovies, useTopRatedMovies, usePopularMovies, useUpcomingMovies } from "../hooks"
import GPTPage from "./GPTPage"
import Header from "./Header"
import MainVideoContainer from "./MainVideoContainer"
import SecondaryVideoContainer from "./SecondaryVideoContainer"
import useTrendingToday from "../hooks/useTrendingTodayMovies"
import useTrendingThisWeekMovies from "../hooks/useTrendingThisWeekMovies"
// import { useMemo } from "react"


function Browse() {

	const isGPTTabOpen = useSelector(store => store.gpt.isGPTtab)

	useNowPlayingMovies()
	usePopularMovies()
	useTopRatedMovies()
	useUpcomingMovies()
	useTrendingToday()
	useTrendingThisWeekMovies()

	return (
		<div className="max-w-screen w-screen">
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