import "./Estilos.css"
import EstilosModulos from "./Estilos.module.css"
import "./Estilos.scss"

export default function Estilos () {
    let botones = {
        background: "#85d",
        padding: "10px",
        borderRadius: "50px",
        color: "#fff",
        fontSize: "2em",
        width: "50vw"
    }

    return(
        <div>
            <h1>🚀 Estilos en React 🚀</h1>
            <p style={{background: "yellow", color: "black"}}>Estilos en línea</p>
            <button style={botones}>Estilos en línea con variables</button>
            <p className="externo">Estilos con archivos externos</p>
            <p className={EstilosModulos.fondo}>Estilos con módulos</p>
            <p className="sass">Estilos utilizando SASS</p>
        </div>
    )   
}