import { useState} from 'react'

import {CountryContext} from './context/CountryContext'
import {SearchContext} from './context/SearchContext'
import FlagGroup from './components/FlagGroup'

import './App.css'

function App() {
  

  const [search, setSearch] = useState("")
  const [region, setRegion] = useState('All')
  
  

   
  const handleSelect = (ev)=>{
    setRegion(ev.target.value)
  }

  const  handlerSearch = (ev)=>{


    setSearch(ev.target.value)
    
    

  }

  return (
    <>
    <SearchContext>
    <CountryContext>
    <div className="backContent">
    <div className="contenedor">
    <h1>Country Finder</h1>
    
      <div className="contentSearch">
      <input type="text" placeholder="search by name" value={search} onChange={handlerSearch}></input>
      
      <select value={region} onChange={handleSelect} className="selectOption" >
      <option className='option' value="All">All</option>
                          <option className='option' value="Africa">Africa</option>
                          <option className='option' value="Americas">Americas</option>
                          <option className='option' value="Asia">Asia</option>
                          <option className='option' value="Europe">Europe</option>
                          <option className='option' value="Oceania">Oceania</option>
                          <option className='option' value="Polar">Polar</option>
                          <option className='option' value="">Other</option>
          
        
      </select>
      
      </div>
      <div className="contenedor-imagenes">
    <FlagGroup search={search} region={region} />
    </div>
    </div>
    </div>
    </CountryContext>
    </SearchContext>
    </>
  );
}

export default App;
