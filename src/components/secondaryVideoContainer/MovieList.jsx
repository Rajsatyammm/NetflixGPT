// import React from 'react'
import Movies from "./Movies"

// eslint-disable-next-line react/prop-types
const MovieList = ({ title, movies }) => {

    if (!movies) return;

    return (
        <div className="h-auto w-screen">
            <p className="m-3 text-3xl font-bold">{title}</p>
            <div className="flex h-72 overflow-x-scroll">
                <div className="flex gap-2">
                    {
                        // eslint-disable-next-line react/prop-types
                        movies.map((movie) => (
                            <Movies
                                key={movie.id}
                                // title={movie?.original_title}
                                imgUrl={movie.poster_path} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList