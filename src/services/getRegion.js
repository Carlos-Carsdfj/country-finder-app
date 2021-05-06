const url = 'https://restcountries.eu/rest/v2/all?fields=name;population;region;flag'


export default function getCountries(){


    return fetch(url)
    .then(response=>response.json())
    .then(res=>{
       
         const countries = res.map(country =>{
           
           return{ name:country.nativeName,
            flag: country.flag,
            capital: country.capital,
            region: country.region,
            population: country.population}
        })

        
        return countries
        
    })
    



}