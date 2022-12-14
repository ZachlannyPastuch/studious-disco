const img = document.querySelector("#main > img");

const images = [
  "photo-1669472376513-c7bc82f51727.avif", // 0
  "photo-1669490883665-720c9467a996.avif", // 1
  "photo-1669848768274-82e217241cb2.avif", // 2
  "photo-1670529027926-b109286469c8.avif", // 3
  "photo-1670886917713-5e60f88eaaff.avif", // 4
  "premium_photo-1663855531721-f738870e67d8.avif", // 5
];

let CURRENT_IMAGE_INDEX = 0;

function setImage() {
  img.src = "./images/" + images[CURRENT_IMAGE_INDEX];
}

function previousImage() {
  if (CURRENT_IMAGE_INDEX === 0) {
    CURRENT_IMAGE_INDEX = images.length - 1;
  } else {
    CURRENT_IMAGE_INDEX = CURRENT_IMAGE_INDEX - 1;
  }

  setImage();
}

function nextImage() {
  if (CURRENT_IMAGE_INDEX === images.length - 1) {
    CURRENT_IMAGE_INDEX = 0;
  } else {
    CURRENT_IMAGE_INDEX = CURRENT_IMAGE_INDEX + 1;
  }

  setImage();
}
