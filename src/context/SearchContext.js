import React, {useState} from 'react'

const Context = React.createContext([])

export  function SearchContext ({children}){
    
    const [search, setSearch] = useState("")
    const [region, setRegion] = useState('All')
    return <Context.Provider value={{region, setRegion,search, setSearch }}>
        {children}
    </Context.Provider>



}

export default Context