import { useState, useEffect } from 'react';
import ImcForm from "../Componentes/IMCForm"
import Info from "../Componentes/InfoIMC"
import "materialize-css/dist/css/materialize.min.css"

export default function EjercicioIMC ()  {

  const [state, setState] = useState([]);
  const [data, setData] = useState({});
  
  console.log(data)
  
  
  useEffect(() => {
    
    const diaDePesaje = state.map(el => el.diaDePesaje);
    const imc = state.map(el => el.imc);
    
    let nuevaData = { diaDePesaje, imc };
    
    setData(nuevaData);
    
  }, [state]);

  const handleChange = objetoConValores => {

    let altura = objetoConValores.altura / 100;

    console.log(objetoConValores)
    console.log(objetoConValores.altura)

    objetoConValores.imc = (objetoConValores.peso / (altura * altura)).toFixed(2);
    console.log(objetoConValores.peso)

    let nuevoValor = [...state, objetoConValores];
    let len = nuevoValor.length;

    console.log(nuevoValor)
    
    if (len > 4) nuevoValor = nuevoValor.slice(1, len);
    
    setState(nuevoValor);

  };

  return (
    <div className='container'>
      <div className='row center'>
        <h1 className='white-text'> Calcula tu IMC </h1>
      </div>
        <div className='row'>
          <div className='col m12 s12'>
            <ImcForm change={handleChange} />
          </div>
        </div>
        <div className='row center'>
          <h2 className='white-text'>Datos del último día</h2>
        </div>
        <div className='data-container row'>
          { state.length > 0 
          ? state.map(info => 
          <Info key={info.key} peso={info.peso} altura={info.altura} imc={info.imc} diaDePesaje={info.diaDePesaje} horaDePesaje={info.horaDePesaje} /> ) 
          : <h3 className='white-text center'>Ingresa los datos</h3> }
        </div>
    </div>
  );
};