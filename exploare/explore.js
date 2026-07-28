// ========================================
// WEEKENDGO EXPLORE PAGE JAVASCRIPT
// ========================================

const PLACES_DATA = [
    {
        id: "bhandardara-lake",
        name: "Bhandardara Lake",
        category: "natural",
        categoryLabel: "Natural",
        categoryIcon: "🌳",
        location: "Nashik, Maharashtra",
        description: "A peaceful natural destination surrounded by mountains and greenery.",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        rating: 4.8,
        distance: 10
    },
    {
        id: "sula-vineyards",
        name: "Sula Vineyards",
        category: "historical",
        categoryLabel: "Historical",
        categoryIcon: "🏛️",
        location: "Nashik, Maharashtra",
        description: "A popular destination surrounded by beautiful landscapes and scenic views.",
        image: "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47",
        rating: 4.7,
        distance: 15
    },
    {
        id: "trimbakeshwar-trek",
        name: "Trimbakeshwar Trek",
        category: "adventure",
        categoryLabel: "Adventure",
        categoryIcon: "🏔️",
        location: "Trimbak, Nashik",
        description: "Experience an exciting trek with beautiful mountain scenery.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        rating: 4.6,
        distance: 20
    },
    {
        id: "nashik-food-street",
        name: "Nashik Food Street",
        category: "food",
        categoryLabel: "Food",
        categoryIcon: "🍔",
        location: "Nashik City",
        description: "Taste delicious local food and discover popular street food spots.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        rating: 4.5,
        distance: 5
    },
    {
        id: "trimbakeshwar-temple",
        name: "Trimbakeshwar Temple",
        category: "religious",
        categoryLabel: "Religious",
        categoryIcon: "🛕",
        location: "Trimbak, Nashik",
        description: "Explore a famous spiritual and historical destination.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada",
        rating: 4.9,
        distance: 25
    },
    {
        id: "sunset-photography-point",
        name: "Sunset Photography Point",
        category: "photography",
        categoryLabel: "Photography",
        categoryIcon: "📸",
        location: "Nashik, Maharashtra",
        description: "Capture beautiful sunset views and enjoy a relaxing evening.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        rating: 4.8,
        distance: 12
    }
];

const FAVORITES_KEY = "weekendgo_favorites";

function loadFavorites() {
    try {
        const raw = localStorage.getItem(FAVORITES_KEY);
        return new Set(raw ? JSON.parse(raw) : []);
    } catch {
        // Storage unavailable (private mode, disabled, or corrupted data) — start empty.
        return new Set();
    }
}

// App State
const state = {
    category: "all",
    searchQuery: "",
    sortBy: "default",
    favorites: loadFavorites()
};

// Utilities
function escapeHTML(value) {
    const div = document.createElement("div");
    div.textContent = String(value);
    return div.innerHTML;
}

function debounce(fn, delay = 250) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

function saveFavorites() {
    try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(state.favorites)));
    } catch {
        // Ignore write failures (e.g. storage quota, private mode) — favorites just won't persist.
    }
}

// DOM Elements — populated once the DOM is ready, see init() below.
let elements = {};

// Card Rendering Template
function createCardHTML(place) {
    const isFavorited = state.favorites.has(place.id);

    return `
        <article class="place-card" data-id="${escapeHTML(place.id)}">
            <div class="image-container">
                <img
                    src="${escapeHTML(place.image)}"
                    alt="${escapeHTML(place.name)}"
                    loading="lazy"
                    decoding="async"
                >
                <span class="category-tag">
                    <span class="cat-icon" aria-hidden="true">${place.categoryIcon}</span> ${escapeHTML(place.categoryLabel)}
                </span>
                <button
                    class="favorite-btn${isFavorited ? " favorited" : ""}"
                    type="button"
                    aria-pressed="${isFavorited}"
                    aria-label="${isFavorited ? "Remove from favorites" : "Add to favorites"}"
                >${isFavorited ? "♥" : "♡"}</button>
            </div>

            <div class="place-content">
                <h3>${escapeHTML(place.name)}</h3>
                <p class="location">📍 ${escapeHTML(place.location)}</p>
                <p class="description">${escapeHTML(place.description)}</p>

                <div class="place-info">
                    <span>⭐ ${place.rating}</span>
                    <span>📏 ${place.distance} km</span>
                </div>

                <div class="card-buttons">
                    <button class="view-btn" type="button">View Details</button>
                    <button class="map-btn" type="button">📍 Map</button>
                </div>
            </div>
        </article>
    `;
}

