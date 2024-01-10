import React ,{ createContext,useState,useContext} from 'react'

const BookmarkContext = createContext(null)

export function BookmarkProvider  ({children}){
    const [blogIds , setblogIds] = useState([])

    return(
        <BookmarkContext.Provider value={{blogIds,setblogIds}}>
        {children}
        </BookmarkContext.Provider>
        )
    }

    export const UseBookmarkContext = () => {
        const context = useContext(BookmarkContext);
        if (!context) {
            throw new Error('useMainContext must be used within a MainProvider');
          }
          return context;
    }