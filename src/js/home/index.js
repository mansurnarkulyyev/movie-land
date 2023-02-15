import fetchAPI from '../fetch';
import Markup from '../markup';
import Modal from '../modal';
import { Block } from 'notiflix/build/notiflix-block-aio';

const modal = new Modal();

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import * as TUI from '../pagination';


if (!localStorage.getItem('watchedList')) {
  localStorage.setItem('watchedList', JSON.stringify(new Array()));
}
if (!localStorage.getItem('queueList')) {
  localStorage.setItem('queueList', JSON.stringify(new Array()));
}

const formSearchEl = document.querySelector('.header__form');
formSearchEl.addEventListener('submit', onSearchSubmit);

function onLoadPage(page) {
  Block.dots('.loading-block');
  Promise.all([fetchAPI.fetchTrendingMovies(1), fetchAPI.fetchGenres()])
    .then(data => {

      Markup.drawGallery(data);

      modal.getMovies(data[0].data.results);

      const pagination = new Pagination('pagination', TUI.getOptions(data[0].data.total_results));
      pagination.on('afterMove', event => {
        onPaginationTrending(event);
      });
    })
    .catch(err => {
      err;
    })
    .finally(() => {
      Block.remove('.loading-block');
    });
}
onLoadPage(1);

function onSearchSubmit(event) {
  Markup.galleryEl.innerHTML = '';
  Block.dots('.loading-block');

  event.preventDefault();
  const searchValue = event.target.elements.search.value;

  Promise.all([fetchAPI.fetchMoviesByQuery(1, searchValue), fetchAPI.fetchGenres()])
    .then(data => {
      Markup.drawGallery(data);

      const paginationEl = document.querySelector('.pagination');
      modal.getMovies(data[0].data.results);

      if (data[0].data.results.length === 0) {
        checkNameFilms();
        paginationEl.style.display = 'none';

        return;
      }
      const pagination = new Pagination('pagination', TUI.getOptions(data[0].data.total_results));
      paginationEl.style.display = 'block';

      pagination.on('afterMove', event => {
        onPaginationSearch(event, searchValue);
      });
    })
    .catch(err => {
      err;
    })
    .finally(() => {
      Block.remove('.loading-block');
    });
}

//fetch movies on pagination in trending list
function onPaginationTrending(event) {
  Promise.all([fetchAPI.fetchTrendingMovies(event.page), fetchAPI.fetchGenres()])
    .then(data => {
      Markup.drawGallery(data);
      modal.getMovies(data[0].data.results);
    })
    .catch(err => {
      err;
    });
}

//fetch movies on pagination search
function onPaginationSearch(event, searchValue) {
  Promise.all([fetchAPI.fetchMoviesByQuery(event.page, searchValue), fetchAPI.fetchGenres()])
    .then(data => {
      Markup.drawGallery(data);
      modal.getMovies(data[0].data.results);
    })
    .catch(err => {
      err;
    });
}

// checks for movies on the site
function checkNameFilms() {
  const errorMessage = document.querySelector('.header__message');

  errorMessage.classList.remove('is-hidden');

  setTimeout(() => {
    errorMessage.classList.add('is-hidden');
  }, 4000);
}
