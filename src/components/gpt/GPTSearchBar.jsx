import { useSelector } from "react-redux"
import lang from "../../utils/languageConstants"

const GPTSearchBar = () => {

    const currentLanguage = useSelector(store => store.config.currLanguage)
    return (
        <div className="flex flex-col w-screen">
            <form className="flex gap-4 w-screen justify-center">
                <input
                    name="searchbutton"
                    className="border-red-600 border-2 p-4 w-1/2 h-12 rounded-xl bg-[#333] text-white"
                    type="text"
                    placeholder={lang[currentLanguage].inputBoxPlaceholder}
                />
                <p className="p-3 bg-red-600 w-auto h-12 rounded-xl font-bold cursor-pointer">
                    {lang[currentLanguage].searchButton}
                </p>
            </form>

        </div>
    )
}

export default GPTSearchBar