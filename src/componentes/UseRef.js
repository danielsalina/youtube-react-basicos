import { useState, useEffect, useRef } from 'react';

export default function UseRef () {
    const [contador, setContador] = useState(0)
    const nombre = useRef("Daniel")
    const menuBtn = useRef()
    const menuNav = useRef()

    useEffect(() => {
        
    },[contador])
    
    const sumar = () => setContador(contador + 1)
    
    const cambiarNombre = () => {
        nombre.current === "Daniel" ? nombre.current = "Orlando" : nombre.current = "Daniel"
        console.log(nombre.current)
    }

    const menu = () => { 
        if (menuBtn.current.textContent === "Menú 🟡") {
            menuBtn.current.textContent = "Cerrar 🔒";
            menuNav.current.style.display = "block";
      } else {
            menuBtn.current.textContent = "Menú 🟡";
            menuNav.current.style.display = "none";
      }
    };

    return(
        <div>
            <h1>😎 Conociendo el useRef 😎</h1>
            <h2>{contador} ⏱️</h2>
            <button onClick={sumar}>Sumar ➕</button>
            <h2>{nombre.current} 🤙</h2>
            <button onClick={cambiarNombre}>Cambiar Nombre ✏️</button>
            <br />
            <button ref={menuBtn} onClick={menu}> Menú 🟡</button>
            <nav ref={menuNav} style={{ display: "none" }}>
              {/* <a href="#">About 🙂</a><br />
              <a href="#">Blog 📜</a><br />
              <a href="#">Price 💲</a><br />
              <a href="#">Gift 🎁</a><br />
              <a href="#">Contact 💌</a> */}
            </nav>
        </div>
    )
}