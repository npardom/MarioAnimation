const imageUrls = [1,2,3,4,5,6];
let currentIndex = 0;

function changeImage() {
    document.getElementById("mario").src = "images/" + imageUrls[currentIndex].toString() + ".png";
    currentIndex = (currentIndex + 1) % imageUrls.length;
}

setInterval(changeImage, 150);
