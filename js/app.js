const loader = document.getElementById("loader");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 1200);
});

const movies = [
    {
        title: "John Wick",
        year: 2023,
        rating: "8.2",
        poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"
    },
    {
        title: "Avatar",
        year: 2022,
        rating: "8.0",
        poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
    }
];

const grid = document.getElementById("movie-grid");

movies.forEach(movie => {
    grid.innerHTML += `
        <div class="movie-card">
            <img class="poster" src="${movie.poster}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span>⭐ ${movie.rating}</span><br>
                <small>${movie.year}</small>
            </div>
        </div>
    `;
});
