import Button from "./Boton"

export default function panelDeBotones ({clickHandle}) {
  
    const handleClick = nombreDeBoton => {
      clickHandle(nombreDeBoton)
    }
    
    return (
        <div>
          <div>
            <Button name="AC" clickHandle={handleClick}/>
            <Button name="+/-" clickHandle={handleClick}/>
            <Button name="%" clickHandle={handleClick}/>
            <Button name="/" clickHandle={handleClick}/>
          </div>
          <div>
            <Button name="7" clickHandle={handleClick} />
            <Button name="8" clickHandle={handleClick} />
            <Button name="9" clickHandle={handleClick} />
            <Button name="x" clickHandle={handleClick}/>
          </div>
          <div>
            <Button name="4" clickHandle={handleClick} />
            <Button name="5" clickHandle={handleClick} />
            <Button name="6" clickHandle={handleClick} />
            <Button name="-" clickHandle={handleClick}/>
          </div>
          <div>
            <Button name="1" clickHandle={handleClick} />
            <Button name="2" clickHandle={handleClick} />
            <Button name="3" clickHandle={handleClick} />
            <Button name="+" clickHandle={handleClick} />
          </div>
          <div>
            <Button name="0" clickHandle={handleClick}/>
            <Button name="." clickHandle={handleClick} />
            <Button name="=" clickHandle={handleClick}/>
          </div>
        </div>
      );
  }