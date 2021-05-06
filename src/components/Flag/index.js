
  
export default function({name, capital, region, flag, population}){

    return(<div>
        <img src={flag}></img>
        <h2>{name}</h2>
        <p>{capital}</p>
        <p>{region}</p>
        <p>{(new Intl.NumberFormat("de-DE").format(population))}</p>
    </div>)
}