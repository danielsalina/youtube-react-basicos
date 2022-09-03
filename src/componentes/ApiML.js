import {useEfectPersonal} from "./useEfectPersonal"
import {Producto} from "./Producto"

function ApiMl (){
    let url = "https://api.mercadolibre.com/sites/MLM/search?q=samsung"
    let {data} = useEfectPersonal(url)
    
    return(
        <div>
            <h1>Conociendo los Hooks personalizados 🚀</h1>
            {data.length === 0 
            ? (<h3>Cargando...</h3>)
            : (data.map((el) => 
            ( <Producto key={el.id} image={el.image} name={el.name} price={el.price} currency_id={el.currency_id} /> )))}
        </div>
    )
}

export {ApiMl}