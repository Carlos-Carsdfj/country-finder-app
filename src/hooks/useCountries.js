import getCountries from '../services/getCountries'
import  {useState, useEffect, useContext } from "react";
import ContextCountries from '../context/CountryContext'



export default function useCountries(){

    const {countries, setCountries} = useContext(ContextCountries)
    
    const [loading, setLoading] = useState(true)
    


    useEffect(() => {


        
        setLoading(true)
        getCountries()
        .then(res=>{
            setCountries(res)
            setLoading(false)
        })
        
        
    }, [setCountries])
    

    return({countries,
        isloading:loading,
       
    })

}


