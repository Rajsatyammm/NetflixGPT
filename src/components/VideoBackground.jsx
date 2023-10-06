import { useSelector } from "react-redux"
import { YOUTUBE_SEARCH_VIDEO_URL } from '../utils/constants'
import useMovieTrailer from "../hooks/useMovieTrailer"

// eslint-disable-next-line react/prop-types
function VideoBackground({ movieId }) {

	// custom hook
	useMovieTrailer(movieId)

	// subscribing to the store
	const trailerVideo = useSelector(store => store.movies?.trailerVideo)

	// early return 
	if (!trailerVideo) return

	return (
		<div className="w-screen">
			<iframe
				className="w-screen aspect-video"
				src={`${YOUTUBE_SEARCH_VIDEO_URL}${trailerVideo.key}?&autoplay=1&mute=1&loop=1&controls=0&showinfo=0`}
				title="YouTube video player"

			>
			</iframe>
		</div>
	)
}

export default VideoBackground