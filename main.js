// dialog
let imgs = ["imgs/cake1.webp", "imgs/cake2.jpg", "imgs/cake3.jpg"];
let dialog = document.querySelector("dialog");

// adding images to the dialog
let imgsContainer = document.createElement("div");
function openDialog() {
  imgsContainer.innerHTML = ``;

  imgsContainer.classList.add("imgs-container");
  imgs.forEach((img) => {
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    let image = document.createElement("img");
    image.src = img;
    image.alt = "";
    imgContainer.append(image);
    imgsContainer.append(imgContainer);
  });
  dialog.prepend(imgsContainer);
  dialog.showModal();
}
// closing the dialog
function closeDialog() {
  let dialog = document.querySelector("dialog");
  dialog.close();
}
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// zooming
let scale = 1;
let map = document.querySelector(".map img");
function zoom(mood) {
  if (mood === "In") {
    scale += 0.5;
  } else {
    scale -= 0.5;
  }
  if (scale <= 0) {
    scale = 0.5;
  } else if (scale > 15) {
    scale = 15;
  }
  map.style.transform = `scale(${scale})`;
}
