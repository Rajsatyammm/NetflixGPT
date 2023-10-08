// import React from 'react'

import { useSelector } from "react-redux"
import VideoTitle from "./mainVideoContainer/VideoTitle"
import VideoBackground from "./mainVideoContainer/VideoBackground"

function MainVideoContainer() {

	// subscribing to the store
	const movies = useSelector(store => store.movies?.nowPlayingMovies)

	if (!movies) return;

	const getRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// random movie for mail trailer video
	const randomIdx = getRandomNumber(0, 5)

	// main movie to show on the browse page 
	const mainMovie = movies[randomIdx]

	// console.log(mainMovie)


	const { original_title, overview, id } = mainMovie

	return (
		<div>
			<VideoTitle
				title={original_title}
				overview={overview} />

			<VideoBackground movieId={id} />
		</div>
	)
}

export default MainVideoContainer