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

const getOne = (gameId) => {
    return requester.get(`${baseUrl}/${gameId}`);
}

const deleteGame = (gameId) => {
    return requester.delete(`${baseUrl}/${gameId}`)
}

const editGame = (gameId, gameData) => {
    return requester.put(`${baseUrl}/${gameId}`, {...gameData, _id: gameId})
}
 
const gameService = {
    createGame,
    getAll,
    getOne,
    deleteGame,
    editGame
}

export default gameService;