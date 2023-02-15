export default class LocalStorageAPI {
  static WATCHED() {
    return 'watchedList';
}

  // static WATCHED = 'watchedList';
  static QUEUE() {
     return 'queueList';
  }
  // static QUEUE = 'queueList';

  static addToList(listName, movieObj) {
    const toWatchedList = document.querySelector('[data-watched]');
    const toQueueList = document.querySelector('[data-queue]');

    const watchedList = JSON.parse(localStorage.getItem(this.WATCHED()));
    const queueList = JSON.parse(localStorage.getItem(this.QUEUE()));


    // const watchedList = JSON.parse(localStorage.getItem(LocalStorageAPI.WATCHED));
    // const queueList = JSON.parse(localStorage.getItem(LocalStorageAPI.QUEUE));

    if (listName === LocalStorageAPI.WATCHED) {
      if (watchedList.find(el => el.id === movieObj.id)) {
        const movieDel = watchedList.find(el => el.id === movieObj.id);
        watchedList.splice(watchedList.indexOf(movieDel), 1);
        localStorage.setItem(LocalStorageAPI.WATCHED, JSON.stringify(watchedList));
        toWatchedList.textContent = 'add to watched';
        return;
      }

      watchedList.push(movieObj);
      localStorage.setItem(LocalStorageAPI.WATCHED, JSON.stringify(watchedList));
      toWatchedList.textContent = 'remove watched';

      return;
    }

    if (listName === LocalStorageAPI.QUEUE) {
      // remove item
      if (queueList.find(el => el.id === movieObj.id)) {
        const movieDel = queueList.find(el => el.id === movieObj.id);
        queueList.splice(queueList.indexOf(movieDel), 1);
        localStorage.setItem(LocalStorageAPI.QUEUE, JSON.stringify(queueList));
        toQueueList.textContent = 'add to queue';
        return;
      }

      //add item
      queueList.push(movieObj);
      localStorage.setItem(LocalStorageAPI.QUEUE, JSON.stringify(queueList));
      toQueueList.textContent = 'remove from queue';

      return;
    }
  }
}







// export default class LocalStorageAPI {
//   static WATCHED = 'watchedList';
//   static QUEUE = 'queueList';
//   constructor() {}
//   static addToList(listName, movieObj) {
//     const toWatchedList = document.querySelector('[data-watched]');
//     const toQueueList = document.querySelector('[data-queue]');
//     const watchedList = JSON.parse(localStorage.getItem(this.WATCHED));
//     const queueList = JSON.parse(localStorage.getItem(this.QUEUE));

//     if (listName === this.WATCHED) {
//       if (watchedList.find(el => el.id === movieObj.id)) {
//         const movieDel = watchedList.find(el => el.id === movieObj.id);
//         watchedList.splice(watchedList.indexOf(movieDel), 1);
//         localStorage.setItem(this.WATCHED, JSON.stringify(watchedList));
//         toWatchedList.textContent = 'add to watched';
//         return;
//       }

//       watchedList.push(movieObj);
//       localStorage.setItem(this.WATCHED, JSON.stringify(watchedList));
//       toWatchedList.textContent = 'remove watched';

//       return;
//     }

//     if (listName === this.QUEUE) {
//       // remove item
//       if (queueList.find(el => el.id === movieObj.id)) {
//         const movieDel = queueList.find(el => el.id === movieObj.id);
//         queueList.splice(queueList.indexOf(movieDel), 1);
//         localStorage.setItem(this.QUEUE, JSON.stringify(queueList));
//         toQueueList.textContent = 'add to queue';
//         return;
//       }

//       //add item
//       queueList.push(movieObj);
//       localStorage.setItem(this.QUEUE, JSON.stringify(queueList));
//       toQueueList.textContent = 'remove from queue';

//       return;
//     }
//   }
// }
