import { useContext, useEffect, useState } from "react";
import requester from "../utils/requester";
import { userContext } from "../contexts/userContexts";

const baseUrl = 'http://localhost:3030/data/games';



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
    getOne,
    deleteGame,
    editGame
}

export default gameService;


export const useGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        requester.get(baseUrl)
        .then(setGames)
    }, [])

    return {
        games,
    }
}

export const useCreateGame = () => {
    const { accessToken } = useContext(userContext);
    console.log(accessToken);
    
    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    }

    
    const create = (gameData) =>
         requester.post(baseUrl, gameData, options);
    
    return {
        create
    }
}