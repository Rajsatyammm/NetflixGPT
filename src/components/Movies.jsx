// import React from 'react'

import { TMDB_CDN_IMG } from "../utils/constants"

// eslint-disable-next-line react/prop-types
const Movies = ({ imgUrl }) => {

    return (
        <div className="w-40 h-40">
            {/* <p className="absolute text-sm">{title}</p> */}
            <div>
                <img className="w-full h-full" src={TMDB_CDN_IMG + imgUrl} alt="img" />
            </div>
        </div>
    )
}

export default Movies