import { Component } from "react";

export default class EventoYBindeo extends Component {
    constructor(){
        super()
        this.state = {
            titulo: "Libros de finanzas ES6",
            libros: ["El hombre más rico de Babilonia", "Padre rico, Padre pobre"]
        }

        this.novelas = this.novelas.bind(this)
        this.autoayuda = this.autoayuda.bind(this)
        this.finanzas = this.finanzas.bind(this)
    }

    novelas () {
        console.log("Llamando al método novelas")
        console.log(this)
        this.setState({
            titulo: "Libros de novelas ES6",
            libros: ["El alquimista", "Las mil y una noches"]
        })
    }

    finanzas () {
        console.log("Llamando al método finanzas ")
        console.log(this)
        this.setState({
            titulo: "Libros de finanzas ES6",
            libros: ["El hombre más rico de Babilonia", "Padre rico, Padre pobre"]
        })
    }

    autoayuda () {
        console.log("Llamando al método autoayuda")
        console.log(this)
        this.setState({
            titulo: "Libros de autoayuda ES6",
            libros: ["Enriquezca su personalidad", "La magia de pensar en grande"]
        })
    }

    render(){
        return(
            <div>
                <h2>{this.state.titulo}</h2>
                <ul>
                    {this.state.libros.map((el, i) => <li key={i}>{el}</li>)}
                </ul>
                <button onClick={this.novelas}>Ver libros de novelas</button>
                <button onClick={this.autoayuda}>Ver libros de autoayuda</button>
                <button onClick={this.finanzas}>Ver libros de finanzas</button>
            </div>
        )
    }
}