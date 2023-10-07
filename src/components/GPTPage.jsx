import { NETFLIX_BG_IMAGE } from "../utils/constants"
import GPTSearchBar from "./gpt/GPTSearchBar"
import GPTVideoSuggestion from "./gpt/GPTVideoSuggestion"

const GPTPage = () => {
  return (
    <div className='w-screen h-full relative text-white bg-black bg-opacity-80'>
      <div className="absolute mt-28">

        <GPTSearchBar />
        <GPTVideoSuggestion />

      </div>
      <div className="fixed -z-10">
          <img src={NETFLIX_BG_IMAGE} alt="BG-image" />
      </div>
    </div>
  )
}

export default GPTPage