import { useEffect, useState } from "react";
import requester from "../utils/requester";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/games';

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
    const { request } = useAuth()

    const create = (gameData) =>
         request.post(baseUrl, gameData);
    
    return {
        create
    }
}

export const useGame = (gameId) => {
    const [game, setGame] = useState({});

    useEffect(() => {
        requester.get(`${baseUrl}/${gameId}`)
        .then(setGame)
    }, [gameId])
    return {
        game,
    }
}

export const useEditGame = () => {
    const { request } = useAuth();

    const edit = (gameId, gameData) => {
        return request.put(`${baseUrl}/${gameId}`, {...gameData, _id: gameId})
    }

    return {
        edit
    }
}

export const useDeleteGame = () => {
    const { request } = useAuth();
    
    const deleteGame = (gameId) => {
        request.delete(`${baseUrl}/${gameId}`)
    }
    return {
        deleteGame,
    }
}

export const useLatestGames = () => {
    const [latestGames, setLatestGames] = useState([]);

    

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 3,
            select: '_id,imageUrl,title'
        });

        requester.get(`${baseUrl}?${searchParams.toString()}`)
        .then(setLatestGames);
    }, [])

    return {
        latestGames,
    }
};