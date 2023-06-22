

import getGames from './getGames.js'

const listWrapper = document.querySelector(".score-list");

const displayGames = () => {
    
        getGames().then(data => {
            listWrapper.innerHTML = ""
            data.forEach( el => {
                const li = `<li class="name-score"> 
                <span class="name">${el.user} :</span>
                <span class="score">${el.score}</span>
            </li>`;
            listWrapper.innerHTML += li;
            })
        });
  
}

export default displayGames