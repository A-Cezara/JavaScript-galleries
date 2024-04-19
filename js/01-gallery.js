import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
function addImagesToGallery(images) {
  images.forEach((image) => {
    const listItem = document.createElement("li");
    listItem.classList.add("gallery__item");
    const link = document.createElement("a");
    link.classList.add("gallery__link");
    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = image.preview;
    img.setAttribute("data-source", image.original);
    img.alt = image.description;
    link.appendChild(img);
    listItem.appendChild(link);
    galleryContainer.appendChild(listItem);
  });
}
addImagesToGallery(galleryItems);

const img = document.querySelectorAll("img");

img.forEach((image) => {
  image.addEventListener("click", function (event) {
    event.preventDefault();
  });
});

document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", function () {
    const imageIndex = galleryItems.findIndex(
      (item) => item.preview === img.src
    );
    const instance = basicLightbox.create(
      `<img src=${galleryItems[imageIndex].original} width="800" height="600">`
    );
    instance.show();
    document.addEventListener("keyup", (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    });
  });
});
