/*import { render } from "@testing-library/react";
import { Component } from "react";

class Frutas extends Component {
    render(){
        return <h1>{this.props.fruta}</h1>;
    }
}

function Frutas (props) {
    return <h1>{props.fruta}</h1>;
}*/


const Frutas = props => <h1>{props.fruta}</h1>;



export default Frutas;