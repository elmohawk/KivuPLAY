/* ===========================================
   KIVUSTREAM PRO
   MOVIE CARD COMPONENT
=========================================== */


import { getPoster }

from "../api/tmdb.js";


/* ===========================================
   CREATE MOVIE CARD
=========================================== */


export function createMovieCard(movie){



    if(!movie){

        return "";

    }





    const id =

    movie.id ||

    movie.tmdb_id;





    const title =

    movie.title ||

    movie.name ||

    "Unknown Title";





    const poster =

    movie.poster_path

    ?

    getPoster(movie.poster_path)

    :

    movie.poster ||

    "";





    const rating =

    movie.vote_average

    ?

    Number(

        movie.vote_average

    ).toFixed(1)

    :

    "N/A";





    const year =

    movie.release_date

    ?

    movie.release_date.substring(0,4)

    :

    movie.year ||

    "";





    const badge =

    movie.premium

    ?

    `

    <span class="movie-badge badge-premium">

        PREMIUM

    </span>

    `

    :

    movie.is_new

    ?

    `

    <span class="movie-badge badge-new">

        NEW

    </span>

    `

    :

    `

    <span class="movie-badge badge-hd">

        HD

    </span>

    `;


    return `


<article 

class="movie-card"

data-id="${id}"

>


${badge}



<div class="movie-hover"></div>



<img

class="movie-poster"

src="${poster}"

alt="${title}"

loading="lazy"



>



<div class="movie-gradient"></div>



<div class="card-actions">


<a

class="card-play"

href="watch.html?id=${id}"

>
</a>
<i class="fa-solid fa-play"></i>


</button>




<button

class="card-favorite"

data-id="${id}"

title="Favorite"

>


<i class="fa-regular fa-heart"></i>


</button>



</div>





<div class="movie-info">


<h3 class="movie-title">

${title}

</h3>



<div class="movie-meta">


<span class="movie-rating">

⭐ ${rating}

</span>



<span>

${year}

</span>



</div>


</div>



</article>


`;



}

/* ===========================================
   RENDER MOVIE LIST
=========================================== */


export function renderMovieCards(

container,

movies = []

){



    if(!container)

    return;




    if(!movies.length){


        container.innerHTML = `


        <div class="empty-state">


        <i class="fa-solid fa-film"></i>


        <p>No movies available</p>


        </div>


        `;


        return;


    }

    container.innerHTML =

    movies

    .map(movie =>

        createMovieCard(movie)

    )

    .join("");



}
