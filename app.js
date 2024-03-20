let textcopy = "";
const input = document.getElementById("textoUsuario");

input.addEventListener("input", updateValue);

function updateValue(e) {
    document.getElementById('SeccionTexto').style.display='none';
    document.getElementById('copiar').style.display='inline';
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector("#textoEncDes");
    elementoHTML.innerHTML = texto;
    return;
}

function encriptar(){
    var texto = document.querySelector("#textoUsuario").value;
    console.log(textoUsuario);
    var textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    document.querySelector("#textoEncDes").value = textoEncriptado;
    asignarTextoElemento("p", `Texto encriptado: <br/>${textoEncriptado}`)
    textcopy = textoEncriptado;
}

function desencriptar (){ 
    var texto = document.querySelector("#textoUsuario").value; 
    console.log(textoUsuario);
    var textoEncriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector("#textoEncDes").value = textoEncriptado; 
    asignarTextoElemento("p", `Texto desencriptado: <br/>${textoEncriptado}`)
    textcopy = textoEncriptado;
}

function copiarContenido(){
    navigator.clipboard.writeText(textcopy);
    document.getElementById("textoUsuario").value = "";
    alert("Texto copiado correctamente")
}

function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }
    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }


