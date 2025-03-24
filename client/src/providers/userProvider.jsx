import usePersistedState from "../hooks/usePersistedState";
import { userContext } from "../contexts/userContext";

export function UserProvider({
    children,
}) {
    const [authData, setAuthData] = usePersistedState('auth',{});

	const userLoginHandler = (resultData) => {
		setAuthData(resultData);
	}

	const userLogoutHandler = () => {
		setAuthData({})
	}

    return (
    <userContext.Provider value={{...authData, userLoginHandler, userLogoutHandler}}>
        {children}
    </userContext.Provider>
    )
}