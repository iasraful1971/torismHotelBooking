import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
export const AuthContex =createContext();


const AuthProvider = ({children}) => {
    const Allcontext = useFirebase();
    return (
        <AuthContex.Provider value={Allcontext}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;