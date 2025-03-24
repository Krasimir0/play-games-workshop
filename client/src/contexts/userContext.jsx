import { createContext, useContext } from "react";

export const userContext = createContext({
    id: '',
    email: '',
    username: '',
    accessToken: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null
})

export function useUserContext() {
    const data = useContext(userContext)

    return data;
}
