

import {CountryContext} from './context/CountryContext'
import {SearchContext} from './context/SearchContext'
import FlagGroup from './components/FlagGroup'
import SearchFlags from './components/SearchFlags'
import './App.css'
import {MyGlobalStyle} from './styles/GlobalStayle'
import img from './y-so-serious-white.png'
import img2 from './y-so-serious.png'
import { useState } from 'react'

function App() {
  
  const [mode, setMode] = useState(false)
  const mode1 ={
    primary:'#eee',
  secundary:'#fff',
  borde:'#ccc',
  card:'#fefae0',
  text:'black'
  }
  const mode2 ={
    primary:'#0b090a',
  secundary:'#e5e5e5',
  borde:'#e5e5e5',
  card:'#161a1dee',
  text:'#fff'
  }
  const handlerMode=()=>{


    setMode(pre=>!pre)
  }
  return (
    <>
    <MyGlobalStyle  img={mode?img2:img} colors={mode?mode2:mode1}></MyGlobalStyle>
    <SearchContext>
    <button className="buttonDark"onClick={handlerMode}>{mode?" mode dark":"mode light"}</button>
    <CountryContext>
    <div className="backContent">
    <div className="contenedor">

    <h1>Country Finder</h1>
    
      <SearchFlags></SearchFlags>
      <div className="contenedor-imagenes">
        <FlagGroup />
      </div>
    </div>
    </div>
    </CountryContext>
    </SearchContext>
    
    </>
  );
}

export default App;
