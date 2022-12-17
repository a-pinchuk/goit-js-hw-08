import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_TIME = 'videoplayer-current-time';

const ref = {
  iframe: document.querySelector('iframe'),
};

const player = new Player(ref.iframe);

player.on('timeupdate', throttle(setLocalStorage, 1000));

player.setCurrentTime(
  JSON.parse(localStorage.getItem(LOCALSTORAGE_TIME)).seconds
);

function setLocalStorage(data) {
  localStorage.setItem(LOCALSTORAGE_TIME, JSON.stringify(data));
}
