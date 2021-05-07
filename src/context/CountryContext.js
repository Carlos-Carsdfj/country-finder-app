import React, {useState} from 'react'

const Context = React.createContext([])

export  function CountryContext ({children}){
    const [countries, setCountries] = useState([])

    return <Context.Provider value={{countries, setCountries }}>
        {children}
    </Context.Provider>



}

export default Context