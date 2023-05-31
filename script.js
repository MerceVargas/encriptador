
const textArea = document.querySelector(".text-area");
const mensaje  = document.querySelector(".mensaje");

function sololetras(e){
  key = e.keyCode || e.which;
  teclado = String.fromCharCode(key).toLowerCase();
  letras="abxdefghijklmnopqrstuvwxyz";
  especiales="8-37-38-46-|64";
  teclado_especial=false;
  for(var i in especiales){
    if(key == especiales[i]){
      teclado_especial=true;
      break;
    }
  }

  if(letras.indexOf(teclado) == -1 && !teclado_especial){
    return false;
  }
}

  function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage="none"
      }

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

  function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value="";
    }

    function desencriptar(stringDesencriptada) {
      let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
      stringDesencriptada = stringDesencriptada.toLowerCase()

      for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
          stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
      }
     return stringDesencriptada


    }
     
     
     
/* Función para copiar */

function btnCopiar() {
  var textoEncriptado = document.getElementById("myInput");
  textoEncriptado.select();
  textoEncriptado.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textoEncriptado.value);
  alert("Texto copiado: " + textoEncriptado.value);
}
