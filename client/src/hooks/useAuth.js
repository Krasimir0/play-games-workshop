import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import requester from "../utils/requester";

export default function useAuth() {
    const authData = useContext(userContext);

    const requestWrapper = (method, url, data, options = {}) => {
        const authOptions = { 
            ...options,
            headers: {
                'X-Authorization': authData.accessToken,
            },
            ...options.headers   
        }

        return requester.baseRequest(method, url, data, authData.accessToken ? authOptions : options)
    }

    return {
        ...authData,
        isAuthenticated: !!authData.accessToken,
        request: {
            get: requestWrapper.bind(null, 'GET'),
            post: requestWrapper.bind(null, 'POST'),
            put: requestWrapper.bind(null, 'PUT'),
            delete: requestWrapper.bind(null, 'DELETE'),
        }
    }
}