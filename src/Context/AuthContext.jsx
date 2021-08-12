import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../Container/Auth/Fire';


const authContext = React.createContext()

export function useAuth() {
    return useContext(authContext)
}

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [admin, setAdmin] = useState([])

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    const value = {
        currentUser,
        admin,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        setAdmin
    }

    return (
        <authContext.Provider value={value}>
            {!loading && children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;