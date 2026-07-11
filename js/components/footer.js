/* ===========================================
   KIVUSTREAM PRO
   FOOTER COMPONENT
=========================================== */



/* ===========================================
   FOOTER TEMPLATE
=========================================== */


export function createFooter(){


return `


<footer class="site-footer">

<div class="footer-container">



<!-- BRAND -->

<div class="footer-brand">


<h2>

<i class="fa-solid fa-play"></i>

KivuStream

</h2>



<p>

Your premium destination for movies,
series and entertainment.

</p>


<div class="footer-social">


<a href="#">

<i class="fab fa-facebook"></i>

</a>


<a href="#">

<i class="fab fa-instagram"></i>

</a>

<a href="#">

<i class="fab fa-youtube"></i>

</a>

<a href="#">

<i class="fab fa-tiktok"></i>

</a>

</div>

</div>

<!-- QUICK LINKS -->

<div class="footer-column">

<h3>

Quick Links

</h3>

<a href="#">

Home

</a>


<a href="#">

Movies

</a>


<a href="#">

Series

</a>


<a href="#">

About Us

</a>


<a href="#">

Contact

</a>


</div>

<!-- CATEGORIES -->

<div class="footer-column">


<h3>

Categories

</h3>



<a href="#action">

Action

</a>



<a href="#comedy">

Comedy

</a>


<a href="#horror">

Horror

</a>



<a href="#scifi">

Sci-Fi

</a>


<a href="#animation">

Animation

</a>

</div>

<!-- BRAND INFO -->

<div class="footer-column">


<h3>

Powered By

</h3>


<p>

Built with technology by

</p>


<strong>

IT HAWK_RW

</strong>

<p>

ApexHawkStudio

</p>

</div>

</div>

<!-- BOTTOM -->

<div class="footer-bottom">


<p>


© ${new Date().getFullYear()}

KivuStream.

IT HAWK RW.


</p>

<p>

#RiseWithHawke

</p>



</div>


</footer>

`;

}

/* ===========================================
   RENDER FOOTER
=========================================== */

export function renderFooter(){

const container =

document.getElementById(

"footer-container"

);


if(!container)

return;


container.innerHTML =

createFooter();



}
