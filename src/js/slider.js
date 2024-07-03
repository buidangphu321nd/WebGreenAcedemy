const images = ["./img/Hero Image.svg", "./img/hero_content.svg"];

let currentImageIndex = 0;
const imgElement = document.querySelector(".slider-image");

function showImage(index) {
  imgElement.src = images[index];
}

document.getElementById("nextBtn").addEventListener("click", function () {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
});

document.getElementById("prevBtn").addEventListener("click", function () {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
});

showImage(currentImageIndex);
