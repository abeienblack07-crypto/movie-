// Sample Data: 30 Movie Records using Legal Public Domain/Creative Commons Media
const moviesData = [
    {
        id: "m1",
        title: "Sintel",
        description: "A lonely young woman, Sintel, helps and befriends a dragon scaling the snowy mountains, embarking on an epic journey to rescue it when kidnapped.",
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80",
        backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80",
        genre: "Animation",
        year: 2010,
        rating: 8.4,
        duration: "0h 15m",
        cast: "Halina Reijn, Thom Hoffman",
        director: "Colin Levy",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
    },
    {
        id: "m2",
        title: "Tears of Steel",
        description: "Set in an apocalyptic future, a group of soldiers and scientists gather in Amsterdam to stage a critical retrieval mission using ancient technology.",
        poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80",
        backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&q=80",
        genre: "Sci-Fi",
        year: 2012,
        rating: 7.8,
        duration: "0h 12m",
        cast: "Derek de Lint, Sergio Hasselbaink",
        director: "Ian Hubert",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    },
    {
        id: "m3",
        title: "Big Buck Bunny",
        description: "A giant and gentle rabbit deals with bullying forest creatures in a humorous, lighthearted adventure.",
        poster: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&q=80",
        backdrop: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
        genre: "Animation",
        year: 2008,
        rating: 8.1,
        duration: "0h 10m",
        cast: "Animation Cast",
        director: "Sacha Goedegebure",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: "m4",
        title: "Cosmos Odyssey",
        description: "An extraordinary journey through space, exploring mysterious nebulae and distant planetary systems.",
        poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
        backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80",
        genre: "Sci-Fi",
        year: 2024,
        rating: 9.1,
        duration: "2h 10m",
        cast: "Elena Rostova, Marcus Vance",
        director: "Sarah Jenkins",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
        id: "m5",
        title: "The Speed Express",
        description: "High-octane racing drivers compete in an illegal underground world championship.",
        poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&q=80",
        backdrop: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
        genre: "Action",
        year: 2023,
        rating: 7.5,
        duration: "1h 55m",
        cast: "Jack Harper, Mia Wong",
        director: "Carlos Mendez",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
        id: "m6",
        title: "Midnight Shadows",
        description: "A detective navigates through dark city corridors to unravel an impossible mystery.",
        poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80",
        backdrop: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=80",
        genre: "Horror",
        year: 2022,
        rating: 6.9,
        duration: "1h 42m",
        cast: "David Miller, Chloe Bennett",
        director: "Arthur Pendelton",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
        id: "m7",
        title: "Urban Laughs",
        description: "Three roommates accidentally start a viral comedy show while trying to pay rent in the city.",
        poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&q=80",
        backdrop: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200&q=80",
        genre: "Comedy",
        year: 2025,
        rating: 8.0,
        duration: "1h 30m",
        cast: "Sammy Davis, Leslie Key",
        director: "Tina Fey",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
    },
    {
        id: "m8",
        title: "Ocean Whisper",
        description: "A touching romance story set along the sun-drenched coastal cliffs of Southern Europe.",
        poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80",
        backdrop: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80",
        genre: "Romance",
        year: 2023,
        rating: 7.9,
        duration: "1h 48m",
        cast: "Lucas Silva, Emma Watson",
        director: "Guillermo Del Toro",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
    },
    {
        id: "m9",
        title: "Silent Horizon",
        description: "A dramatic recount of survival and human resilience in the freezing wilderness.",
        poster: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80",
        backdrop: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80",
        genre: "Drama",
        year: 2021,
        rating: 8.7,
        duration: "2h 15m",
        cast: "Christian Bale, Jessica Chastain",
        director: "Christopher Nolan",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
    }
];

// Dynamically generate remaining movies up to 30 elements
const genresList = ["Action", "Comedy", "Horror", "Sci-Fi", "Romance", "Drama", "Animation"];
for (let i = 10; i <= 30; i++) {
    const selectedGenre = genresList[i % genresList.length];
    moviesData.push({
        id: `m${i}`,
        title: `Cinematic Title ${i}`,
        description: `Experience the breathtaking adventure of Cinematic Title ${i}. A grand production featuring compelling storylines and stellar visuals.`,
        poster: `https://picsum.photos/seed/movie${i}/500/750`,
        backdrop: `https://picsum.photos/seed/backdrop${i}/1200/675`,
        genre: selectedGenre,
        year: 2020 + (i % 6),
        rating: parseFloat((6 + (i % 4) + Math.random()).toFixed(1)),
        duration: `${1 + (i % 2)}h ${10 + (i * 3) % 50}m`,
        cast: `Actor Alpha, Actor Beta ${i}`,
        director: `Director Master ${i}`,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    });
}

// Application State
let watchlist = JSON.parse(localStorage.getItem('cinemax_watchlist')) || [];
let continueWatching = JSON.parse(localStorage.getItem('cinemax_continue')) || [];
let activeFilter = 'all';

