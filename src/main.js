
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector ('form');
const searchInput = document.querySelector ('input');
const galleryContainer = document.querySelector('.gallery');

//Подія відправлення форми
form.addEventListener('submit', event => {
    event.preventDefault();
    const searchValue = searchInput.value;
    getImages(searchValue);
});

//Пошук зображень
function getImages(searchValue){
    const apiKey = '42469788-7d7013196b534fb1bad6f4ac3';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchValue}&image_type=photo&orientation=horizontal&safesearch=true`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error(response.status);
        }
        return response.json();
    })

    .then(data => { //Успішне викоання запиту
        if (data.hits.length === 0) { //Відстуні зображення
            iziToast.error({
            position: 'topRight',
            transitionIn: "fadeInLeft",
            message: "Sorry, there are no images matching your search query. Please try again!",
            });
        }
        else {  //Отримано зображенн
            const images = data.hits.
            map(data => {
                return `
                <li class="gallery-item"><a href="${data.largeImageURL}">
                <img class="gallery-image" src="${data.webformatURL}" alt="${data.tags}"></a>

                <p><b>Likes: </b>${data.likes}</p>
                <p><b>Views: </b>${data.views}</p>
                <p><b>Comments: </b>${data.comments}</p>
                <p><b>Downloads: </b>${data.downloads}</p>
                </li>`;
            }).join('');
            
            //Відображення на сторінці
            galleryContainer.insertAdjacentHTML("beforeend", images);
        const lightbox = new SimpleLightbox('.gallery a', {
          captions: true,
          captionType: 'attr',
          captionsData: 'alt',
          captionPosition: 'bottom',
          fadeSpeed: 150,
          captionSelector: "img",
          captionDelay: 250,
        });
        lightbox.on('show.simplelightbox').refresh();
        hideLoader();
      
        }
    })
    .catch(error => {
        console.log(error); //Помилка виконання запиту
    });
}



