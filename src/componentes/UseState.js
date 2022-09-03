import { useState } from "react";

export default function UseState (props) {
    const [estado, setEstado] = useState(100)

    const aumentar = () => setEstado(estado + 1 )
    const disminuir = () => setEstado(estado - 1 )

    return(
        <div>
            <h1>Conociendo el Hook useState</h1>
            <button onClick={aumentar}>Sumar</button>
            <button onClick={disminuir}>Restar</button>
            <h2>{estado}</h2>
            <h2>{props.nombre}</h2>
            <h2>{props.apellido}</h2>
        </div>
    )
}

UseState.defaultProps = {apellido: "Componentes funcionales con React"}