// DOM Elements
const movieGrid = document.getElementById('movie-grid');
const genrePillsContainer = document.getElementById('genre-pills');
const searchInput = document.getElementById('search-input');
const noResults = document.getElementById('no-results');
const watchlistCountBadge = document.getElementById('watchlist-count');

const detailsModal = document.getElementById('details-modal');
const loginModal = document.getElementById('login-modal');
const watchPage = document.getElementById('watch-page');

const mainVideoPlayer = document.getElementById('main-video-player');
const videoSource = document.getElementById('video-source');

// Application Initialization
document.addEventListener('DOMContentLoaded', () => {
    initHero();
    initGenrePills();
    renderMovies(moviesData);
    updateWatchlistUI();
    renderContinueWatching();
    setupEventListeners();
});

// Initialize Hero Section with Featured Movie
function initHero() {
    const featured = moviesData[0];
    document.getElementById('hero-backdrop').style.backgroundImage = `url('${featured.backdrop}')`;
    document.getElementById('hero-title').textContent = featured.title;
    document.getElementById('hero-description').textContent = featured.description;
    document.getElementById('hero-genre').textContent = featured.genre;
    document.getElementById('hero-rating').innerHTML = `<i class="fa-solid fa-star text-gold"></i> ${featured.rating}`;
    document.getElementById('hero-year').textContent = featured.year;
    document.getElementById('hero-duration').textContent = featured.duration;

    document.getElementById('hero-watch-btn').onclick = () => openWatchPage(featured);
    document.getElementById('hero-trailer-btn').onclick = () => openWatchPage(featured);
    document.getElementById('hero-watchlist-btn').onclick = () => toggleWatchlist(featured.id);
}

// Initialize Dynamic Genre Filter Pills
function initGenrePills() {
    const categories = ["All", ...genresList];
    genrePillsContainer.innerHTML = categories.map((genre, index) => `
        <button class="genre-pill ${index === 0 ? 'active' : ''}" data-genre="${genre}">${genre}</button>
    `).join('');

    genrePillsContainer.querySelectorAll('.genre-pill').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.genre-pill').forEach(p => p.classList.remove('active'));
            e.target.classList.add('active');
            activeFilter = e.target.dataset.genre;
            filterAndRender();
        });
    });
}

