// import React from 'react'

import { useSelector } from "react-redux"
import MovieList from "./secondaryVideoContainer/MovieList"

function SecondaryVideoContainer() {

	const movies = useSelector(store => store.movies)

	if (!movies) return

	return (
		<div className="flex flex-col bg-black text-white">
			<MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
			<MovieList title={"UpComing Movies"} movies={movies?.upcomingMovies} />
			<MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
			<MovieList title={"Popular"} movies={movies?.popularMovies} />
		</div>
	)
}

export default SecondaryVideoContainer