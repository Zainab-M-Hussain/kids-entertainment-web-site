// Sample list of pages
const pages = [
    { title: "Home", url: "index.html" },
    { title: "Games", url: "games.html" },
    { title: "Videos", url: "videos.html" },
    { title: "Storybooks", url: "storybooks.html" },
    { title: "Crafts", url: "crafts.html" },
    { title: "Music", url: "music.html" },
    { title: "Puzzles", url: "puzzles.html" },
    { title: "Pet Care", url: "pet-care.html" },
    { title: "Learning", url: "learning.html" },
    { title: "Contests", url: "contests.html" }
];

function searchPage() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    const filteredPages = pages.filter(page => page.title.toLowerCase().includes(query));

    if (filteredPages.length > 0) {
        filteredPages.forEach(page => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<a href="${page.url}">${page.title}</a>`;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found</p>';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        const bgImages = container.querySelectorAll('.bg-image');
        let currentIndex = 0;

        setInterval(() => {
            bgImages.forEach((img, index) => {
                img.style.opacity = index === currentIndex ? '1' : '0';
            });

            currentIndex = (currentIndex + 1) % bgImages.length;
        }, 4000);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const gameContainers = document.querySelectorAll('.game-container');

    // Slide in from right on scroll
    const handleScroll = () => {
        gameContainers.forEach(container => {
            const rect = container.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                container.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case some containers are already in view

    // Background image cycling
    gameContainers.forEach(container => {
        const bgImages = container.querySelectorAll('.gg-image, .bg-image');
        let currentIndex = 0;

        setInterval(() => {
            bgImages.forEach((img, index) => {
                img.style.opacity = index === currentIndex ? '1' : '0';
            });

            currentIndex = (currentIndex + 1) % bgImages.length;
        }, 5000);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const videoContainers = document.querySelectorAll('.video-container');

    // Slide in from left on scroll
    const handleScroll = () => {
        videoContainers.forEach(container => {
            const rect = container.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                container.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case some containers are already in view
});

window.onload = function() {
    let heading = document.getElementById('heading');
    // Stop shaking after 3 seconds
    setTimeout(() => {
        heading.style.animation = 'none';
    }, 3000);
};
