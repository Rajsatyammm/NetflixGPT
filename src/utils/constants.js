export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const NETFLIX_BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const TMDB_API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_TMDB_API_KEY
    }
}

export const YOUTUBE_SEARCH_VIDEO_URL = "https://www.youtube.com/embed/"

export const TMDB_CDN_IMG = "https://image.tmdb.org/t/p/original/"

export const NOW_PLAYING_MOVIES = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"

export const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"

export const TOP_RATED_MOVIES = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"

export const UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"

export const TRENDING_TODAY_MOVIES = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"

export const TRENDING_THIS_WEEK_MOVIES = "https://api.themoviedb.org/3/trending/movie/week?language=en-US"