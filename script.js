const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".btn-copiar");
const muñeco = document.querySelector(".muñeco");
const msjNo = document.querySelector(".msj-no");
const msjInfo = document.querySelector(".msj-info");

function ocultarMuñeco(boolean){
    if(boolean){
        muñeco.setAttribute("hidden","");
        msjNo.setAttribute("hidden","");
        msjInfo.setAttribute("hidden","");
        copiar.removeAttribute("hidden");
    }else{
        muñeco.removeAttribute("hidden");
        msjNo.removeAttribute("hidden");
        msjInfo.removeAttribute("hidden");
        copiar.setAttribute("hidden","");
    }
}
function btnEncriptar() {

    if(!validarInput()){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        if(mensaje.value !== ""){
            ocultarMuñeco(true);
        } else {
            ocultarMuñeco(false);
        }
        
    }
}

function btnCopiar() {
    navigator.clipboard.writeText(mensaje.value);
}

function btnDesencriptar() {

    if(!validarInput()){
        const textoDesencriptado = desencriptar(textArea.value);
        mensaje.value = textoDesencriptado;
        textArea.value = "";
        if(mensaje.value !== ""){
            ocultarMuñeco(true);
        } else {
            ocultarMuñeco(false);
        }
        
    }
}

function encriptar(stringEncriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptar;
}

function desencriptar(stringDesencriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptar;
}

function validarInput() {

    let palabraEscrita = document.querySelector(".text-area").value;
    let validador = palabraEscrita.match(/^[a-z, ""]*$/);

    if(!validador || validador.lenght === 0) {
        alert("Caracteres no permitidos, por favor intente usar sólo letras en minuscula, sin tildes ni caracteres especiales.");
        location.reload();
        return true;
    }
}