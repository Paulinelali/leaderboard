

const urlLink = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SsCI5NH8IPPNIcBNj2Fk/scores/`

const getGames = async () => {
    let errorMsg = "";
    let dataArr = [];
    
    try {
        const response = await fetch(urlLink);
        const data = await response.json();
        const users = data.result;
        return users;

    } catch (error) {
        errorMsg = error
        return errorMsg
    }
    
}

export default getGames;

// await fetch(urlLink)
//     .then(res => { 
//         if(res.ok){
//             return (res.json())
//         }})
//         .then(data => console.log(data.result))