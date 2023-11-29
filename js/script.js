let currentIndex = 0;
const bannerItems = document.querySelectorAll('#banner-content > div');

function showBanner(index) {
    let image = document.getElementById("banner-image");
    image.src = images[index];
}

const images = [
    "images/pic01.png",
    "images/pic02.jpg",
    "images/pic03.png",
    "images/pic04.jpg",
    "images/pic05.png",
    "images/pic06.png",
    "images/pic07.png",
    "images/pic08.png",
    "images/pic09.png",
];
function moveBanner(direction) {
    clearTimeout(autoSkipTimeout);

    if (direction === 'forward') {
        currentIndex = (currentIndex + 1) % images.length;
    } else {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    showBanner(currentIndex);
    startAutoSkip();
}

let autoSkipTimeout;

function startAutoSkip() {
    autoSkipTimeout = setTimeout(() => {
        moveBanner('forward');
    }, 5000);
}





document.addEventListener('DOMContentLoaded', startAutoSkip);