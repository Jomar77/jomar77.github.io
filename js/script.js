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
function showBannerTitle(index) {
    let banner_title = document.getElementById("banner-title");
    banner_title.style.opacity = 0;

    setTimeout(() => {
        banner_title.textContent = title[index];
        banner_title.style.opacity = 1;
    }, 500);
}
function showBannerButton(index) {
    let banner_button = document.getElementById("project-link");
    banner_button.style.opacity = 0;

    setTimeout(() => {
        banner_button.href = project_link[index];
        banner_button.style.opacity = 1;
    }, 500);
}

const images = [
    "images/pic01.png",
    "images/pic02.jpg",
    "images/pic03.png",
];

const text = [
    "Soon to be updated if sisipagin tsaka may pera :D. I hope you enjoyed! *Heavily* based from Denz's Project↗.",
    "This repository contains one PowerBI file, HR_Analytics.pbix, that provides data visualization and insights for HR analytics. The report is designed to help HR departments and managers better understand key metrics and trends related to their employees.",
    "This is a sample website for a real estate company that allows users to input the area, number of bedrooms, number of bathrooms, and location of a property, and then displays the estimated price of the property.",
]

const project_link = [
    "https://nz-map-app.vercel.app/",
    "https://github.com/Jomar77/HR-Analytics-PowerBI",
    "https://github.com/Jomar77/The-Jomar-Project",
]

const title = [
    "New Zealand Map App",
    "Human Resource Analytics Dashboard with Power BI",
    "Tunisian House price predictor",
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
    showBannerTitle(currentIndex);
    showBannerButton(currentIndex);
    startAutoSkip();
}

let autoSkipTimeout;

function startAutoSkip() {
    autoSkipTimeout = setTimeout(() => {
        moveBanner('forward');
    }, 5500);

}





document.addEventListener('DOMContentLoaded', startAutoSkip);