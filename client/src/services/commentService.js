import requester from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/comments'

const createComment = (email,gameId, comment) => {
    return requester.post(baseUrl, {email, gameId, comment});
}

const getAll = async (gameId) => {
    const comments = await requester.get(baseUrl); 

    const gameComments = Object.values(comments).filter(comment => comment.gameId === gameId);

    return gameComments;
}

const commentService = {
    createComment, getAll
}

export default commentService;