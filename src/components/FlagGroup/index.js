import Flag from '../Flag/index'
import useCountries from '../../hooks/useCountries'
import { useState } from 'react'

import './FlagGroup.css'
import  '../../App.css';

export default function FlagGroup({region='All',search=''}){

    const {countries, isloading} = useCountries()

   
 
  
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
        
         isloading ? <p>isLoading</p>:

        CountryFilter.map((country,index)=>{
                    return<Flag key={index} country={country} />})





               }

                 
        
        
       
    

    </>

    )
}