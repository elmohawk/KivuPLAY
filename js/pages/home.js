/* ===========================================
   KIVUSTREAM PRO
   HOME PAGE CONTROLLER
=========================================== */


import {

getMovies

}

from "../api/supabase.js";



import {

renderMovieCards

}

from "../components/movieCard.js";





let allMovies = [];







/* ===========================================
   START HOME PAGE
=========================================== */


export async function loadHome(){



console.log(

"KivuStream Home Loading..."

);





allMovies =

await getMovies();





console.log(

"Supabase Movies:",

allMovies

);





loadSections();



}









/* ===========================================
   SECTION CONFIGURATION
=========================================== */


const sections = {


trending:

{

title:"Trending",

filter:(movie)=>true

},




latestMovies:

{

title:"Latest Movies",

filter:(movie)=>

movie.type==="movie"

},




latestSeries:

{

title:"Latest Series",

filter:(movie)=>

movie.type==="series"

},





action:

{

title:"Action",

category:"Action"

},




comedy:

{

title:"Comedy",

category:"Comedy"

},




drama:

{

title:"Drama",

category:"Drama"

},




romance:

{

title:"Romance",

category:"Romance"

},




crime:

{

title:"Crime",

category:"Crime"

},




scifi:

{

title:"Sci-Fi",

category:"Sci-Fi"

},




animation:

{

title:"Animation",

category:"Animation"

},




indian:

{

title:"Indian",

category:"Indian"

},




horror:

{

title:"Horror",

category:"Horror"

},




highschool:

{

title:"High School",

category:"High School"

},




recommended:

{

title:"Recommended",

filter:(movie)=>

movie.recommended===true

}



};










/* ===========================================
   LOAD ALL SECTIONS
=========================================== */


function loadSections(){



Object.entries(sections)

.forEach(

([id,config])=>{



const container =

document.getElementById(id);





if(!container)

return;





let movies = [];





if(config.category){



movies =

allMovies.filter(

movie =>

movie.category === config.category

);



}

else{


movies =

allMovies.filter(

config.filter

);



}






renderSection(

container,

config.title,

movies

);



});



}









/* ===========================================
   CREATE SECTION
=========================================== */


function renderSection(

container,

title,

movies

){





container.innerHTML = `


<div class="home-section">



<div class="section-header">


<div class="section-heading">


<h2>

${title}

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

movies.slice(0,20)

);

}
