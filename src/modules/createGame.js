const gameId = 'jtg0LMisWb65pFPzmccG';

const urlLink = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

let statusMsg = '';
const msgWrapper = document.querySelector('.msg');

const createGame = async () => {
  const user = document.querySelector('#user').value;
  const score = document.querySelector('#score').value;

  await fetch(urlLink, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
    .then((data) => {
      statusMsg = data.result;
      msgWrapper.innerHTML = statusMsg;
      setTimeout(() => {
        msgWrapper.innerHTML = '';
      }, 3000);
    });
};

const msg = statusMsg;

export { createGame, msg };
