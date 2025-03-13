import requester from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/comments'

const createComment = (email,gameId, comment) => {
    return requester.post(baseUrl, {email, gameId, comment});
}

const commentService = {
    createComment
}

export default commentService;