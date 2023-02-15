export default class LocalStorageAPI {

 static addToList(listName, movieObj) {

    const WATCHED = 'watchedList';
    const QUEUE = 'queueList';

  const toWatchedList = document.querySelector('[data-watched]');
  const toQueueList = document.querySelector('[data-queue]');
  const watchedList = JSON.parse(localStorage.getItem(WATCHED)) || [];
  const queueList = JSON.parse(localStorage.getItem(QUEUE)) || [];

  if (listName === WATCHED) {
    if (watchedList.find(el => el.id === movieObj.id)) {
      const movieDel = watchedList.find(el => el.id === movieObj.id);
      watchedList.splice(watchedList.indexOf(movieDel), 1);
      localStorage.setItem(WATCHED, JSON.stringify(watchedList));
      toWatchedList.textContent = 'add to watched';
      return;
    }

    watchedList.push(movieObj);
    localStorage.setItem(WATCHED, JSON.stringify(watchedList));
    toWatchedList.textContent = 'remove watched';

    return;
  }

  if (listName === QUEUE) {
    if (queueList.find(el => el.id === movieObj.id)) {
      const movieDel = queueList.find(el => el.id === movieObj.id);
      queueList.splice(queueList.indexOf(movieDel), 1);
      localStorage.setItem(QUEUE, JSON.stringify(queueList));
      toQueueList.textContent = 'add to queue';
      return;
    }

    queueList.push(movieObj);
    localStorage.setItem(QUEUE, JSON.stringify(queueList));
    toQueueList.textContent = 'remove from queue';

    return;
  }
}
}
