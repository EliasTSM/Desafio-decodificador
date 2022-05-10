var criptografar = document.querySelector(".botao-c");
var descriptografar = document.querySelector(".botao-d");

criptografar.addEventListener("click", function(){
    event.preventDefault();
    var textoCodificado = codificar();
    document.getElementById("sem-texto").style.display = "none";
    console.log(textoCodificado);
    var p = document.querySelector("#com-texto");
    document.getElementById("esconder").style.display = "block";
    document.getElementById("copia").style.display = "block";
    p.textContent = textoCodificado;
})

descriptografar.addEventListener("click", function(){
    event.preventDefault();
    var textoDecodificado = decodificar();
    document.getElementById("sem-texto").style.display = "none";
    console.log(textoDecodificado);
    var p = document.querySelector("#com-texto");
    document.getElementById("esconder").style.display = "block";
    document.getElementById("copia").style.display = "block";
    p.textContent = textoDecodificado;
})

function codificar(){
    var forms = document.querySelector("#form");
    var texto = forms.codificacao.value;
    forms.reset();
    var novoTexto = texto.replace(/e/g, "enter")
    var novoTexto = novoTexto.replace(/i/g, "imes")
    var novoTexto = novoTexto.replace(/a/g, "ai")
    var novoTexto = novoTexto.replace(/o/g, "ober")
    var novoTexto = novoTexto.replace(/u/g, "ufat")
    return (novoTexto);
}

function decodificar(){
    var forms = document.querySelector("#form");
    var texto = forms.codificacao.value;
    forms.reset();
    var novoTexto = texto.replace(/enter/g, "e")
    var novoTexto = novoTexto.replace(/imes/g, "i")
    var novoTexto = novoTexto.replace(/ai/g, "a")
    var novoTexto = novoTexto.replace(/ober/g, "o")
    var novoTexto = novoTexto.replace(/ufat/g, "u")
    return (novoTexto);
}

function copiar() {
    var copiaTexto = document.querySelector("#com-texto").textContent;
    navigator.clipboard.writeText(copiaTexto);
    console.log(copiaTexto);
    document.getElementById("esconder").style.display = "none";
    document.getElementById("sem-texto").style.display = "block";
  }