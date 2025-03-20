import { createContext } from "react";

export const userContext = createContext({
    id: '',
    email: '',
    username: '',
    accessToken: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null
})