import requester from "../utils/requester"

const baseUrl = 'http://localhost:3030/users'

export const useLogin = () => {
    const login = (email, password) => {
        const result = requester.post(`${baseUrl}/login`, {email, password})
        
        return result;  
    }

    return {
        login
    }
}