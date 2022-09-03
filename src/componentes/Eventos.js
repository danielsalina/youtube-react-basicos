import { Component } from "react";
import EventoPersonalizado from "./EventoPersonalizado";

export default class Eventos extends Component {
    /*constructor(){
        super()
        console.log(0, "El componente se inicializa, aún NO está en el DOM");
    }*/

    handleClick = (e, nombre, apellido) => {
        //console.log(e);
        //console.log(e.nativeEvent);
        console.log(nombre);
        console.log(apellido);
    }

    /*componentWillUnmount() {
        console.log(3, "El componente ha sido eliminado del DOM");
      }

    componentDidMount() {
        console.log(1, "El componente ya se encuentra en el DOM");
      }

    componentDidUpdate(prevProps, prevState) {
        console.log(2, "El estado o las props del componente han cambiado");
        console.log(prevProps);
        console.log(prevState);
      }*/

    render(){
        /*console.log(4, "El componente se dibuja (o redibuja por algun cambio) en el DOM");*/
        return(
            <div>
                <button onClick={e => this.handleClick(e, "Hola soy un parámetro pasado en un evento 🤙", "Pasando parámetros a los eventos 🔥") }>Llamando al evento sintentico</button>                
                <EventoPersonalizado pepitaClick={e => this.handleClick(e, "Hola soy un evento personalizado 😎", "Madre mía 😲")} />
            </div>
        )
    }
}