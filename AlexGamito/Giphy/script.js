const API_KEY = "7uYKxnxDuyGjAL82t38B2rVvIqOoIMlG";

async function fetchGifs(endpoint) {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching GIFs:", error);
    }
}

function displayGifs(gifs) {
    const container = document.getElementById("giphyContainer");
    container.innerHTML = ""; // Clear previous results

    gifs.forEach(gif => {
        const gifElement = document.createElement("div");
        gifElement.classList.add("gif-item");
        gifElement.innerHTML = `
            <img src="${gif.images.fixed_height.url}" alt="${gif.title}">
            <p>${gif.title || "Untitled GIF"}</p>
        `;
        container.appendChild(gifElement);
    });
}

document.getElementById("searchButton").addEventListener("click", async () => {
    const query = document.getElementById("searchInput").value.trim();
    if (query) {
        const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=20`;
        const gifs = await fetchGifs(searchUrl);
        displayGifs(gifs);
    } else {
        const trendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20`;
        const gifs = await fetchGifs(trendingUrl);
        displayGifs(gifs);
    }
});

// Fetch and display trending GIFs on page load
const trendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20`;
fetchGifs(trendingUrl).then(displayGifs);