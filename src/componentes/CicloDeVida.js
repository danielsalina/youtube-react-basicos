import { Component } from "react";

class Texto extends Component{

   /* componentWillUnmount(){
        console.log("5- componentWillUnmount")
    }*/
    render(){
        return(
            <b>Pendiente aquí 👉 {this.props.texto}</b>
        )
    }
}

export default class CicloDeVida extends Component{
    state = {
        texto: "",
        titulo: "Ciclos de vida"
    }
    visible = true;

    agregarTexto = () => {
        this.setState({
            texto:'Hola comunidad 😊'
        })
        this.visible = true
    }

    cambiarTexto = () => {
        this.setState({
            texto:'Chao comunidad 😉'
        })
        this.visible = false
    }

    /*UNSAFE_componentWillUpdate(nextProps, nextState){
        console.log("3- componentWillUpdate")
        console.log(nextProps)
        console.log(nextState)
    }

    componentDidUpdate(prevProps, prevState){
        console.log("4- componentDidUpdate")
        console.log(prevProps)
        console.log(prevState)
    }

    UNSAFE_componentWillMount(){
        console.log("1- componentWillMount")
    }
    
    componentDidMount(){
        console.log("2- componentDidMount")
    }*/
    render(){
        return(
            <div>
                <div>
                    <h1>{this.state.titulo}</h1>
                    <button onClick={this.agregarTexto}>Saludar</button>
                    <button onClick={this.cambiarTexto}>Despedirse</button>
                </div>
                {this.visible ? <Texto texto={this.state.texto}/> :  <b>Pendiente aquí 👉 {this.state.texto}</b>}
            </div>
        )
    }
}
