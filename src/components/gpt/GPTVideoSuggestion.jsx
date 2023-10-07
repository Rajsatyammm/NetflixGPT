import { useSelector } from "react-redux"
import MovieList from "../secondaryVideoContainer/MovieList"

const GPTVideoSuggestion = () => {

    const GPTQueryMoviesDetail = useSelector(store => store.gpt.movieDetails)
    // const GPTQueryMoviesName = useSelector(store => store.gpt.movieDetails)

    if (!GPTQueryMoviesDetail) return

    return (
        <div className="mt-10 text-white">
            {
                GPTQueryMoviesDetail
                    .map(movie => (
                        <MovieList
                            key={movie[0]?.id}
                            title={movie[0]?.title}
                            movies={movie} />
                    ))
            }

        </div>
    )
}

export default GPTVideoSuggestion