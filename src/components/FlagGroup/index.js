import Flag from '../Flag/index'
import useCountries from '../../hooks/useCountries'
import { useContext } from 'react'
import Context from '../../context/SearchContext'
import Spinner from '../Spinner'
import './FlagGroup.css'
import  '../../App.css';
export default function FlagGroup(){

    const {countries, isloading} = useCountries()

    const {region,search } = useContext(Context)
 
  
    var  CountryFilter = countries;

    if(!isloading){

    if(search.length==0){
        CountryFilter  = (region==='All') ? CountryFilter : CountryFilter.filter(result => result.region.toLowerCase().indexOf(region.toLowerCase()) > -1)
    }else{
        if(region==='All'){

            CountryFilter  = CountryFilter.filter(result => result.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
        }else{
           const filterName = CountryFilter  = CountryFilter.filter(result => result.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
            CountryFilter  =  filterName.filter(result => result.region.toLowerCase().indexOf(region.toLowerCase()) > -1)
        }
        
    
        
    }

   
  
  }



    
    return(<>
    

    {
        
         isloading ? <Spinner></Spinner>:

        CountryFilter.map((country,index)=>{
                    return<Flag key={index} country={country} />})





               }

                 
        
        
       
    

    </>

    )
}