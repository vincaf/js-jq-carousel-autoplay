const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];

let activeImageIndex = 0;

// recupero il parent all'interno del quale inserire le immagini
const imagesWrapper = document.querySelector('.carousel-wrapper .carousel-image-container');
// console.log(imagesWrapper);

// recupero il parent all'interno del quale inserire le thumbnails
const thumbnailsWrapper = document.querySelector('.carousel-wrapper .thumbnails-container');

// # cicliamo per la lunghezza dell'array di immagini chiamato images
for (let index = 0 ; index < images.length ; index++){

    // creo un elemento di tipo immagine
    const currentImage = document.createElement('img');

    // creo un elemento di tipo immagine
    const currentThumbnail = document.createElement('i');

    // gli attribuisco le proprietà che ritengo necessarie
    currentImage.setAttribute('src', images[index]);
    currentThumbnail.classList.add('fa-solid', 'fa-circle');


    if (index === activeImageIndex){
        currentImage.classList.add('active');
        currentThumbnail.classList.add('active');
    }

    // lo aggiungo al parent
    imagesWrapper.append(currentImage);
    thumbnailsWrapper.append(currentThumbnail);
}

const prevButton = document.getElementById('prev-button');
const nextButton = document.querySelector('#next-button');

// recupero la lista delle immagini disponibili nel carosello
const imageElements = document.querySelectorAll('.carousel-image-container img');

// recupero la lista delle thumbnails disponibili nel carosello
const thumbnailElements = document.querySelectorAll('.carousel-wrapper .thumbnails-container i');
console.log(thumbnailElements);

// devo aggiungere un comportamento conseguente ad un'interazione con i bottoni relativi

nextButton.addEventListener('click', function(){
    // prendo l'immagine attiva =>  .carousel-image-container img.active
    imageElements[activeImageIndex].classList.remove('active');
    thumbnailElements[activeImageIndex].classList.remove('active');

    //  activeImageIndex = activeImageIndex + 1;
    activeImageIndex++;

    // se arrivo alla fine della lista ricomincio da zero
    if (activeImageIndex === images.length) {
        activeImageIndex = 0;
    }

    // prendo l'immagine all'indice attuale e le aggiungo la classe active per renderla visibile
    imageElements[activeImageIndex].classList.add('active');
    thumbnailElements[activeImageIndex].classList.add('active');
});

prevButton.addEventListener('click', function(){
    // prendo l'immagine attiva =>  .carousel-image-container img.active
    imageElements[activeImageIndex].classList.remove('active');
    thumbnailElements[activeImageIndex].classList.remove('active');

    //  activeImageIndex = activeImageIndex - 1;
    activeImageIndex--;

    if (activeImageIndex === -1) {
        activeImageIndex = images.length - 1;
    }

    // prendo l'immagine all'indice attuale e le aggiungo la classe active per renderla visibile
    imageElements[activeImageIndex].classList.add('active');
    thumbnailElements[activeImageIndex].classList.add('active');
});

// ***************
// TIMING FUNCTION PER SCORRIMENTO SLIDE AUTOMATICO OGNI 3 SECONDI

const nextSlideAuto = setInterval(function(){
    imageElements[activeImageIndex].classList.remove('active');
    thumbnailElements[activeImageIndex].classList.remove('active');
    activeImageIndex++;
    if (activeImageIndex === images.length) {
        activeImageIndex = 0;
    }
    imageElements[activeImageIndex].classList.add('active');
    thumbnailElements[activeImageIndex].classList.add('active');
}, 3000);