import { useContext, useEffect, useRef } from "react";
import requester from "../utils/requester"
import { userContext } from "../contexts/userContexts";

const baseUrl = 'http://localhost:3030/users'

export const useLogin = () => {
    const abortRef = useRef();
    const login = (email, password) => {
        const result = requester.post(`${baseUrl}/login`, {email, password}, {signal: abortRef.current.signal})
        
        return result;  
    }

    useEffect(() => {
        const abortController = new AbortController();
        abortRef.current = abortController;
        
        return () => abortController.abort();
    }, [])

    return {
        login
    }
};

export const useRegister = () => {
        const register = (email, password) => {
            return requester.post(`${baseUrl}/register`, {email, password})
        }

        return {
            register
        }
};

export const useLogout = () => {
    const { accessToken } = useContext(userContext);
    
    const options = {
        headers: {
            'X-Authorization': accessToken
        }
    }
    const logout = () => requester.get(`${baseUrl}/logout`, null,  options)

    return {
        logout
    }
}