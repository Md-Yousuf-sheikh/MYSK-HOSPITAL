import React, { createContext } from 'react';
import useFirbase from '../Hooks/useFirbase';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const AllContext = useFirbase();
    return (
        <AuthContext.Provider value={AllContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;