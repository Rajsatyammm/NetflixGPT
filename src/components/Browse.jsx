// import { useSelector } from "react-redux"
import { useNowPlayingMovies } from "../hooks"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"


function Browse() {

	useNowPlayingMovies()

	return (
		<div className="h-auto">
			<Header />
			<MainContainer />
			<SecondaryContainer />

		</div>
	)
}

export default Browse