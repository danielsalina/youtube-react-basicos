import { useState, useEffect } from "react";

function NuestroReloj({fecha, hora}) {
    return(
        <div>
            La fecha y hora actual es:
            <h2>{fecha} {hora}</h2>
        </div>
    )
}

export default function UseEffects(){
    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [iniciar, setIniciar] = useState(false)

    let fecha = new Date().toLocaleDateString();

    useEffect(() => {
        let temporizador;

        if (iniciar){
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString())
            }, 1000);
        } else {
            clearInterval(temporizador);
        }

        return () => clearInterval(temporizador);
    }, [iniciar])

    return(
        <div>
            <h1>😎 Conociendo el useEffect 😎</h1>
            {iniciar ? <NuestroReloj fecha={fecha} hora={hora} /> : "Debes iniciar el reloj"}
            <div>
                <button onClick={() => setIniciar(true)}>Iniciar Reloj</button>
                <button onClick={() => setIniciar(false)}>Detener Reloj</button>
            </div>
        </div>
    )
}