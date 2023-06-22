import { getGames, errorMsg } from './getGames.js';

const listWrapper = document.querySelector('.score-list');


const displayGames = () => {
  if (errorMsg.length > 5) {
    listWrapper.innerHTML = `Error occur: ${errorMsg}`;
  } else {
    getGames().then((data) => {
      listWrapper.innerHTML = '';
      data.forEach((el) => {
        const li = `<li class="name-score"> 
                    <span class="name">${el.user} :</span>
                    <span class="score">${el.score}</span>
                </li>`;
        listWrapper.innerHTML += li;
      });
    });
  }
};

export default displayGames;