import { Component } from "react";

export default class Contador extends Component {
    constructor(){
        super()
        this.state = {
            contador: 0
        }

        /*setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000);*/
    }

    handleClick = () => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render(){
        const titulo = "Contador";
        return(
            <div>
                <p>{titulo}</p>
                <button onClick={this.handleClick}>Sumar</button>
                <p>{this.state.contador}</p>
            </div>
        )
    }
}