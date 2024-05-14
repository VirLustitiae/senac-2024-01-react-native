import { createContext } from 'react';

export const MyContext = createContext({});

function MyContextProvider({children}) {
    return(
        <MyContext.Provider value="MEU CONTEXTO">
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider;