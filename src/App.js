import './App.css';
import Frutas from './componentes/Frutas';
import Propiedades from './componentes/Propiedades';
import Contador from './componentes/Contador';
import Renderizado from './componentes/Renderizado';
import EventoYBindeo from './componentes/EventosYBindeo';
import PropertyInicializer from './componentes/PropertyInicializer';
import Eventos from './componentes/Eventos';
import CicloDeVida from './componentes/CicloDeVida';
import ConsumoDeApi from './componentes/ConsumoDeApi';
import UseState from './componentes/UseState';
import UseEffects from './componentes/UseEffect';
import { ApiMl } from './componentes/ApiML';
import UseRef from './componentes/UseRef';
import Formulario from './componentes/Formaulario';
import Estilos from './componentes/Estilos';
import EjercicioIMC from './componentes/EjercicioIMC';

const nombre = "Daniel";
const cursos = ["HTML", "CSS", "BOOTSTRAP", "FIGMA", "SASS", "JS", "GIT"];
const bool = false;

function App() {
  return (  
    <div className='App App-header'>
      <p className='main'>Hola mundo React</p>
      <p id='algodón'>Otra etiqueta</p>
      <p data-algundato>Otra etiqueta</p>
      <label htmlFor="label">Nombre</label>
      <input type={"date"}></input>
      <p>{nombre}</p>
      <ul>
      {cursos.map((el, index) => <li key={index}>{el}</li>)}
      </ul>
      {bool ? "Esta en true" : "Estas en false"}
      <Frutas fruta="Hoy quiero comer coco"/>
      <Propiedades 
      cadena="Esto es una cadena desde las props"
      numeros= {123456}
      bool={true}
      arreglo= {["Steve Jobs", "Bill Gates", "Elon Musk"].join(", ")}
      numerosEjemplo = {[5, 10, 15]}
      obj = {{nombre: "Daniel", apellido:"Salinas"}}
      function = {num => num * num}
      elementoReact= {<b>"Celine Dion"</b>}
      component = {<Frutas fruta = "Guanabana"/>}
      />
      <Contador/>
      <Renderizado />
      <EventoYBindeo />
      <PropertyInicializer/>
      <hr/>
      <Eventos />
      <CicloDeVida />
      <ConsumoDeApi />
      <UseState nombre="Estamos viendo nuestro primer Hook, que es el UseState" />
      <UseEffects />
      <ApiMl />
      <UseRef />
      <Formulario />
      <Estilos />
      <EjercicioIMC />
    </div>
  );
}

export default App;