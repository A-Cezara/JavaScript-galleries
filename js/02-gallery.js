import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function addImagesToGallery(images) {
  images.forEach((image) => {
    const listItem = document.createElement("li");
    listItem.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.setAttribute("href", image.original);

    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = image.preview;
    img.alt = image.description;

    link.appendChild(img);
    listItem.appendChild(link);
    galleryContainer.appendChild(listItem);

    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}

addImagesToGallery(galleryItems);
