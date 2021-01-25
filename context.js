import React, {createContext, useContext, useState} from 'react';

const LoginContext = createContext();

const LoginProvider = ({children}) => {
	const isAuthReq = true;
	const [isAuthenticated, setIsAuthenticated] = useState(false);


	return <LoginContext.Provider value={{isAuthReq, isAuthenticated, setIsAuthenticated}}>{children}</LoginContext.Provider>
}

const useGlobalContext = () => {
	return useContext(LoginContext);
}

export {LoginProvider, useGlobalContext}