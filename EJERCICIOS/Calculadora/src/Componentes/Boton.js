import "./Boton.css"

export default function Boton ({clickHandle, name, gray, orange, wide, green}) {

  const handleClick = () => clickHandle(name)

  const className = [
    "component-button",
    orange ? "orange" : "",
    wide ? "wide" : "",
    green ? "green" : "",
    gray ? "gray" : "",
  ]

      return (
        <div className={className.join(" ").trim()}>
          <button className="btn" onClick={handleClick}>{name}</button>
        </div>
      );
  }