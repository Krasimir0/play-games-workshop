import requester from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/games';

const createGame = (gameData) => {
    return requester.post(baseUrl, gameData);
}

const getAll = async () => {
    const result = await requester.get(baseUrl);
    const games = Object.values(result);
    return games;
}


const gameService = {
    createGame,
    getAll
}

export default gameService;