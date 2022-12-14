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
        if (menuBtn.current.textContent === "MenΓΊ π‘") {
            menuBtn.current.textContent = "Cerrar π";
            menuNav.current.style.display = "block";
      } else {
            menuBtn.current.textContent = "MenΓΊ π‘";
            menuNav.current.style.display = "none";
      }
    };

    return(
        <div>
            <h1>π Conociendo el useRef π</h1>
            <h2>{contador} β±οΈ</h2>
            <button onClick={sumar}>Sumar β</button>
            <h2>{nombre.current} π€</h2>
            <button onClick={cambiarNombre}>Cambiar Nombre βοΈ</button>
            <br />
            <button ref={menuBtn} onClick={menu}> MenΓΊ π‘</button>
            <nav ref={menuNav} style={{ display: "none" }}>
              {/* <a href="#">About π</a><br />
              <a href="#">Blog π</a><br />
              <a href="#">Price π²</a><br />
              <a href="#">Gift π</a><br />
              <a href="#">Contact π</a> */}
            </nav>
        </div>
    )
}