
import templateCard from '../templates/cardMarkup';
import templateModalMarkup from '../templates/modalMarkup';
import noPosterImg from '../images/no-poster.jpg';

function Markup() {}

Markup.galleryEl = document.querySelector('.gallery__container');
Markup.modalEl = document.querySelector('.js-modal');
Markup.BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
Markup.LIB_EMPTY_MESSAGE =
  '<p class="js-library-message">Choose the movies on homepage please</>';

Markup.drawGallery = function(data) {
  this.galleryEl.innerHTML = '';
  data[0].data.results.forEach(el => {
   
    if (el.poster_path) {
      el.poster_path = this.BASE_IMG_URL + el.poster_path;
    } else {
      el.poster_path = noPosterImg;
    }

    el.popularity = parseFloat(el.popularity).toFixed(1);
    el.title = el.title.toUpperCase();
    el.release_date = el.release_date.slice(0, 4);

    el.genre_ids = el.genre_ids.map(elem => {
      data[1].data.genres.filter(el => {
        if (el.id === elem) {
          elem = el.name;
        }
      });
      return elem;
    });
  });

  this.galleryEl.innerHTML = templateCard(data[0].data.results);
}

Markup.drawLibrary = function(data) {
  this.galleryEl.innerHTML = '';
  this.galleryEl.innerHTML = templateCard(data);
}

Markup.drawModal = function(data) {
  this.modalEl.innerHTML = templateModalMarkup(data);
}

export default Markup;
