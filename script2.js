const imageFolder = 'images'; // Path to your image folder
const imageCount = 10; // Number of images in the folder
const rows = [document.getElementById('row1'), document.getElementById('row2'), document.getElementById('row3')];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageCount) + 1;
    return `${imageFolder}/image (${randomIndex}).jpg`; // Adjust the naming pattern as needed
}

function populateRow(row) {
    for (let i = 0; i < 10; i++) { // Adjust the number of images per row as needed
        const img = document.createElement('img');
        img.src = getRandomImage();
        row.appendChild(img);
    }
    // Duplicate the images for seamless looping
    const images = row.innerHTML;
    row.innerHTML += images;
}

rows.forEach(populateRow);