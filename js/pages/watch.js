/* ===========================================
   KIVUSTREAM PRO
   WATCH PAGE CONTROLLER
=========================================== */


import {

getMovieById

}

from "../api/supabase.js";



import {

getMovieDetails,

getBackdrop,

getPoster

}

from "../api/tmdb.js";





let currentMovie = null;






/* ===========================================
   START WATCH PAGE
=========================================== */


document.addEventListener(

"DOMContentLoaded",

()=>{


loadWatchPage();


}

);








/* ===========================================
   LOAD MOVIE
=========================================== */


async function loadWatchPage(){



const params =

new URLSearchParams(

window.location.search

);




const movieId =

params.get(

"id"

);





if(!movieId){


console.error(

"No movie ID found"

);


return;


}






currentMovie =

await getMovieById(

movieId

);






if(!currentMovie){


console.error(

"Movie not found"

);


return;


}






let tmdb = null;





if(currentMovie.tmdb_id){



tmdb =

await getMovieDetails(

currentMovie.tmdb_id

);



}





renderMovie(

currentMovie,

tmdb

);



}










/* ===========================================
   RENDER WATCH PAGE
=========================================== */


function renderMovie(

movie,

tmdb

){



const container =

document.getElementById(

"watch-container"

);





if(!container)

return;






const title =

tmdb?.title ||

movie.title;





const poster =

tmdb?.poster_path

?

getPoster(

tmdb.poster_path

)

:

"";






const backdrop =

tmdb?.backdrop_path

?

getBackdrop(

tmdb.backdrop_path

)

:

"";






const description =

tmdb?.overview ||

movie.description ||

"";






const rating =

tmdb?.vote_average ||

movie.rating ||

"";







container.innerHTML = `



<div class="watch-wrapper">



<div class="player-box">



<video

controls

poster="${poster}"

>


<source

src="${movie.video_url}"

type="video/mp4"

>


Your browser does not support video.



</video>



</div>







<div class="watch-info">



<h1>

${title}

</h1>




<div class="watch-meta">


<span>

⭐ ${rating}

</span>



</div>





<p>

${description}

</p>






<div class="watch-actions">



<a

href="${movie.download_url || '#'}"

class="download-btn"

target="_blank"

>


<i class="fa-solid fa-download"></i>

Download


</a>



</div>




</div>



</div>



`;



}
