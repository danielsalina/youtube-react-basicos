import PropTypes from 'prop-types';

export default function Propiedades (props) {
    return (
        <div>
            <h1>Vamos a ver que onda eso de las props...</h1>
            {props.cadena} <hr/>
            {props.numeros} <hr/>
            {props.bool ? "La prop esta en true" : "La prop esta en false"} <hr/>
            {props.arreglo} <hr/>
            {`${props.obj.nombre} ${props.obj.apellido}`} <hr/>
            {props.numerosEjemplo.map(props.function).join(", ")} <hr/>
            {props.elementoReact} <hr/>
            {props.component} <hr/>
            {props.libro} <hr/>
            {props.author} <hr/>
        </div>
    );
}

Propiedades.defaultProps = {
    libro: "Una tierra prometida",
    author: "Barck Obama"
}

Propiedades.propTypes = {
    numeros: PropTypes.number.isRequired
}