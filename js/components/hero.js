/* ===========================================
   KIVUSTREAM PRO
   HERO COMPONENT
=========================================== */


import { getFeaturedMovies }

from "../api/supabase.js";



import {

getMovieDetails,

getBackdrop,

getTrailer

}

from "../api/tmdb.js";





let heroMovies = [];

let currentHero = 0;

let heroTimer;







/* ===========================================
   CREATE HERO HTML
=========================================== */


function createHero(){



return `


<section id="hero">



<div class="hero-backdrop"></div>


<div class="hero-overlay"></div>


<div class="hero-bottom-fade"></div>




<div class="hero-content">



<div class="hero-badge">

Featured

</div>




<h1 class="hero-title">

Loading...

</h1>





<p class="hero-description">

Loading movie information...

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



<button class="btn hero-watch">


<i class="fa-solid fa-play"></i>

Watch Now


</button>





<button class="btn hero-trailer">


<i class="fa-solid fa-video"></i>

Trailer


</button>



</div>




</div>






<div class="hero-controls">


</div>






</section>


`;



}







/* ===========================================
   RENDER HERO
=========================================== */


export async function renderHero(){



const container =

document.querySelector(

"#hero-container"

);



if(!container)

return;





container.innerHTML =

createHero();





heroMovies =

await getFeaturedMovies();






if(!heroMovies.length){



console.warn(

"No featured movies found"

);


return;


}





await updateHero();






startSlider();



}







/* ===========================================
   UPDATE HERO DATA
=========================================== */


async function updateHero(){



const movie =

heroMovies[currentHero];




let tmdbData = null;





if(movie.tmdb_id){



tmdbData =

await getMovieDetails(

movie.tmdb_id

);



}





const backdrop =

tmdbData?.backdrop_path

?

getBackdrop(

tmdbData.backdrop_path

)

:

movie.backdrop;



const title =

tmdbData?.title

||

movie.title;





const description =

tmdbData?.overview

||

movie.description

||

"";





const rating =

tmdbData?.vote_average

||

movie.rating

||

"";





const year =

tmdbData?.release_date

?

tmdbData.release_date.substring(0,4)

:

"";






const hero =

document.querySelector(

"#hero"

);



if(!hero)

return;






hero.querySelector(

".hero-backdrop"

)

.style.backgroundImage =

`url(${backdrop})`;







hero.querySelector(

".hero-title"

)

.textContent = title;





hero.querySelector(

".hero-description"

)

.textContent = description;





hero.querySelector(

".hero-rating"

)

.textContent =

`⭐ ${rating}`;




hero.querySelector(

".hero-year"

)

.textContent = year;






createDots();





}







/* ===========================================
   DOT CONTROLS
=========================================== */


function createDots(){



const controls =

document.querySelector(

".hero-controls"

);



if(!controls)

return;




controls.innerHTML =

heroMovies.map(

(movie,index)=>`


<div

class="hero-dot ${

index===currentHero

?

"active"

:

""

}"

data-index="${index}"

></div>


`

).join("");





controls

.querySelectorAll(

".hero-dot"

)

.forEach(dot=>{


dot.onclick=()=>{


currentHero =

Number(

dot.dataset.index

);



updateHero();



resetTimer();



};


});



}







/* ===========================================
   AUTO SLIDER
=========================================== */


function startSlider(){



heroTimer =

setInterval(()=>{


currentHero++;



if(

currentHero >= heroMovies.length

){


currentHero=0;


}



updateHero();



},

8000);



}







function resetTimer(){


clearInterval(

heroTimer

);


startSlider();


}
