import React from 'react'
import { createContext, useState } from 'react'

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [alert, setAlert] = useState({});

    const values={
        alert,
        setAlert
    }
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider