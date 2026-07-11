/* ===========================================
   KIVUSTREAM PRO
   TMDB API SERVICE
=========================================== */


import { CONFIG } 
from "../config.js";





/* ===========================================
   BASIC REQUEST FUNCTION
=========================================== */


async function tmdbRequest(endpoint){


    try{


        const response = await fetch(


            `${CONFIG.TMDB_BASE_URL}${endpoint}?api_key=${CONFIG.TMDB_API_KEY}`


        );



        if(!response.ok){


            throw new Error(

                "TMDB Request Failed"

            );


        }



        return await response.json();



    }


    catch(error){


        console.error(

            "TMDB ERROR:",

            error

        );



        return null;


    }


}







/* ===========================================
   POPULAR MOVIES
=========================================== */


export async function getPopularMovies(){


    return await tmdbRequest(

        "/movie/popular"

    );


}







/* ===========================================
   NOW PLAYING
=========================================== */


export async function getNowPlaying(){


    return await tmdbRequest(

        "/movie/now_playing"

    );


}






/* ===========================================
   TOP RATED
=========================================== */


export async function getTopRated(){


    return await tmdbRequest(

        "/movie/top_rated"

    );


}






/* ===========================================
   TRENDING
=========================================== */


export async function getTrending(){


    return await tmdbRequest(

        "/trending/movie/week"

    );


}







/* ===========================================
   MOVIE DETAILS
=========================================== */


export async function getMovieDetails(

    movieId

){


    return await tmdbRequest(

        `/movie/${movieId}&append_to_response=videos,credits`

    );


}







/* ===========================================
   SEARCH MOVIE
=========================================== */


export async function searchMovies(

    query

){



    try{


        const response = await fetch(


        `${CONFIG.TMDB_BASE_URL}/search/movie?api_key=${CONFIG.TMDB_API_KEY}&query=${encodeURIComponent(query)}`


        );



        return await response.json();



    }



    catch(error){


        console.error(

            "SEARCH ERROR:",

            error

        );


        return null;


    }



}







/* ===========================================
   IMAGE HELPERS
=========================================== */


export function getPoster(

    path

){


    if(!path)

        return "";



    return (

        CONFIG.TMDB_IMAGE.poster

        +

        path

    );


}





export function getBackdrop(

    path

){


    if(!path)

        return "";



    return (

        CONFIG.TMDB_IMAGE.backdrop

        +

        path

    );


}






/* ===========================================
   TRAILER FINDER
=========================================== */


export function getTrailer(

    videos

){


    if(

        !videos ||

        !videos.results

    )

    return null;



    const trailer =

    videos.results.find(

        video =>

        video.type === "Trailer"

        &&

        video.site === "YouTube"

    );



    return trailer

    ?

    `https://youtube.com/watch?v=${trailer.key}`

    :

    null;


}
