import { useSelector } from "react-redux"
import MovieList from "../secondaryVideoContainer/MovieList"
import Shimmer from "../Shimmer"

const GPTVideoSuggestion = () => {

    const GPTQueryMoviesDetail = useSelector(store => store.gpt.movieDetails)
    // const isGptVideoSuggestion = useSelector(store => store.gpt.isGptVideoSuggestion)
    const isLoading = useSelector(store => store.gpt.isLoading)
    // const GPTQueryMoviesName = useSelector(store => store.gpt.movieDetails)

    // if (!GPTQueryMoviesDetail) return

    return (
        <div className="relative flex flex-col items-center">
            <div className="absolute mt-10 text-white">
                
                <div className="absolute">
                    {
                        isLoading &&
                        <Shimmer />
                    }
                </div>

                {
                    GPTQueryMoviesDetail &&
                    GPTQueryMoviesDetail
                        .map(movie => (
                            <div key={movie[0]?.id} className="bg-black bg-opacity-70">
                                <MovieList
                                    title={movie[0]?.title}
                                    movies={movie} />
                            </div>
                        ))
                }

            </div>




        </div>
    )
}

export default GPTVideoSuggestion