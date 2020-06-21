import React, { createContext, useReducer, useEffect } from 'react';
import { AuthReducer } from '../Reducers/AuthReducer';
export const AuthContext = createContext()

export const authInitialState = {
    user: null,
    isAuthenticated: JSON.parse(localStorage.getItem('authenticated')) || false ,
    isLoading: false
}

const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(AuthReducer, authInitialState)
    console.log(state.isAuthenticated, 'authprovider');

    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