// Core Filter & Render Engine
function updateDisplay() {
    if (!elements.placesGrid || !elements.noResults || !elements.resultCount) {
        console.error(
            "WeekendGo: required elements (#placesGrid, #noResults, #resultCount) " +
            "were not found in the page. Check that explore.html matches explore.js."
        );
        return;
    }

    let results = PLACES_DATA.filter((place) => {
        const matchesCategory = state.category === "all" || place.category === state.category;

        const q = state.searchQuery.toLowerCase();
        const matchesSearch = !q ||
            place.name.toLowerCase().includes(q) ||
            place.location.toLowerCase().includes(q) ||
            place.category.toLowerCase().includes(q);

        return matchesCategory && matchesSearch;
    });

    // Apply Sorting (copy first — Array#sort mutates in place)
    if (state.sortBy === "rating") {
        results = [...results].sort((a, b) => b.rating - a.rating);
    } else if (state.sortBy === "distance") {
        results = [...results].sort((a, b) => a.distance - b.distance);
    }

    // Render Grid
    if (results.length === 0) {
        elements.placesGrid.innerHTML = "";
        elements.noResults.style.display = "block";
        elements.resultCount.textContent = "No places found";
    } else {
        elements.noResults.style.display = "none";
        elements.placesGrid.innerHTML = results.map(createCardHTML).join("");
        elements.resultCount.textContent = `Showing ${results.length} place${results.length > 1 ? "s" : ""}`;
    }
}

// Setup — runs once the DOM is guaranteed to exist, no matter where the
// <script> tag is placed (head, body, defer, etc). This is what the
// previous version was missing: it read elements.noResults etc. at parse
// time, so if the script ran before those nodes existed, every element in
// `elements` was null and updateDisplay() threw on its first call.
function init() {
    elements = {
        menuBtn: document.getElementById("menuBtn"),
        navLinks: document.getElementById("navLinks"),
        categoryButtons: document.querySelectorAll(".category-btn"),
        placesGrid: document.getElementById("placesGrid"),
        resultCount: document.getElementById("resultCount"),
        noResults: document.getElementById("noResults"),
        searchInput: document.getElementById("searchInput"),
        searchForm: document.querySelector(".search-box"),
        sortSelect: document.getElementById("sortSelect"),
        locationBtn: document.getElementById("locationBtn"),
        locationText: document.getElementById("locationText")
    };

    // Mobile Navigation
    elements.menuBtn?.addEventListener("click", () => {
        const isOpen = elements.navLinks.classList.toggle("show");
        elements.menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    // Category Filters
    elements.categoryButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            elements.categoryButtons.forEach((b) => {
                b.classList.remove("active");
                b.setAttribute("aria-pressed", "false");
            });

            btn.classList.add("active");
            btn.setAttribute("aria-pressed", "true");
            state.category = btn.dataset.category;
            updateDisplay();
        });
    });

    elements.searchInput?.addEventListener("input", debounce((e) => {
        state.searchQuery = e.target.value.trim();
        updateDisplay();
    }, 250));

    elements.searchForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        state.searchQuery = elements.searchInput.value.trim();
        updateDisplay();
    });

    // Bug fix: the handler previously read `e.value` (undefined on a native
    // Event) instead of `e.target.value`, so sorting never actually applied.
    elements.sortSelect?.addEventListener("change", (e) => {
        state.sortBy = e.target.value;
        updateDisplay();
    });

    // Card Action Delegation
    elements.placesGrid?.addEventListener("click", (e) => {
        const card = e.target.closest(".place-card");
        if (!card) return;

        const id = card.dataset.id;
        const place = PLACES_DATA.find((p) => p.id === id);
        if (!place) return;

        const favBtn = e.target.closest(".favorite-btn");
        if (favBtn) {
            if (state.favorites.has(id)) {
                state.favorites.delete(id);
                favBtn.classList.remove("favorited");
                favBtn.textContent = "♡";
                favBtn.setAttribute("aria-pressed", "false");
                favBtn.setAttribute("aria-label", "Add to favorites");
            } else {
                state.favorites.add(id);
                favBtn.classList.add("favorited");
                favBtn.textContent = "♥";
                favBtn.setAttribute("aria-pressed", "true");
                favBtn.setAttribute("aria-label", "Remove from favorites");
            }
            saveFavorites();
            return;
        }

        if (e.target.closest(".view-btn")) {
            alert(`Opening details for: ${place.name}`);
            return;
        }

        if (e.target.closest(".map-btn")) {
            alert(`Opening map for: ${place.name}`);
        }
    });

    // Geolocation Handler
    elements.locationBtn?.addEventListener("click", () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            return;
        }

        elements.locationBtn.textContent = "📍 Detecting...";
        elements.locationBtn.disabled = true;

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                elements.locationText.textContent = `Detected (${latitude.toFixed(2)}, ${longitude.toFixed(2)})`;
                elements.locationBtn.textContent = "✓ Located";
                elements.locationBtn.disabled = false;
            },
            () => {
                alert("Unable to fetch location. Please check browser permissions.");
                elements.locationBtn.textContent = "📍 Use My Location";
                elements.locationBtn.disabled = false;
            }
        );
    });

    // Initial Render
    updateDisplay();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    // DOM is already parsed (e.g. script loaded with `defer`, or injected late)
    init();
}