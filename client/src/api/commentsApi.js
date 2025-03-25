import { useEffect, useReducer, useState } from "react";
import useAuth from "../hooks/useAuth";
import requester from "../utils/requester";

const baseUrl = 'http://localhost:3030/data/comments'


function commentsReducer(state, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, action.payload]
        case 'GET_ALL':
            return action.payload;
        default:
            return state;
    }
}

export const useComments = (gameId) => {
    const {accessToken} = useAuth();
    // const [comments, setComments] = useState([])
    const [comments, dispatch] = useReducer(commentsReducer, [])    

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `gameId="${gameId}"`, 
            load: `author=_ownerId:users`
        });

        const options= {
            headers: {
                'X-Authorization': accessToken 
            }
        } 
        
        requester.get(`${baseUrl}?${searchParams.toString()}`, null, options)
        .then(result => dispatch({type: 'GET_ALL', payload: result}))
    }, [requester, gameId])

    return {
        comments,
        addComment: (commentData) => dispatch({type: 'ADD_COMMENT', payload: commentData})
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
        create,
    }
}