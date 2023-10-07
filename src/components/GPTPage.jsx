import GPTSearchBar from "./gpt/GPTSearchBar"
import GPTVideoSuggestion from "./gpt/GPTVideoSuggestion"

const GPTPage = () => {
  return (
    <div className='w-screen h-screen relative bg-black text-white'>
      <div className="absolute mt-28 ml-10">
        <GPTSearchBar />
        <GPTVideoSuggestion />

      </div>
    </div>
  )
}

export default GPTPage