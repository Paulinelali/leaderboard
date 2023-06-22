const gameId = 'jtg0LMisWb65pFPzmccG';

const urlLink = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

let msg = "";
const msgWrapper = document.querySelector('.msg');
    
const createGame = async () => {
  const user = document.querySelector('#user').value;
  const score = document.querySelector('#score').value;
  
  const response = await fetch(urlLink, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
  .then(data => {
    msg = data.result;
    msgWrapper.innerHTML = msg;
    setTimeout( () => {
        msgWrapper.innerHTML = ""
    }, 3000)
    })
};

export {createGame, msg};
