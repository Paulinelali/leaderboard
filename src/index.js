import './styles/style.scss';
import createGame from './modules/createGame.js';
import displayGames from './modules/displayGames.js';

// fetch API
const fresh = document.querySelector('.refresh');
fresh.addEventListener('click', displayGames);

const submitBtn = document.querySelector('#submitBtn');
const msgWrapper = document.querySelector('.smg');
const form = document.querySelector('form');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createGame();
  createGame().then((res) => {
    msgWrapper.innerHTML = res;
  });
  form.reset();
});

// logData();
