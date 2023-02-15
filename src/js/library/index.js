import Modal from '../modal';
const modal = new Modal();
import Markup from '../markup';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import * as TUI from '../pagination';

const watchedBtnEl = document.querySelector('[name="watchedList"]');
const queueBtnEl = document.querySelector('[name="queueList"]');

watchedBtnEl.addEventListener('click', onClick);
queueBtnEl.addEventListener('click', onClick);

onClick({ target: watchedBtnEl });

function getDataToDrawPage(data, page) {
  const from = (page - 1) * 20;
  const to = from + 19;
  const dataPage = data.slice(from, to);
  return dataPage;
}

function onClick(event) {
  // clear gallery
  Markup.galleryEl.innerHTML = '';
  //switch buttons styles
  document.querySelectorAll('.btn__library').forEach(el => el.classList.remove('button__checked'));
  event.target.classList.add('button__checked');

  try {
    const data = JSON.parse(localStorage.getItem(event.target.name));
    if (!data.length) {
      document.querySelector('.pagination').style.display = 'none';
      return;
    }

    modal.getMovies(getDataToDrawPage(data, 1));
    Markup.drawLibrary(getDataToDrawPage(data, 1));
    //TUI pagination
    const pagination = new Pagination('pagination', TUI.getOptions(data.length));
    document.querySelector('.pagination').style.display = 'block';

    pagination.on('afterMove', event => {
      modal.getMovies(getDataToDrawPage(data, event.page));
      Markup.drawLibrary(getDataToDrawPage(data, event.page));
    });
  } catch (error) {
    console.log('localStorage not parsed. probably its empty. error is', error);
  }
}
