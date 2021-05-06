import React, {useState} from 'react'

const Context = React.createContext([])

export  function CountryContext ({children}){
    const [countries, setCouintries] = useState([])
    
    return <Context.Provider value={{gifs, setCouintries}}>
        {children}
    </Context.Provider>



}

export default Context