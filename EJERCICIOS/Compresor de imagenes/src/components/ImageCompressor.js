import { Component } from "react";
import imageCompression from 'browser-image-compression';

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
      <div>
        <div>
          <h1>Compresor de imagenes</h1>
          <h3>1. Sube la imagen</h3>
          <h3>2. Da clic sobre el botón comprimir</h3>
          <h3>3. Descarga la imagen comprimida</h3>
        </div>

        <div>
          <div>
            {this.state.imagenSubida ? 
              <img src={this.state.linkOriginal} alt={""}/>
             : 
              <img src="https://raw.githubusercontent.com/danielsalina/subirImagen/main/subirImagen.png"alt={""}/>
            }
            <div>
              <input type="file" accept="image/*" onChange={e => this.manejadorDeArchivo(e) } />
            </div>
          </div>
          <div >
            <br />
            {this.state.nuevoArchivo ? 
              <button type="button" onClick={e => this.manejadorDeEnlaceComprimido(e)} > Comprimir </button>
            : 
              <></>
            }
          </div>

          <div >
            <img src={this.state.enlaceComprimido} alt={""}></img>
            {this.state.clickeado ? 
              <div>
                <a href={this.state.enlaceComprimido} download={this.state.nuevoArchivo} > Download </a>
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