import  { useContext } from "react";
import Context from '../../context/SearchContext'


export default function SearchCountries(){


    const {region, setRegion,search, setSearch } = useContext(Context)

    

   
  const handleSelect = (ev)=>{
    setRegion(ev.target.value)
  }

  const  handlerSearch = (ev)=>{


    setSearch(ev.target.value)
    
    

  }


    return(<div className="contentSearch">
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
    
    </div>)
}