function Producto ({name, image, currency_id, price}){
    return(
        <figure>
            <img src={image} alt={name}></img>
            <figcaption>{name}</figcaption>
            <b>{price} {currency_id}</b>
        </figure>
    )
}
export {Producto}