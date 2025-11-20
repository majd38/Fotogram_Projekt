

const album1Imgs = [
    "./album1_img/canyon-9765223_640.jpg"
    , "./album1_img/cave-9817865_640.jpg"
    , "./album1_img/crocodile-9846352_1280.webp"
    , "./album1_img/irish-setter-8203156_1280.jpg"
];

const album2Imgs = [
    "./album2_img/iceberg-9729316_640.jpg",
    "./album2_img/iceberg-9729318_640.jpg",
    "./album2_img/iguanaphotography-9843469_640.jpg",
    "./album2_img/netherlands-7449282_640.jpg"
]
const album3Imgs = [
    "./album1_img/canyon-9765223_640.jpg"
    , "./album1_img/cave-9817865_640.jpg"
    , "./album1_img/crocodile-9846352_1280.webp"
    , "./album1_img/irish-setter-8203156_1280.jpg"
];

const album4Imgs = [
    "./album2_img/iceberg-9729316_640.jpg",
    "./album2_img/iceberg-9729318_640.jpg",
    "./album2_img/iguanaphotography-9843469_640.jpg",
    "./album2_img/netherlands-7449282_640.jpg"
]





const album1Titles = ["Canyon", "Cave", "Crocodile", "Irish Setter"];
const album2Titles = ["Iceberg16", "Iceberg18", "iguanaphotography", "netherlands"];
const album3Titles = ["Canyon", "Cave", "Crocodile", "Irish Setter"];
const album4Titles = ["Iceberg16", "Iceberg18", "iguanaphotography", "netherlands"];


let currentAlbum = null;
let currentIndex = 0;
const dialog1 = document.getElementById("album1_dialog");
const closeBtn = dialog1.querySelector(".closeDialog");
const arrowRight = document.getElementById("arrowRight");
const arrowLeft = document.getElementById("arrowLeft");
const imgDisplayer = document.getElementById("imgDisplayer");
const imgNavigator = document.getElementById("imgNav");
const imgTitle = dialog1.querySelector("h2");
const albums = {
    album1: {
        imgs: album1Imgs,
        titles: album1Titles
    },
    album2: {
        imgs: album2Imgs,
        titles: album2Titles
    },
     album3: {
        imgs: album3Imgs,
        titles: album3Titles
    },
    album4: {
        imgs: album4Imgs,
        titles: album4Titles
    }
};




document.querySelectorAll("section div").forEach(albumDiv => {
    albumDiv.addEventListener("click", () => {
        openAlbum(albumDiv.id);
    });
});

dialog1.addEventListener("click", (event) => {
    if (event.target === dialog1) {
        dialog1.close();
    }
});



closeBtn.addEventListener("click", function () {
    dialog1.close();
});

arrowLeft.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentAlbum.imgs.length) % currentAlbum.imgs.length;
    updateDialog();
});

arrowRight.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentAlbum.imgs.length;
    updateDialog();
});
function openAlbum(id) {
    currentAlbum = albums[id];
    currentIndex = 0;

    dialog1.showModal();
    updateDialog();
}

function updateDialog() {
    imgDisplayer.innerHTML =
        `<img src="${currentAlbum.imgs[currentIndex]}" style="max-width:100%; max-height:100%;">`;

    imgNavigator.textContent =
        `${currentIndex + 1}/${currentAlbum.imgs.length}`;

    imgTitle.textContent =
        currentAlbum.titles[currentIndex];
}








