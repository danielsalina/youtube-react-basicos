import { Component } from "react";
import imageCompression from 'browser-image-compression';
import Card from "react-bootstrap/Card";

export default class ImageCompressor extends Component {
  
  state = {
    enlaceComprimido: "https://raw.githubusercontent.com/danielsalina/subirImagen/main/imagen.png",
    imagenOriginal: "",
    linkOriginal: "",
    clickeado: false,
    imagenSubida: false,
  }

  manejadorDeArchivo = e => {
    
    const archivoDeLaImagen = e.target.files[0];

    this.setState({
      linkOriginal: URL.createObjectURL(archivoDeLaImagen),
      imagenOriginal: archivoDeLaImagen,
      nuevoArchivo: archivoDeLaImagen.name,
      imagenSubida: true
    })
  }
  
  manejadorDeEnlaceComprimido = e => {
    e.preventDefault();
    
    const opciones = {
      tamnioMinimo: 1,
      anchoAltoMaximo: 500,
      useWebWorker: true
    }
    
    if (opciones.tamnioMinimo >= this.state.imagenOriginal.size / 1024) {
      alert("La imagen es demasiado pequeña, no se puede comprimir!");
      return 0;
    }
    
    let output;

    imageCompression(this.state.imagenOriginal, opciones).then(x => {
      output = x;

      const enlaceDeDescarga = URL.createObjectURL(output);

      this.setState({
        enlaceComprimido: enlaceDeDescarga
      });
    });
    
    this.setState({clickeado: true })

    return ;
  };
  render(){
    return (
      <div className="m-5">
        <div className="text-light text-center">
          <h1>Compresor de imagenes</h1>
          <h3>1. Sube la imagen</h3>
          <h3>2. Da clic sobre el botón comprimir</h3>
          <h3>3. Descarga la imagen comprimida</h3>
        </div>

        <div className="row mt-5">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            {this.state.imagenSubida ? 
              <Card.Img className="ht" variant="top" src={this.state.linkOriginal} alt={""}/>
             : 
             <Card.Img className="ht" variant="top" src="https://raw.githubusercontent.com/danielsalina/subirImagen/main/subirImagen.png"alt={""}/>
            }
            <div className="d-flex justify-content-center">
              <input className="mt-2 btn btn-dark w-75" type="file" accept="image/*" onChange={e => this.manejadorDeArchivo(e) } />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 mb-5 mt-5 col-sm-12 d-flex justify-content-center align-items-baseline">
            <br />
            {this.state.nuevoArchivo ? 
              <button className=" btn btn-dark" type="button" onClick={e => this.manejadorDeEnlaceComprimido(e)} > Comprimir </button>
            : 
              <></>
            }
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-3">
          <Card.Img variant="top" src={this.state.enlaceComprimido} alt={""} />
            {this.state.clickeado ? 
              <div className="d-flex justify-content-center">
                <a className="mt-2 btn btn-dark w-75" href={this.state.enlaceComprimido} download={this.state.nuevoArchivo} > Descargar </a>
              </div>
             : 
              <></>
            }
          </div>
        </div>
      </div>
    )
  }
}