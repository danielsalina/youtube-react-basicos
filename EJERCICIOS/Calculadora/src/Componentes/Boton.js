export default function Boton ({clickHandle, name}) {

    const handleClick = () => clickHandle(name)

      return (
        <div>
          <button onClick={handleClick}>{name}</button>
        </div>
      );
  }