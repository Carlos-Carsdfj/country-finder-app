import { useState } from "react"
import  '../../App.css';

  
export default function Flag({country }){


   
   
    
    return(<div className="flag"  >
        <img src={country.flag} alt={country.name}></img>
        <h2>{country.name}</h2>
        <p><span>Capital :</span>{country.capital}</p>
        <p><span>Region :</span>{country.region}</p>
        <p><span>CallingCode :</span>{country.callingcode}</p>
        <p><span>Population :</span>{(new Intl.NumberFormat("de-DE").format(country.population))}</p>
    </div>)
}