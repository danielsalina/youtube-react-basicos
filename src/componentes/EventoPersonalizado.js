import { Component } from "react";

export default class EventoPersonalizado extends Component {
    render(){
        return(
            <div>
                <button onClick={this.props.pepitaClick}>Llamar al evento personalizado</button>
            </div>
        )
    }
}