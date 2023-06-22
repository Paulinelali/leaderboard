const gameId = 'SsCI5NH8IPPNIcBNj2Fk';

const urlLink = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

const createGame = async (e) => {
  e.preventDefault();
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
  });
};

export default createGame;
