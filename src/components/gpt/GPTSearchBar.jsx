import { useDispatch, useSelector } from "react-redux"
import lang from "../../utils/languageConstants"
import { useRef } from "react"
import openai from "../../utils/openai"
import { TMDB_API_OPTIONS } from "../../utils/constants"
import { addGptMovieData } from "../../store/gptSlice"

const GPTSearchBar = () => {

    const inputText = useRef(null)
    const dispatch = useDispatch()

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            TMDB_API_OPTIONS
        );
        const json = await data.json();

        return json.results;
    };

    const handleClick = async () => {
        console.log(inputText.current.value)

        if (!inputText.current.value) return;

        const queryText =
            "Act as a movie Recommendation system and suggest some movies for the query"
            + inputText.current.value +
            "only give me the names of 5 movies, comma seperated like the example given ahead. Example: Hera Pheri, Don, Krrish, Koi Mil Gaya, Sholay"

        const gptResponseData = await openai.chat.completions.create({
            messages: [{ role: 'user', content: queryText }],
            model: 'gpt-3.5-turbo',
        });

        // movie result array from GPT response data
        const gptMovieNames = gptResponseData?.choices[0]?.message?.content.split(',')

        // returns a promise
        const promiseArray = gptMovieNames.map((movie) => searchMovieTMDB(movie))

        // resolve all the promise
        const movieDetails = await Promise.all(promiseArray)

        console.log("moviename", gptMovieNames)
        console.log("moviedetails", movieDetails[0])

        // dispatch the data
        dispatch(addGptMovieData({ movieNames: gptMovieNames, movieDetails: movieDetails }))

    }

    const currentLanguage = useSelector(store => store.config.currLanguage)
    return (
        <div className="flex flex-col w-screen">
            <form className="flex gap-4 w-screen justify-center">
                <input
                    ref={inputText}
                    name="searchbutton"
                    className="border-red-600 border-2 p-4 w-1/2 h-12 rounded-xl bg-[#333] text-white"
                    type="text"
                    placeholder={lang[currentLanguage].inputBoxPlaceholder}
                />
                <p className="p-3 bg-red-600 w-auto h-12 rounded-xl font-bold cursor-pointer"
                    onClick={handleClick}>
                    {lang[currentLanguage].searchButton}
                </p>
            </form>

        </div>
    )
}

export default GPTSearchBar