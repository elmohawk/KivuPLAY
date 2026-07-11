/* ===========================================
   KIVUSTREAM PRO
   NAVBAR COMPONENT
=========================================== */



/* ===========================================
   CREATE NAVBAR
=========================================== */


export function createNavbar(){



return `



<header id="navbar">



<!-- LOGO -->

<div class="logo">


<i class="fa-solid fa-play"></i>


<span>

KivuStream

</span>


</div>






<!-- NAVIGATION -->


<nav class="nav-links">


<a href="#home">

Home

</a>



<a href="#movies">

Movies

</a>



<a href="#series">

Series

</a>



<a href="#categories">

Categories

</a>



<a href="#about">

About

</a>



</nav>







<!-- ACTIONS -->


<div class="nav-actions">





<button

class="icon-btn"

id="search-btn"

title="Search"

>


<i class="fa-solid fa-search"></i>


</button>






<button

class="login-btn"

id="login-btn"

>


Login


</button>




</div>





</header>



`;



}







/* ===========================================
   LOAD NAVBAR
=========================================== */


export function renderNavbar(){



const container =

document.querySelector(

"#navbar-container"

);



if(!container)

return;




container.innerHTML =

createNavbar();



}







/* ===========================================
   NAVBAR EVENTS
=========================================== */


export function initNavbar(){



const searchButton =

document.querySelector(

"#search-btn"

);



if(searchButton){



searchButton.addEventListener(

"click",

()=>{


const search =

document.querySelector(

"#search-overlay"

);



if(search){


search.classList.add(

"active"

);


}



}


);



}







const loginButton =

document.querySelector(

"#login-btn"

);



if(loginButton){



loginButton.addEventListener(

"click",

()=>{


const modal =

document.querySelector(

"#login-modal"

);



if(modal){


modal.classList.add(

"active"

);


}



}


);



}






/*

Navbar scroll effect

Works with:

#navbar.scrolled

from style.css

*/



window.addEventListener(

"scroll",

()=>{


const navbar =

document.querySelector(

"#navbar"

);



if(!navbar)

return;




if(window.scrollY > 50){


navbar.classList.add(

"scrolled"

);



}

else{


navbar.classList.remove(

"scrolled"

);



}



}



);



}
