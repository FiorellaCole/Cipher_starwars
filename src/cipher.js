const cipher = {

    encode: (offset, string) => {
        let resultado="";
        let mensaje="";
        offset=parseInt(offset);

      if(string !="" && offset !="" && offset != 0){
        for(let i=0; i<string.length;i++){
          let posicion = string.charCodeAt(i);         
          if (posicion >= 65 && posicion <= 90) {
            mensaje = ((posicion - 65 + offset) % 26) + 65;   // Mayusculas
          } else if (posicion >= 97 && posicion <= 122) {  // Minusculas
            mensaje = ((posicion - 97 + offset) % 26) + 97;
          }else if (posicion === 32) {  // que lea espacios
            mensaje = 32;
          }
          resultado += String.fromCharCode(mensaje);
        }    
        return resultado;
      }else{
        throw new TypeError();
      }
    },
    decode: (offset, string) => {
      let desencriptado = "";
      let mensajeDesencriptado = "";
      offset= parseInt(offset);

    if(string !="" && offset !="" && offset != 0){
      for (let i = 0; i < string.length; i++){
        let posicion = string.charCodeAt(i);   
        if (posicion >= 65 && posicion <= 90) {  // mayusculas
          mensajeDesencriptado = ((posicion - 90 - offset) % 26) + 90;
        }else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {     //Fórmula letras minúsculas
          mensajeDesencriptado = ((posicion - 122 - offset) % 26) + 122;
        }else if (posicion === 32) {       //Espacio
          mensajeDesencriptado = 32;
        }
        desencriptado += String.fromCharCode(mensajeDesencriptado);
      } 
      return desencriptado;
    }else{
      throw new TypeError();
    }  
 }
}

export default cipher;


