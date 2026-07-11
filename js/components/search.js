/* ===========================================
   KIVUSTREAM PRO
   SMART SEARCH COMPONENT
=========================================== */


import {

searchMovies

}

from "../api/tmdb.js";



import {

searchDatabase

}

from "../api/supabase.js";



import {

renderMovieCards

}

from "./movieCard.js";





let searchTimer;







/* ===========================================
   CREATE SEARCH OVERLAY
=========================================== */


export function createSearch(){



return `



<div id="search-overlay">



<div class="search-box">



<button

class="close-search"

id="close-search"

>

<i class="fa-solid fa-xmark"></i>

</button>






<input

id="movie-search"

placeholder="Search movies, series..."

autocomplete="off"

>






<div id="search-results"

class="movie-slider">

</div>



</div>



</div>



`;



}








/* ===========================================
   RENDER SEARCH
=========================================== */


export function renderSearch(){



const app =

document.getElementById(

"app"

);





if(!app)

return;





app.insertAdjacentHTML(

"beforeend",

createSearch()

);



}





/* ===========================================
   INIT SEARCH EVENTS
=========================================== */


export function initSearch(){



const input =

document.getElementById(

"movie-search"

);



const overlay =

document.getElementById(

"search-overlay"

);





const close =

document.getElementById(

"close-search"

);







if(!input)

return;






input.addEventListener(

"input",

()=>{



clearTimeout(

searchTimer

);





searchTimer =

setTimeout(

()=>{


performSearch(

input.value

);



},

500

);



});







if(close){


close.onclick=()=>{


overlay.classList.remove(

"active"

);


};



}



}









/* ===========================================
   SEARCH ENGINE
=========================================== */


async function performSearch(

keyword

){



if(

keyword.trim().length < 2

)

return;





const results =

document.getElementById(

"search-results"

);





if(!results)

return;







results.innerHTML = `


<p>

Searching...

</p>


`;








const [

tmdb,

database

] = await Promise.all([



searchMovies(

keyword

),



searchDatabase(

keyword

)



]);







const movies = [

...(tmdb?.results || []),


...(database || [])

];






renderMovieCards(

results,

movies

);



}