// Render Movie Cards Grid
function renderMovies(list) {
    if (list.length === 0) {
        movieGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    movieGrid.innerHTML = list.map(movie => {
        const inWatchlist = watchlist.includes(movie.id);
        return `
            <div class="movie-card" onclick="openDetailsModal('${movie.id}')">
                <div class="card-poster">
                    <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
                    <div class="card-overlay">
                        <button class="btn btn-primary btn-icon" onclick="event.stopPropagation(); openWatchPageById('${movie.id}')">
                            <i class="fa-solid fa-play"></i>
                        </button>
                        <button class="btn btn-secondary btn-icon" onclick="event.stopPropagation(); toggleWatchlist('${movie.id}')">
                            <i class="fa-solid ${inWatchlist ? 'fa-check' : 'fa-plus'}"></i>
                        </button>
                    </div>
                </div>
                <div class="card-details">
                    <div class="card-title">${movie.title}</div>
                    <div class="card-meta">
                        <span><i class="fa-solid fa-star text-gold"></i> ${movie.rating}</span>
                        <span>${movie.year}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Filter Movies based on Search and Genre
function filterAndRender() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const filtered = moviesData.filter(movie => {
        const matchesGenre = (activeFilter === 'all' || activeFilter === 'All') || movie.genre.toLowerCase() === activeFilter.toLowerCase();
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm) || movie.description.toLowerCase().includes(searchTerm);
        return matchesGenre && matchesSearch;
    });

    document.getElementById('grid-heading').textContent = activeFilter === 'all' ? 'All Movies' : `${activeFilter} Movies`;
    renderMovies(filtered);
}

// Modal Functions
function openDetailsModal(id) {
    const movie = moviesData.find(m => m.id === id);
    if (!movie) return;

    document.getElementById('modal-backdrop').style.backgroundImage = `url('${movie.backdrop}')`;
    document.getElementById('modal-poster').src = movie.poster;
    document.getElementById('modal-title').textContent = movie.title;
    document.getElementById('modal-description').textContent = movie.description;
    document.getElementById('modal-rating').innerHTML = `<i class="fa-solid fa-star text-gold"></i> ${movie.rating}`;
    document.getElementById('modal-year').textContent = movie.year;
    document.getElementById('modal-duration').textContent = movie.duration;
    document.getElementById('modal-director').textContent = movie.director;
    document.getElementById('modal-cast').textContent = movie.cast;
    document.getElementById('modal-genres').innerHTML = `<span class="badge badge-accent">${movie.genre}</span>`;

    document.getElementById('modal-watch-btn').onclick = () => { closeModal(detailsModal); openWatchPage(movie); };
    document.getElementById('modal-trailer-btn').onclick = () => { closeModal(detailsModal); openWatchPage(movie); };
    
    const watchlistBtn = document.getElementById('modal-watchlist-btn');
    watchlistBtn.innerHTML = watchlist.includes(movie.id) ? '<i class="fa-solid fa-check"></i> In Watchlist' : '<i class="fa-solid fa-plus"></i> Watchlist';
    watchlistBtn.onclick = () => {
        toggleWatchlist(movie.id);
        watchlistBtn.innerHTML = watchlist.includes(movie.id) ? '<i class="fa-solid fa-check"></i> In Watchlist' : '<i class="fa-solid fa-plus"></i> Watchlist';
    };

    openModal(detailsModal);
}

function openModal(modal) { modal.classList.add('active'); }
function closeModal(modal) { modal.classList.remove('active'); }

// Watch Page & Video Player
function openWatchPageById(id) {
    const movie = moviesData.find(m => m.id === id);
    if (movie) openWatchPage(movie);
}

function openWatchPage(movie) {
    document.getElementById('watch-movie-title').textContent = movie.title;
    document.getElementById('watch-description').textContent = movie.description;
    document.getElementById('watch-genre').textContent = movie.genre;
    document.getElementById('watch-rating').innerHTML = `<i class="fa-solid fa-star text-gold"></i> ${movie.rating}`;
    document.getElementById('watch-year').textContent = movie.year;
    document.getElementById('watch-duration').textContent = movie.duration;

    videoSource.src = movie.videoUrl;
    mainVideoPlayer.load();
    mainVideoPlayer.play();

    // Track Continue Watching
    addToContinueWatching(movie.id);

    // Load Related Movies
    const related = moviesData.filter(m => m.genre === movie.genre && m.id !== movie.id).slice(0, 4);
    const relatedGrid = document.getElementById('related-movies-grid');
    relatedGrid.innerHTML = related.map(m => `
        <div class="movie-card" onclick="openWatchPageById('${m.id}')">
            <div class="card-poster"><img src="${m.poster}" alt="${m.title}"></div>
            <div class="card-details"><div class="card-title">${m.title}</div></div>
        </div>
    `).join('');

    watchPage.style.display = 'block';
}

function closeWatchPage() {
    mainVideoPlayer.pause();
    watchPage.style.display = 'none';
}

// LocalStorage Features: Watchlist & Continue Watching
function toggleWatchlist(id) {
    if (watchlist.includes(id)) {
        watchlist = watchlist.filter(item => item !== id);
    } else {
        watchlist.push(id);
    }
    localStorage.setItem('cinemax_watchlist', JSON.stringify(watchlist));
    updateWatchlistUI();
    filterAndRender();
}

function updateWatchlistUI() {
    watchlistCountBadge.textContent = watchlist.length;
}

function addToContinueWatching(id) {
    if (!continueWatching.includes(id)) {
        continueWatching.unshift(id);
        if (continueWatching.length > 4) continueWatching.pop();
        localStorage.setItem('cinemax_continue', JSON.stringify(continueWatching));
        renderContinueWatching();
    }
}

function renderContinueWatching() {
    const section = document.getElementById('continue-watching-section');
    const grid = document.getElementById('continue-watching-grid');
    
    if (continueWatching.length === 0) {
        section.style.display = 'none';
        return;
    }

    const items = moviesData.filter(m => continueWatching.includes(m.id));
    section.style.display = 'block';
    grid.innerHTML = items.map(movie => `
        <div class="movie-card" onclick="openWatchPageById('${movie.id}')">
            <div class="card-poster">
                <img src="${movie.poster}" alt="${movie.title}">
                <div class="card-overlay">
                    <button class="btn btn-primary btn-icon"><i class="fa-solid fa-play"></i></button>
                </div>
            </div>
            <div class="card-details">
                <div class="card-title">${movie.title}</div>
            </div>
        </div>
    `).join('');
}

// Global Event Listeners
function setupEventListeners() {
    // Search input listener
    searchInput.addEventListener('input', filterAndRender);

    // Modal Close buttons
    document.getElementById('close-details-modal').onclick = () => closeModal(detailsModal);
    document.getElementById('close-login-modal').onclick = () => closeModal(loginModal);
    document.getElementById('open-login-btn').onclick = () => openModal(loginModal);
    document.getElementById('back-from-watch').onclick = closeWatchPage;

    // Watchlist Navigation view filter
    document.getElementById('watchlist-nav-btn').onclick = (e) => {
        e.preventDefault();
        const watchlistMovies = moviesData.filter(m => watchlist.includes(m.id));
        document.getElementById('grid-heading').textContent = 'My Watchlist';
        renderMovies(watchlistMovies);
    };

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    hamburger.onclick = () => {
        navLinks.classList.toggle('active');
    };

    // Auth Form Toggle
    const authForm = document.getElementById('auth-form');
    authForm.onsubmit = (e) => {
        e.preventDefault();
        alert('Authentication successful!');
        closeModal(loginModal);
    };
}