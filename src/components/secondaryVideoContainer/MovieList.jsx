// import React from 'react'
import { NavLink } from "react-router-dom";
import Movies from "./Movies"

// eslint-disable-next-line react/prop-types
const MovieList = ({ title, movies }) => {

    if (!movies) return;

    return (
        <div className="h-auto w-screen">
            <p className="mb-3 md:pt-2 text-xl md:text-3xl font-bold">{title}</p>
            <div className="flex md:h-[16.5rem] overflow-x-scroll">
                <div className="flex gap-x-0.5 md:gap-2">
                    {
                        // eslint-disable-next-line react/prop-types
                        movies.map((movie) => (
                            <NavLink to={'/browse/movie/' + movie.id} key={movie.id}>
                                <Movies
                                    // title={movie?.original_title}
                                    imgUrl={movie.poster_path} />
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList