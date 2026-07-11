/* ===========================================
   KIVUSTREAM PRO
   SMART HERO SYSTEM
=========================================== */


import { 

getFeaturedMovies,
getMovies

}

from "../api/supabase.js";



import {

getTrending,
getMovieDetails,
getBackdrop

}

from "../api/tmdb.js";




let heroMovies = [];

let currentHero = 0;

let timer;





/* ===========================================
   HERO TEMPLATE
=========================================== */


function heroTemplate(){


return `


<section id="hero">


<div class="hero-backdrop"></div>

<div class="hero-overlay"></div>



<div class="hero-content">



<span class="hero-badge">

Featured

</span>



<h1 class="hero-title">

Loading...

</h1>




<p class="hero-description">

Please wait...

</p>




<div class="hero-meta">


<span class="hero-rating">

⭐ -

</span>



<span class="hero-year">

-

</span>



</div>





<div class="hero-actions">


<button class="hero-watch">

<i class="fa-solid fa-play"></i>

Watch Now

</button>




<button class="hero-trailer">

<i class="fa-solid fa-video"></i>

Trailer

</button>



</div>




</div>



<div class="hero-controls"></div>



</section>


`;

}





/* ===========================================
   LOAD HERO
=========================================== */


export async function renderHero(){



const container =

document.getElementById(

"hero-container"

);



if(!container)

return;




container.innerHTML =

heroTemplate();





await loadHeroMovies();




if(heroMovies.length){

updateHero();

startSlider();

}



}







/* ===========================================
   HERO DATA PRIORITY
=========================================== */


async function loadHeroMovies(){



// 1. Featured movies


let movies =

await getFeaturedMovies();





// 2. Latest movies


if(!movies.length){


console.log(

"No featured movies. Loading latest..."

);



movies =

(await getMovies())

.slice(0,10);



}






// 3. TMDB fallback


if(!movies.length){


console.log(

"Using TMDB fallback"

);



const tmdb =

await getTrending();



movies =

tmdb.results || [];



}






heroMovies = movies;



console.log(

"Hero Movies:",

heroMovies

);



}








/* ===========================================
   UPDATE HERO
=========================================== */


async function updateHero(){



const movie =

heroMovies[currentHero];




let info = null;




if(movie.tmdb_id){


info =

await getMovieDetails(

movie.tmdb_id

);



}






const title =

info?.title ||

movie.title ||

movie.name;






const description =

info?.overview ||

movie.overview ||

movie.description ||

"No description available";






const backdrop =

info?.backdrop_path

?

getBackdrop(

info.backdrop_path

)

:

movie.backdrop;





const rating =

info?.vote_average ||

movie.rating ||

"";





const year =

info?.release_date

?

info.release_date.substring(0,4)

:

movie.year ||

"";






const hero =

document.getElementById(

"hero"

);





if(!hero)

return;






hero.querySelector(

".hero-backdrop"

).style.backgroundImage =

`url(${backdrop})`;






hero.querySelector(

".hero-title"

).textContent =

title;






hero.querySelector(

".hero-description"

).textContent =

description;






hero.querySelector(

".hero-rating"

).textContent =

`⭐ ${rating}`;






hero.querySelector(

".hero-year"

).textContent =

year;



}





/* ===========================================
   SLIDER
=========================================== */


function startSlider(){



timer = setInterval(()=>{



currentHero++;



if(

currentHero >= heroMovies.length

)

{

currentHero=0;

}



updateHero();



},8000);



}
