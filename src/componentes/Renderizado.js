import { Component } from "react";

function Condicional (){
    const LENGUAJES = ["JS", "PHP", "PYTHON", "JAVA", "C++"];

    return(
        <ul>
            {LENGUAJES.map((el, i) => <li key={i}>{el}</li>)}
        </ul>
    )
}

export default class Renderizado extends Component {
    constructor(){
        super()
        this.state = {frameworks: ["React", "Angular", "Svelte", "Vue"]}
        this.bool = false
    }
    render(){
        return (
            <div>
                <h1>Estamos viendo el renderizado</h1>
                <ul>
                    {this.state.frameworks.map((el, index) => <li key={index}>{el}</li>)}
                </ul>
                {this.bool ? <Condicional /> : "La variable se encuentra en false"}
            </div>
        )
    }
}