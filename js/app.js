/* ===========================================
   KIVUSTREAM PRO
   MAIN APPLICATION
=========================================== */


import { renderNavbar, initNavbar }

from "./components/navbar.js";


import { renderHero }

from "./components/hero.js";



import { getTrending }

from "./api/tmdb.js";


import { renderMovieCards }

from "./components/movieCard.js";





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


    await loadTrending();






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
