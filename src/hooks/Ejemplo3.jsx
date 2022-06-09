import React,{useState,useContext} from 'react'
//creando contexto para luego crear un provider en el padre
const miContexto = React.createContext(null) 
const Comp1 = () => {
// Aqui leo la data que recivo a travez del padre de igual forma lo recive el componenete dos
    const state =useContext(miContexto);
   
  return (
    <div>
        <h1>
            El Token es: {state.token}
        </h1>
        <Comp2></Comp2>
    </div>
  )
}


const Comp2 = () => {
    const state =useContext(miContexto);
  return (
    <div>
        <h2>
            Sesion #: {state.sesion}
        </h2>
    </div>
  )
}


// Funcion padre que provee la data a los hijos
export default function Padre() {

    const stateInicial = {
        token: '1234',
        sesion: 1
    }

    const [sessionData, setsessionData] = useState(stateInicial)

    function updateSession(){
        setsessionData(
            {token: 'JWKJSLDF',
            sesion: sessionData.sesion +1}
        );
    }



  return (
    <div>
        <miContexto.Provider value={sessionData}>
            <h1>Ejemplo use COntext</h1>
            <Comp1></Comp1>
            <button onClick={updateSession}>Updated</button>
        </miContexto.Provider>
        

    </div>
  )
}


