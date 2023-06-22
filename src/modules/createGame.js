import { data } from "browserslist";

const gameId = 'SsCI5NH8IPPNIcBNj2Fk'

const urlLink = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SsCI5NH8IPPNIcBNj2Fk/scores/`

const createGame = async (e) => {
    e.preventDefault();
    const user = document.querySelector("#user").value;
    const score = document.querySelector("#score").value;
   const response = await fetch(urlLink, {
    method: 'POST',
    body: JSON.stringify({
        user: user,
        score: score,
    }),
    headers: {
        'Content-Type': 'application/json'
    }
   })
    const data = await response.json();
    console.log(data.result) 
}



export default createGame;

