const urlLink = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jtg0LMisWb65pFPzmccG/scores/';

const errorMsg = '';

const getGames = async () => {
  const response = await fetch(urlLink);
  const data = await response.json();
  const users = data.result;
  return users;
};

export { getGames, errorMsg };