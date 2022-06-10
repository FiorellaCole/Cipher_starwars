import cipher from './cipher.js';

const botonCifrado = document.getElementById("cifrar");
botonCifrado.addEventListener("click", cifrar);


const botonDescifrado = document.getElementById("descifrar");
botonDescifrado.addEventListener("click", descifrar);


document.querySelector("#siguiente").addEventListener("click", () => {
  document.querySelector("#pantalla1").style.display = "none";
  document.querySelector("#pantalla2").style.display = "block";
});


document.querySelector("#empezar").addEventListener("click", () => {
  document.querySelector("#pantalla2").style.display = "none";
  document.querySelector("#pantalla3").style.display = "block";
});


function validationoffSet() {
  return document.getElementById("offset").value == "" ? alert("Ingresa los valores") : document.getElementById("offset").value;
}

function validartextoCifrado() {
  return document.getElementById("mensaje").value == "" ? alert("Ingresa el texto a cifrar") : document.getElementById("mensaje").value;
}


function cifrar() {
  validationoffSet()
  validartextoCifrado()
  const mensajeACifrar = document.getElementById("mensaje").value;
  const offset = document.getElementById("offset").value;
  document.getElementById("resultado").innerHTML = cipher.encode(offset, mensajeACifrar);

}

function descifrar() {
  validationoffSet()
  validartextoCifrado()
  const mensajeADescifrar = document.getElementById("mensaje").value;
  const offset = document.getElementById("offset").value;
  document.getElementById("resultado").innerHTML = cipher.decode(offset, mensajeADescifrar);

}






