import {useState} from 'react'
import useCountries from './hooks/useCountries'
import './App.css'

function App() {

  const {countries, isloading} = useCountries()
  
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState('All')
  
  var  CountryFilter = countries;

  if(!isloading){

    CountryFilter  = (search.length==0) ? countries : CountryFilter.filter(result => result.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
    CountryFilter  = (region==='All') ? CountryFilter : CountryFilter.filter(result => result.region.toLowerCase().indexOf(region.toLowerCase()) > -1)
  
  
  }



   
  const handleSelect = (ev)=>{
    setRegion(ev.target.value)
  }

  const  handlerSearch = (ev)=>{


    setSearch(ev.target.value)
    
    

  }

  return (
    <>
    <h1>Countries</h1>
    <input type="text" value={search} onChange={handlerSearch}></input>
    
    <select value={region} onChange={handleSelect} >
    <option className='option' value="All">All</option>
                        <option className='option' value="Africa">Africa</option>
                        <option className='option' value="Americas">Americas</option>
                        <option className='option' value="Asia">Asia</option>
                        <option className='option' value="Europe">Europe</option>
                        <option className='option' value="Oceania">Oceania</option>
                        <option className='option' value="Polar">Polar</option>
                        <option className='option' value="">Other</option>
        
      
    </select>

    <div>{isloading ?<p>loading</p> :


      CountryFilter.map((country,index)=>{


       return(<div key={index}>
        <img src={country.flag}></img>
        <h2>{country.name}</h2>
        <p>{country.capital}</p>
        <p>{country.region}</p>
        <p>{(new Intl.NumberFormat("de-DE").format(country.population))}</p>
        
       
       </div>)
     })
     

    }
    </div>

 
    </>
  );
}

export default App;
