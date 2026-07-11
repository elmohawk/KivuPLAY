/* ===========================================
   KIVUSTREAM PRO
   MAIN APPLICATION
=========================================== */
import { renderFooter }

from "./components/footer.js";
import { loadHome }

from "./pages/home.js";
import {

getMovies

}

from "./api/supabase.js";

import { renderNavbar, initNavbar }

from "./components/navbar.js";


import { renderHero }

from "./components/hero.js";



import { getTrending }

from "./api/tmdb.js";


import { renderMovieCards }

from "./components/movieCard.js";
/* ===========================================
   LOAD SUPABASE MOVIES
=========================================== */

async function loadSupabaseMovies(){

const movies =

await getMovies();
console.log(

"Supabase Movies:",

movies

);

const sections = {

trending:

movies,


latestMovies:

movies.filter(

m=>m.type==="movie"

),
latestSeries:

movies.filter(

m=>m.type==="series"

),
recommended:

movies.filter(

m=>m.recommended===true

)
};

Object.entries(sections)

.forEach(([id,list])=>{

const section =

document.getElementById(id);

if(!section)

return;

section.innerHTML=`

<div class="home-section">
<div class="section-header">

<div class="section-heading">


<h2>

${id}

</h2>


</div>


</div>



<div class="movie-slider"></div>



</div>


`;

const slider =

section.querySelector(

".movie-slider"

);

renderMovieCards(

slider,

list

);

});

}

/* ===========================================
   APP START
=========================================== */


document.addEventListener(

"DOMContentLoaded",

async ()=>{


    await startApp();

}

);

async function startApp(){



    console.log(
        "KIVUSTREAM STARTING..."
    );



    /*
    Navbar
    */


    renderNavbar();


    initNavbar();

    /*
    Hero
    */

    await renderHero();

    /*
    Trending Movies
    */
await loadHome();
    /*
    Remove Loader
    */

    hideLoader();

}

/* ===========================================
   TRENDING
=========================================== */

async function loadTrending(){

const container =

document.querySelector(

"#trending"

);



if(!container)

return;

const data =

await getTrending();

const movies =

data?.results || [];

container.innerHTML = `


<div class="home-section">


<div class="section-header">

<div class="section-heading">

<div class="section-icon">

<i class="fa-solid fa-fire"></i>

</div>


<h2>

Trending

</h2>


</div>

</div>



<div class="movie-slider">


</div>


</div>


`;

const slider =

container.querySelector(

".movie-slider"

);

renderMovieCards(

slider,

movies

);



}

/* ===========================================
   LOADER
=========================================== */


function hideLoader(){

const loader =

document.getElementById(

"loader"

);

if(!loader)

return;

setTimeout(()=>{

loader.classList.add(

"hide"

);

},1000);



}
