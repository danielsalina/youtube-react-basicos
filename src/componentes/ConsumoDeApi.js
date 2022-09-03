import { Component } from "react";

class Producto extends Component{
    render(){
        return(
            <figure>
                <img src={this.props.image} alt={this.props.name}></img>
                <figcaption>{this.props.name}</figcaption>
                <b>{this.props.price} {this.props.currency_id}</b>
            </figure>
        )
    }
}

export default class ConsumoDeApi extends Component{
    state = {
        productos : [],
    }

    componentDidMount(){
        let url = "https://api.mercadolibre.com/sites/MLA/search?q=gigabyte";
        fetch(url)
            .then(res => res.json())
            .then(json => {
                json.results.forEach(el => {
                    let producto = {
                        price: el.price,
                        name: el.title,
                        image: el.thumbnail,
                        currency_id: el.currency_id,
                        id: el.id
                    }

                    let productos = [...this.state.productos, producto]
                    this.setState({ productos })
                })
            })
        
    }

    render(){
        return(
            <div>
                <h1>Consumiendo API de Mercado Libre</h1>
                {this.state.productos.length === 0 
                ? (<h3>Cargando...</h3>)
                : (this.state.productos.map((el) => 
                ( <Producto key={el.id} image={el.image} name={el.name} price={el.price} currency_id={el.currency_id} /> )))}
            </div>
        )
    }
}