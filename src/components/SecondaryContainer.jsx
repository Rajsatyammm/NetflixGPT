// import React from 'react'

import { useSelector } from "react-redux"
import MovieList from "./MovieList"

function SecondaryContainer() {

	const movies = useSelector(store => store.movies)

	if (!movies) return

	return (
		<div className="flex flex-col">
			<MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
		</div>
	)
}

export default SecondaryContainer