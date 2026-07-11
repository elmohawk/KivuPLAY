/* ===========================================
   KIVUSTREAM PRO
   PREMIUM NAVBAR COMPONENT
=========================================== */


import {

getCurrentUser,
logoutUser

}

from "../auth.js";





/* ===========================================
   CREATE NAVBAR
=========================================== */


export function createNavbar(){


return `


<header id="navbar">



<!-- LOGO -->

<div class="logo">


<a href="index.html">


<i class="fa-solid fa-play"></i>


<span>

KivuStream

</span>


</a>


</div>







<!-- MOBILE BUTTON -->


<button

class="mobile-menu-btn"

id="mobile-menu-btn"

>


<i class="fa-solid fa-bars"></i>


</button>



<!-- NAVIGATION -->


<nav class="nav-links" id="nav-links">


<a href="index.html">

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


<a href="#recommended">

Recommended

</a>


<a href="#about">

About

</a>
</nav>

<!-- ACTION AREA -->
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
   RENDER NAVBAR
=========================================== */
export function renderNavbar(){
const container =

document.querySelector(

"#navbar-container"

);
if(!container){
console.warn(

"Navbar container missing"

);
return;


}
container.innerHTML =

createNavbar();
}

/* ===========================================
   INIT NAVBAR EVENTS
=========================================== */
export async function initNavbar(){

/*
LOGIN USER STATUS
*/
const loginButton =

document.querySelector(

"#login-btn"

);

if(loginButton){

const user =

await getCurrentUser();

if(user){


loginButton.textContent=

"Logout";


}
loginButton.onclick = async()=>{

const current =

await getCurrentUser();

if(current){
await logoutUser();

loginButton.textContent=

"Login";

}

else{
window.location.href=

"login.html";

}

};

}

/*
SEARCH BUTTON
*/

const searchButton =

document.querySelector(

"#search-btn"

);

if(searchButton){

searchButton.onclick=()=>{

const search =

document.querySelector(

"#search-overlay"

);

if(search){

search.classList.toggle(

"active"

);

}

};
}
/*
MOBILE MENU
*/

const mobileButton =

document.querySelector(

"#mobile-menu-btn"

);

const navLinks =

document.querySelector(

"#nav-links"

);

if(

mobileButton && navLinks

){

mobileButton.onclick=()=>{
navLinks.classList.toggle(

"active"

);



};



}

/*
NAVBAR SCROLL EFFECT
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

if(window.scrollY > 40){

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
