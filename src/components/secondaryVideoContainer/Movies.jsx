// import React from 'react'

import { TMDB_CDN_IMG } from "../../utils/constants"

// eslint-disable-next-line react/prop-types
const Movies = ({ imgUrl }) => {
    if(!imgUrl) return 
    return (
        <div className="w-32 md:w-40 h-52">
            {/* <p className="absolute text-sm">{title}</p> */}
            <div>
                <img className="w-32 md:w-full md:h-52" 
                src={TMDB_CDN_IMG + imgUrl} alt="img" />
            </div>
        </div>
    )
}

export default Movies