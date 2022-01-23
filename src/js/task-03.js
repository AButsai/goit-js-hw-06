const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryUlEl = document.querySelector(".gallery");
galleryUlEl.style.display = "flex";
galleryUlEl.style.listStyle = "none";
galleryUlEl.style.margin = "-10px";
galleryUlEl.style.alignItems = "center";

function iteratingArray() {
  return images
    .map(
      ({ url, alt }) =>
        `<li class="item"><img class="img" src="${url}" alt="${alt}"></li>`
    )
    .join("");
}

galleryUlEl.insertAdjacentHTML("beforeend", iteratingArray());

const liEl = document.querySelectorAll(".item");
liEl.forEach((el) => {
  el.style.margin = "10px";
  el.style.maxWidth = "500px";
});

const imgEl = document.querySelectorAll(".img");
imgEl.forEach((el) => {
  el.style.width = "100%";
  el.style.height = "auto";
  el.style.display = "block";
});
