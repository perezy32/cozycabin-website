const galleries = {
  sofa: [
    "images/collection/sofa1.jpg",
    "images/collection/sofa2.jpg",
    "images/collection/sofa3.jpg"
  ],
  bedroom: [
    "images/collection/bed1.jpg",
    "images/collection/bed2.jpg"
  ],
  dining: [
    "images/collection/dining1.jpg",
    "images/collection/dining2.jpg"
  ]
};

function openModal(item){
  const modal = document.getElementById("modal");
  const mainImg = document.getElementById("modal-img");
  const gallery = document.getElementById("gallery");

  modal.style.display = "block";

  mainImg.src = galleries[item][0];

  gallery.innerHTML = "";

  galleries[item].forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    image.onclick = () => mainImg.src = img;
    gallery.appendChild(image);
  });
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}