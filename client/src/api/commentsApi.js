import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import requester from "../utils/requester";

const baseUrl = 'http://localhost:3030/data/comments'

export const useComments = (gameId) => {
    const {request} = useAuth();
    const [comments, setComments] = useState([])
    
    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `gameId="${gameId}"` 
        });
        
        request.get(`${baseUrl}?${searchParams.toString()}`)
        .then(setComments)
    }, [request, gameId])

    return {
        comments,
        setComments
    }
}

export const useCreateComment = () => {
    const { request } = useAuth() 

    const create = (gameId, comment ) => {
        const data = {
            gameId,
            comment
        }
        return request.post(baseUrl, data)
    }

    return {
        create
    }
}