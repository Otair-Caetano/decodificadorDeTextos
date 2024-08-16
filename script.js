const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const enigmaMaquinaNazi = document.getElementById("enigmaMaquinaNazi");/*Cria constantes para poder implementar na função*/
const btnMensagem = document.getElementById("btnMensagem");/*Cria constantes para poder implementar na função*/
const btnCopiar = document.getElementById("btn-copiar");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    enigmaMaquinaNazi.style.display = "none";/*Escomde a imagem, quando o btnEncriptar é clicado*/
    btnMensagem.style.display = "none";/*Escomde os textos e tudo que está no btnMensagem, quando o btnEncriptar é clicado*/
    btnCopiar.style.display = "block";
}


function encriptar (stringEncriptada) {

    let matrizCodigo = [["e" , "enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    } 

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar (stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    } 

    return stringDesencriptada;
}

document.getElementById('btn-copiar').addEventListener('click', function() {
    // Obter o texto do textarea
    var mensagem = document.getElementById('mensagem').value; 

    // Usar a API Clipboard
    navigator.clipboard.writeText(mensagem).then(function() {
        alert('Texto copiado!');

          // Colocar o texto copiado no campo "Digite aqui o seu texto"
        document.getElementById('textarea').value = mensagem;
    }).catch(function(err) {
        console.error('Erro ao copiar: ', err);
    });
});

