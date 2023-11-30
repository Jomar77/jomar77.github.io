let currentIndex = 0;
const bannerItems = document.querySelectorAll('#banner-content > div');

function showBannerImage(index) {
    let image = document.getElementById("banner-image");
    image.style.opacity = 0;
    
    setTimeout(() => {
        image.src = images[index];
        image.style.opacity = 1;
    }, 500);
}
function showBannerText(index) {
    let banner_text = document.getElementById("banner-text");
    banner_text.style.opacity = 0;

    setTimeout(() => {
        banner_text.textContent = text[index];
        banner_text.style.opacity = 1;
    }, 500);
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

const text = [
    "demo1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque libero quis rhoncus tempus. Duis venenatis tempus dolor sed ultricies. Curabitur eget convallis justo. Aenean blandit dictum erat eget imperdiet. Phasellus non turpis vestibulum, efficitur neque convallis, vulputate turpis. Integer quam quam, dapibus vitae erat vitae, aliquam dapibus felis. Donec malesuada elit metus, eget cursus risus sollicitudin eu. Ut mattis, leo sit amet pharetra pretium, odio odio fermentum sem, sit amet mollis lorem ex nec elit. Morbi sagittis sodales sagittis. Duis eu sapien semper lacus tincidunt viverra nec nec enim. Etiam augue nisi, consequat id porttitor at, aliquam a mauris. Cras a dui quis orci convallis tincidunt. ",
    "demo2 In vel consequat magna. Praesent pellentesque ultricies neque. Morbi lacinia massa sit amet mauris ornare, a vestibulum leo pretium. Nunc at augue at libero aliquam pretium eu eget nisl. Suspendisse vitae elit vel odio convallis pretium et sit amet justo. Aliquam sit amet arcu tempor, dapibus turpis id, ornare mauris. Cras cursus nibh vehicula, varius eros venenatis, rhoncus dolor. Proin viverra et sem et eleifend. In ullamcorper dui enim. Nunc porta lacinia purus, vel facilisis mi pharetra nec. Fusce sodales quis enim eget euismod. Duis tempus faucibus sagittis. Etiam sed semper felis.",
    "demo3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum ipsum augue, sit amet dapibus lectus semper eu. Vivamus laoreet neque tellus, a dapibus tortor dignissim eget. Mauris nec leo non metus venenatis cursus vehicula ac turpis. Ut tincidunt fringilla velit in aliquam. Mauris sit amet lacus malesuada elit euismod convallis. Suspendisse maximus arcu vitae nunc luctus cursus. Phasellus vitae arcu quis dolor commodo fermentum sit amet nec dolor. Donec commodo arcu eu sem consequat, cursus fermentum nisi tincidunt. Ut mollis velit non magna tempus gravida.",
    "demo4",
    "demo5",
    "demo6",
    "demo7",
    "demo8",
    "demo9",
]
function moveBanner(direction) {
    clearTimeout(autoSkipTimeout);

    if (direction === 'forward') {
        currentIndex = (currentIndex + 1) % images.length;
    } else {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    showBannerImage(currentIndex);
    showBannerText(currentIndex);
    startAutoSkip();
}

let autoSkipTimeout;

function startAutoSkip() {
    autoSkipTimeout = setTimeout(() => {
        moveBanner('forward');
    }, 5500);

}





document.addEventListener('DOMContentLoaded', startAutoSkip);