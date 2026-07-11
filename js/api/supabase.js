/* ===========================================
   KIVUSTREAM PRO
   SUPABASE DATABASE CONNECTION
=========================================== */


import { createClient } 
from 
"https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";


import { CONFIG } 
from "../config.js";



/* ===========================================
   CREATE SUPABASE CLIENT
=========================================== */


export const supabase = createClient(

    CONFIG.SUPABASE_URL,

    CONFIG.SUPABASE_ANON_KEY

);





/* ===========================================
   MOVIES
=========================================== */


/*
 Get all movies uploaded in KivuStream database

 Table expected:

 movies

 Columns example:

 id
 tmdb_id
 category
 video_url
 download_url
 featured
 premium
 created_at

*/
/* ===========================================
   GET ALL MOVIES
=========================================== */


export async function getMovies(){


const {

data,

error

}= await supabase

.from("movies")

.select("*")

.order(

"created_at",

{

ascending:false

}

);



if(error){

console.error(

"Supabase Movies Error:",

error

);


return [];

}



return data;



}







/* ===========================================
   GET FEATURED MOVIES
=========================================== */


export async function getFeaturedMovies(){


const {

data,

error

}= await supabase

.from("movies")

.select("*")

.eq(

"featured",

true

)

.order(

"created_at",

{

ascending:false

}

)

.limit(10);





if(error){

console.error(

"Featured Error:",

error

);


return [];

}



return data;



}
/* ===========================================
   CATEGORY MOVIES
=========================================== */


export async function getMoviesByCategory(
    
    category

){



    const {


        data,


        error


    } = await supabase


    .from("movies")


    .select("*")


    .eq(

        "category",

        category

    )



    .order(

        "created_at",

        {

            ascending:false

        }

    );




    if(error){


        console.error(

            "Category Error:",

            error

        );


        return [];


    }



    return data;



}







/* ===========================================
   SINGLE MOVIE
=========================================== */


export async function getMovieById(id){



    const {


        data,


        error


    } = await supabase


    .from("movies")


    .select("*")


    .eq(

        "id",

        id

    )


    .single();





    if(error){


        console.error(

            "Movie Fetch Error:",

            error

        );


        return null;


    }



    return data;



}






/* ===========================================
   SEARCH DATABASE
=========================================== */


export async function searchDatabase(
    
    keyword

){



    const {


        data,


        error


    } = await supabase


    .from("movies")


    .select("*")


    .ilike(

        "title",

        `%${keyword}%`

    );





    if(error){


        console.error(

            "Search Error:",

            error

        );


        return [];


    }



    return data;



}






/* ===========================================
   FAVORITES
=========================================== */


export async function addFavorite(
    
    userId,

    movieId

){



    const {


        data,


        error


    } = await supabase


    .from("favorites")


    .insert({


        user_id:userId,


        movie_id:movieId


    });





    if(error){


        console.error(

            "Favorite Error:",

            error

        );


        return false;


    }




    return true;



}





export async function removeFavorite(

    userId,

    movieId

){



    const {

        error


    } = await supabase


    .from("favorites")


    .delete()


    .eq(

        "user_id",

        userId

    )


    .eq(

        "movie_id",

        movieId

    );





    if(error){


        console.error(

            error

        );


        return false;


    }



    return true;



}







/* ===========================================
   WATCH HISTORY
=========================================== */


export async function saveWatchHistory(

    userId,

    movieId

){



    const {

        error


    } = await supabase


    .from("watch_history")


    .upsert({


        user_id:userId,


        movie_id:movieId,


        watched_at:

        new Date()


    });





    if(error){


        console.error(

            "History Error:",

            error

        );


        return false;


    }



    return true;



}
